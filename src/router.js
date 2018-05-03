import Vue from 'vue'
import Router from 'vue-router'
import QuizGame from '@/views/prototype/QuizGame.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: QuizGame
    }
  ]
})
