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
  <!-- <HelloWorld msg="Welcome to LiYONG TEST Web"/> -->
  <!---------------------------------------------------------------------------------------->
  <!-- <div> -->
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/HelloWorld">公司网站</router-link>
      </li>
      <li>
        <router-link to="/category">规划</router-link>
      </li>

      <li>
        <router-link to="/LabelBar">侧边栏</router-link>
      </li>

      <li>
        <router-link to="/EcomMom">Ecom</router-link>
      </li>
    </ul>
    
    <router-view></router-view>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }


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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
