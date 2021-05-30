<template>
  <div id="app" style="background-color: #FAFAFA">
    <img id="car_img" alt="Vue logo" src="./assets/car.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  #car_img {
    height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
