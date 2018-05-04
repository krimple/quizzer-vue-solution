<template>
  <div>
    <sui-card-group :items-per-row="3">
      <sui-card v-for="quiz in quizzes" :key="quiz.id">
        <sui-card-header> Quiz - Developers</sui-card-header>
        <sui-card-content>
          <sui-card-meta>{{ quiz.title }}</sui-card-meta>
          <sui-card-description>Do you have what it takes to be technical?</sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-button
              basic positive
              @click="selectQuiz(quiz)">Take Quiz!</sui-button>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
    <QuizTaker @quiz-taken="reportAnswers($event)"/>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex';
  import {Card, CardDescription, CardMeta, CardGroup, CardHeader, CardContent} from 'semantic-ui-vue';
  import QuizTaker from './QuizTaker.vue';

  export default {
    components: {QuizTaker, CardGroup, Card, CardDescription, CardHeader, CardContent},
    computed: mapState({
        quizzes: state => state.quizzes,
        selectedQuiz: state => state.selectedQuiz
    }),
    methods: {
      ...mapActions(['selectQuiz']),
      reportAnswers: function(answers) {
        console.log('answers emitted from survey. ', JSON.stringify(answers));
      }
    }
  }
</script>