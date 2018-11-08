<template>
  <div id="Form">
    <b-form @submit="onSubmit">
      <b-form-input id="email"
                    type="email"
                    v-model="email"
                    required
                    placeholder="Email"
                    class="email">
      </b-form-input>
      <b-button type="submit" class="submit dark-blue-bg">
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      email: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.email = ''
    }
  }
}
</script>

<style>
  #Form {
    text-align: center;
  }
  .email {
    border-radius: 10px;
    margin-bottom: 10px;
    height: 40px;
  }
  .submit {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 40px;
  }
</style>
