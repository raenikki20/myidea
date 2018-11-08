<template>
  <div id="Notice">
    <p class="dark-blue-text">
      {{ Notice }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: [
    'Notice'
  ]
}
</script>

<style>
  #Notice {
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 100;
  }
</style>
