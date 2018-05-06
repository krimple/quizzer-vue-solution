import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'axios';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createLogger()],
  state: {
    quizzes: {},
    selectedQuiz: null
  },
  mutations: {
    loadQuizData(state, quizData) {
      state.quizzes = quizData;
    },
    selectQuiz(state, quiz) {
      state.selectedQuiz = quiz;
    },
    clearSelectedQuiz(state) {
      state.selectedQuiz = null;
    }
  },
  actions: {
    loadQuizzes({ commit }) {
      get('/api/quizzes')
        .then(
          payload => {
            this.commit('loadQuizData', payload.data);
          }
        );
    },
    selectQuiz({ commit }, quiz) {
      this.commit('selectQuiz', quiz);
    },
    clearSelectedQuiz({ commit }) {
      this.commit('clearSelectedQuiz');
    }
  }
})
