<template>
  <sui-modal textAlign="left" open="open">
    <sui-modal-content>
      <sui-header>Take Quiz: {{ quiz ? quiz.title : ''}}</sui-header>
      <sui-form>
        <sui-form-field v-for="question in quiz.questions" :key="question.id">
          {{ question.question }}
          <sui-checkbox v-for="answer in question.answers" :key="answer.id"
                        v-model="answers[question.id]"
                        radio
                        v-bind:label="answer.answer"
                        v-bind:value="answer.id.toString()"></sui-checkbox>
        </sui-form-field>
        <sui-button basic positive @click="report(JSON.stringify(answers))">Take Test!</sui-button>
      </sui-form>
    </sui-modal-content>
  </sui-modal>
</template>
<script>
  import {
    Button,
    Modal,
    ModalContent,
    ModalActions,
    Checkbox,
    Container,
    Header,
    Form,
    FormFields,
    FormField,
    Segment
  } from 'semantic-ui-vue';

  export default {
    data: function() {
      return {
        answers: {}
      };
    },
    beforeMount: function() {
      console.log(this.answers);
    },
    methods: {
      report: function() {
        console.log(this.answers);
        this.$emit('quiz-taken', this.answers);
      }
    },
    props: {
      quiz: {
        type: Object
      },
      open: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Button,
      Checkbox,
      Container,
      Header,
      Form,
      FormFields,
      FormField,
      Modal,
      ModalContent,
      ModalActions,
      Segment
    }
  }
</script>
