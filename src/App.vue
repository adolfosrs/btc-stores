<template>
  <div id="app">

    <div class="header-spacer"></div>
    <navigation></navigation>

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-sizing: border-box;
  font-family: 'Fira Mono', monospace;
}

a{
  text-decoration: none;
  color: #61D95C;
}
</style>
