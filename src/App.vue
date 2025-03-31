<template>
  <div class="container">
      <div class="column">
        <img alt="Vue logo" src="./assets/logo1.png"  width="600" height="350">
      </div>
      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png"  width="700" height="350">
      </div>
      <div class="column">
        <img alt="Vue logo" src="./assets/logo3.png"  width="700" height="350">
      </div>
    </div>
  <HelloWorld msg="Welcome to LiYONG TEST Web"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}


</script>

<style>
.container {
  display: flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
