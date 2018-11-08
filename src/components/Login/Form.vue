<template>
  <div id="Form">
    <b-form @submit="onSubmit">
      <b-form-input id="email"
                    type="email"
                    v-model="login.email"
                    required
                    placeholder="Email"
                    class="input-fields">
      </b-form-input>
      <b-form-input id="password"
                    type="password"
                    v-model="login.password"
                    required
                    placeholder="Password"
                    class="input-fields">
      </b-form-input>
      <b-form-checkbox id="checkbox"
                     v-model="status"
                     value="true"
                     unchecked-value="false"
                     plain
                     class="checkbox">
        Remember Password
      </b-form-checkbox>
      <b-button type="submit" class="submit dark-blue-bg">
        Enter
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      login: {
        email: '',
        password: ''
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
