<template>
  <div id="Home">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
export default {
  name: 'Home',
  data: function () {
    return {}
  },
  components: {
    'Header': Header
  }
}
</script>

<style scoped>
    #Home {}
</style>
