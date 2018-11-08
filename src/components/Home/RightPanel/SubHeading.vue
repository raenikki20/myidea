<template>
  <div id="SubHeading">
    <h2 class="dark-blue-text">
      {{ SubHeading }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'SubHeading',
  props: [
    'SubHeading'
  ]
}
</script>

<style scoped>
  #SubHeading {
    text-align: center;
  }
  h2 {
    font-size: 36px;
    font-weight: 100;
    margin-bottom: 40px;
  }
</style>
