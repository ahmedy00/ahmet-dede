<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'
  import axios from 'axios'

  type articleType = {
    title?: string | null
    link?: string | null
    description?: string | null
  }

  const items = ref<articleType[]>()

  const fetchArticles = async () => {
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

        // Limit description to numberOfWords
        const numberOfWords = 100
        let words = description?.split(/\s+/)
        if (!!words?.length && words.length > numberOfWords) {
          description = words.slice(0, numberOfWords).join(' ') + '...'
        }
        return { title, link, description }
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  onBeforeMount(() => {
    fetchArticles()
  })
</script>

<template>
  <div class="animate-slide-up mt-12">
    <div v-for="item in items" :key="`${item.title}`">
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