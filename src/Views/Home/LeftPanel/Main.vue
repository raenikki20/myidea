<template>
  <div id="Main">
    <Heading type="one" Heading="Logo"></Heading>
    <Slogan></Slogan>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import Slogan from '@/components/Headings/Slogan'
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
