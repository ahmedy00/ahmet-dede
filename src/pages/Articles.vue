<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'
  import axios from 'axios'

  type articleType = {
    title?: string | null
    link?: string | null
    description?: string | null
  }

  const items = ref<articleType[]>()
  const isFetching = ref(false)

  const fetchArticles = async () => {
    isFetching.value = true
    const proxyUrl = 'https://api.allorigins.win/get?url='
    const feedUrl = encodeURIComponent('https://medium.com/feed/@ahmetdede')
    const url = `${proxyUrl}${feedUrl}`
    try {
      const response = await axios.get(url)
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(response.data.contents, "text/xml")
      const rawItems = xmlDoc.querySelectorAll('item')
      items.value = Array.from(rawItems).map(item => {
        const title = item.querySelector('title')?.textContent
        const link = item.querySelector('link')?.textContent
        const namespaceURI = "http://purl.org/rss/1.0/modules/content/"
        let description = item.getElementsByTagNameNS(namespaceURI, 'encoded')[0]?.textContent

        // Remove images from description
        if (description) {
          const htmlDoc = parser.parseFromString(description, 'text/html')
          const figures = htmlDoc.querySelectorAll('figure')
          figures.forEach(figure => {
            figure.parentNode?.removeChild(figure)
          })
          description = htmlDoc.body.innerHTML
        }

        // Limit description to numberOfWords
        const numberOfWords = 100
        let words = description?.split(/\s+/)
        if (!!words?.length && words.length > numberOfWords) {
          description = words.slice(0, numberOfWords).join(' ') + '...'
        }
        return { title, link, description }
      })
      isFetching.value = false
    } catch (error) {
      console.log('error', error)
    }
  }

  onBeforeMount(() => {
    fetchArticles()
  })
</script>

<template>
  <div v-if="isFetching" class="animate-spin-custom border-2 border-[#F3F3F3] rounded-full border-t-2 border-t-primary w-8 h-8 absolute left-[50%] top-[40%]" />
  <div v-if="isFetching" class="text-center mt-[22rem] ml-10">Please wait while articles fetching.</div>
  <div v-if="!isFetching" class="animate-slide-up mt-12">
    <div v-for="item in items" :key="`${item.title}`" class="mb-8">
      <div class="p-6 bg-primary border rounded-lg shadow">
        <a :href="item.link || 'https://medium.com/@ahmetdede'">
          <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ item.title }}</h5>
        </a>
        <p class="mb-3 font-normal" v-html="item.description" />
        <div class="flex items-center justify-between mt-8">
          <button class="dark:bg-dark-background bg-light-background py-2 px-6 rounded shadow-md shadow-blue-800">
            <a :href="item.link || 'https://medium.com/@ahmetdede'" target="_blank" class="flex flex-row items-center space-x-2 dark:text-light-text text-dark-text">
              <span>Read More</span>
              <mdicon name="arrow-right" />
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>