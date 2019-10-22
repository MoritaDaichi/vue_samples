<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <router-link to="/home">home</router-link>
      <route-link to ="/hello">hello</route-link>
    </nav>
  <router-view />
  aaa
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
