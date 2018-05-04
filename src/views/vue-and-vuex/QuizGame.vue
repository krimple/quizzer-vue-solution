<template>
  <sui-container>
    <sui-header>Quizzer</sui-header>
    <sui-divider />
    <QuizList />
  </sui-container>
</template>
<script>

  import * as axios from 'axios';
  import QuizList from '@/components/vue-and-vuex/QuizList.vue';

  export default {
    components: {
      QuizList
    },
    beforeMount: function() {
      this.$store.dispatch('loadQuizzes');
    }
  }
</script>

<style scoped>

</style>