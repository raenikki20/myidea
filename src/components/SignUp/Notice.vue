<template>
  <div id="Notice">
    <p class="dark-blue-text">
      Already have an Account, <router-link to='/login'>Login Now</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Notice'
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
