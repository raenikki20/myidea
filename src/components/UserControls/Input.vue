<template>
  <div id="Input">
    <!-- Text -->
    <template v-if="type == 'text'">
      <b-form-input id="text"
                    type="text"
                    required
                    :placeholder="placeholder"
                    class="input-fields">
      </b-form-input>
    </template>
    <!-- EMAIL TYPE -->
    <template v-if="type == 'email'">
      <b-form-input id="email"
                    type="email"
                    required
                    placeholder="Email"
                    class="input-fields">
      </b-form-input>
    </template>
    <!-- PASSWORD TYPE -->
    <template v-if="type == 'password'">
      <b-form-input id="password"
                    type="password"
                    required
                    placeholder="Password"
                    class="input-fields">
      </b-form-input>
     </template>
     <!-- CONFIRM PASSWORD TYPE -->
    <template v-if="type == 'confirmpassword'">
      <b-form-input id="confirmPassword"
                    type="password"
                    required
                    placeholder="Confirm Password"
                    class="input-fields">
      </b-form-input>
     </template>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: function () {
    return {}
  },
  props: [
    'type',
    'placeholder'
  ]
}
</script>

<style>
  #Input {
    text-align: center;
  }
  .input-fields {
    border-radius: 10px;
    margin-bottom: 10px;
    height: 40px;
  }
</style>
