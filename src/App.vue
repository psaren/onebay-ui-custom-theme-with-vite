<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>onebay-ui custom theme with vite</h1>
  <Button />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './pages/button/index.vue'


export default defineComponent({
  name: 'App',
  components: {
    Button
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>