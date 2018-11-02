<template>
  <div id="Login">
    <Header></Header>
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col cols="2" class="box">
          <b-form @submit="onSubmit">
            <b-form-group id="emailGroup" label="Email address:" label-for="email" description="We'll never share your email with anyone else.">
              <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email"></b-form-input>
            </b-form-group>
            <b-form-group id="passwordGroup" label="Password:" label-for="password">
              <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter Password"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
export default {
  name: 'Login',
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    'Header': Header
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.reset()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>

<style scoped>
  #Login {
    text-align: center;
  }
  h1 {}
  .box {
    margin-top: 100px;
    background-color: #D0D0D0;
    padding: 15px;
  }
</style>
