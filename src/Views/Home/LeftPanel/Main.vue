<template>
  <div id="Main">
    <Heading></Heading>
    <Slogan></Slogan>
  </div>
</template>

<script>
import Heading from '@/components/Home/LeftPanel/Heading'
import Slogan from '@/components/Home/LeftPanel/Slogan'
export default {
  name: 'Main',
  data: function () {
    return {}
  },
  components: {
    'Heading': Heading,
    'Slogan': Slogan
  },
  methods: {}
}
</script>

<style scoped>
  #Main {}
</style>
