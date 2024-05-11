import todo from '../assets/projects/todo-app.png'
import spring from '../assets/projects/java-spring.jpg'

const projects = [
    {
        name: 'Vue TODO App',
        image: todo,
        description: 'A Vue 3 todo app that leverages Pinia for state management, allowing users to easily track and update their tasks. It features a responsive and visually appealing interface designed with Tailwind CSS.',
        blitz: 'https://stackblitz.com/~/github.com/ahmedy00/vue-todo',
        github: 'https://github.com/ahmedy00/vue-todo'
    },
    {
        name: 'Layered Architecture and Dependency Injection',
        image: spring,
        description: 'It is a repository that covers how layered architecture and dependency injection concepts are handled in Java Spring with sample codes and documents. Aims to improve personal learning and application skills',
        blitz:'https://stackblitz.com/~/github.com/ahmedy00/spring-layered-architecture-and-dependency-injection',
        github:'https://github.com/ahmedy00/spring-layered-architecture-and-dependency-injection',
    }
]

export default projects