import Vue from 'vue'
import Router from 'vue-router'
// import QuizGame from '@/views/prototype/QuizGame.vue'
// import QuizGame from '@/views/vue-only/QuizGame.vue'
import QuizGame from '@/views/vue-and-vuex/QuizGame.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: QuizGame
    }
  ]
})
