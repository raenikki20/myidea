<template>
  <div id="Heading">
    <h1 class="dark-blue-text">
      {{ Heading }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: [
    'Heading'
  ]
}
</script>

<style scoped>
  #Heading {
    text-align: center;
  }
  h1 {
    font-size: 64px;
    font-weight: 600;
    margin-bottom: 30px;
  }
</style>
