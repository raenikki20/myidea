<template>
  <div id="Header" class="blue-bg">
    <div class="content">
      <h1>Logo</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  #Header {
    position: fixed;
    height: 50px;
    width: 100%;
    z-index: 10000;
  }
  .content {
    display: inline;
  }
</style>
