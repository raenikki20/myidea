<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.light-grey-bg {
  background-color: #ECECEC;
}
.light-grey-text {
  color: #ECECEC;
}
.blue-bg {
  background-color: #5F70E3;
}
.blue-text {
  color: #5F70E3;
}
.dark-blue-bg {
  background-color: #555C6D;
}
.dark-blue-text {
  color: #555C6D;
}
</style>
