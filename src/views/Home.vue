<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuizGame from '@/components/prototype/QuizGame.vue'

export default {
  name: 'home',
  components: {
    QuizGame
  }
}
</script>
