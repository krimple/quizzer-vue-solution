<template>
  <sui-container>
    <sui-header>Quizzer</sui-header>
    <sui-divider />
    <h3>Quiz List Prototype</h3>
    <QuizList />
    <h3>Quiz Take Prototype</h3>
    <QuizTaker />
  </sui-container>
</template>
<script>

  import QuizList from '@/components/prototype/QuizList.vue';
  import QuizTaker from '@/components/prototype/QuizTaker.vue';

  export default {
    components: {
      QuizList,
      QuizTaker
    }
  }


</script>

<style scoped>

</style>