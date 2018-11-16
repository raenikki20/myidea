<template>
  <div id="Notice">
    <p v-if="Notice.link" class="dark-blue-text">
      {{ Notice.text }}<router-link :to="Notice.link">{{ Notice.text2 }}</router-link>
    </p>
    <p v-else class="dark-blue-text">
      {{ Notice.text }}
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
