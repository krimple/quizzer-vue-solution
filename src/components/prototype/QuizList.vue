<template>
  <sui-card-group :items-per-row="3">
    <sui-card>
      <sui-card-header> Quiz - Developers </sui-card-header>
      <sui-card-content>
        <sui-card-meta>Tech Quizzes</sui-card-meta>
        <sui-card-description>Do you have what it takes to be technical?</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-button basic positive>Take Quiz!</sui-button>
      </sui-card-content>
    </sui-card>

    <sui-card>
      <sui-card-header> Quiz - Developers </sui-card-header>
      <sui-card-content>
        <sui-card-meta>Tech Quizzes</sui-card-meta>
        <sui-card-description>Do you have what it takes to be technical?</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-button basic positive>Take Quiz!</sui-button>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-card-header> Quiz - Developers </sui-card-header>
      <sui-card-content>
        <sui-card-meta>Tech Quizzes</sui-card-meta>
        <sui-card-description>Do you have what it takes to be technical?</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-button basic positive>Take Quiz!</sui-button>
      </sui-card-content>
    </sui-card>

    <sui-card>
      <sui-card-header> Quiz - Developers </sui-card-header>
      <sui-card-content>
        <sui-card-meta>Tech Quizzes</sui-card-meta>
        <sui-card-description>Do you have what it takes to be technical?</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-button basic positive>Take Quiz!</sui-button>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</template>
<script>
  import { Card, CardDescription, CardMeta, CardGroup, CardHeader, CardContent } from 'semantic-ui-vue';
  export default {
    components: {CardGroup, Card, CardDescription, CardHeader, CardContent}
  }
</script>