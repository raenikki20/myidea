<template>
  <div id="Notice">
    <p class="dark-blue-text">
      Dont have an Account, <router-link to='/signup'>Sign Up Now</router-link>
    </p>
    <p class="dark-blue-text">
      <router-link to='/resetpassword'>Forgot Password?</router-link>
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
