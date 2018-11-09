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
h1, h2, h3, h4, h5, p {
  margin-bottom: 0px;
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
.grey-bg {
  background-color: #DFDFDF;
}
.grey-text {
  color: #DFDFDF;
}
</style>
