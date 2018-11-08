<template>
  <div id="Form">
    <b-form @submit="onSubmit">
      <b-form-input id="firstname"
                    type="text"
                    v-model="signup.firstname"
                    required
                    placeholder="First name"
                    class="input-fields">
      </b-form-input>
      <b-form-input id="lastname"
                    type="text"
                    v-model="signup.lastname"
                    required
                    placeholder="Last name"
                    class="input-fields">
      </b-form-input>
      <b-form-input id="email"
                    type="email"
                    v-model="signup.email"
                    required
                    placeholder="Email"
                    class="input-fields">
      </b-form-input>
      <b-form-input id="password"
                    type="password"
                    v-model="signup.password"
                    required
                    placeholder="Password"
                    class="input-fields">
      </b-form-input>
      <b-form-input id="confirmPassword"
                    type="password"
                    v-model="signup.confirmPassword"
                    required
                    placeholder="Confirm Password"
                    class="input-fields">
      </b-form-input>
      <b-button type="submit" class="submit dark-blue-bg">
        Sign Up
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      signup: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      status: false
    }
  },
  methods: {
    onSubmit: function () {
      this.login.email = ''
      this.login.password = ''
    }
  }
}
</script>

<style>
  #Form {
    text-align: center;
  }
  .input-fields {
    border-radius: 10px;
    margin-bottom: 10px;
    height: 40px;
  }
  .checkbox {
    text-align: left;
    margin-bottom: 10px;
    margin-right: 0px;
    width: 100%;
    font-size: 14px;
  }
  .submit {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 40px;
  }
</style>
