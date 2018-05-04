<template>
  <sui-container textAlign="left">
    <sui-segment>
      <sui-header>Take Quiz: Favorite Food</sui-header>
      <sui-form>
        <sui-form-field>
          <label>What is your favorite food?</label>
          <sui-checkbox radio label="Corn on the Cob" value="corn" v-model="favoriteFood"/>
          <sui-checkbox radio label="Chicken" value="chicken" v-model="favoriteFood"/>
          <sui-checkbox radio label="Tofu" value="tofu" v-model="favoriteFood"/>
        </sui-form-field>
        <sui-form-field>
          <label>What about?</label>
          <sui-checkbox radio label="Fruit" value="fruit" v-model="alternateFood"/>
          <sui-checkbox radio label="Chicken" value="chicken" v-model="alternateFood"/>
          <sui-checkbox radio label="Tofu" value="tofu" v-model="alternateFood"/>
        </sui-form-field>
        <sui-button basic positive>Take Test!</sui-button>
      </sui-form>
    </sui-segment>
  </sui-container>
</template>
<script>
  import {Button, Checkbox, Container, Header, Form, FormFields, FormField, Segment} from 'semantic-ui-vue';
  export default {
    data: function() {
     return {
       quiz: {
         questions: []
       }
     }
    },
    components: {Button, Checkbox, Container, Header, Form, FormFields, FormField, Segment}
  }
</script>
