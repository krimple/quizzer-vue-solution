<template>
  <sui-container>
    <sui-header>Quizzer</sui-header>
    <sui-divider />
    <QuizList v-bind:quizzes="this.quizzes"/>
  </sui-container>
</template>
<script>

  import * as axios from 'axios';
  import QuizList from '@/components/vue-only/QuizList.vue';

  export default {
    components: {
      QuizList
    },
    data: function() {
      return {
        quizzes: []
      };
    },
    beforeMount: function() {
      axios.get('quiz-data.json')
        .then(
          payload => {
            this.quizzes = payload.data
          },
          errorPayload => {
            console.error(`Failure, ${errorPayload}`);
          });
    }
  }
</script>

<style scoped>

</style>