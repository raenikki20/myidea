<template>
  <div id="SignUp">
    <Header></Header>
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col cols="2" class="box">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="firstnameGroup" label="First name" label-for="firstname">
              <b-form-input id="firstname" type="text" v-model="form.first" required placeholder="Enter first name"></b-form-input>
            </b-form-group>
            <b-form-group id="lastnameGroup" label="Last name" label-for="lastname">
              <b-form-input id="lastname" type="text" v-model="form.last" required placeholder="Enter last name"></b-form-input>
            </b-form-group>
            <b-form-group id="emailGroup" label="Email address:" label-for="email" description="We'll never share your email with anyone else.">
              <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email"></b-form-input>
            </b-form-group>
            <b-form-group id="passwordGroup" label="Password:" label-for="password">
              <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter Password"></b-form-input>
            </b-form-group>
            <b-form-group id="confirmPasswordGroup" label="Confirm Password:" label-for="confirmPassword">
              <b-form-input id="confirmPassword" type="password" v-model="form.password" required placeholder="Re-enter Password"></b-form-input>
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
  name: 'SignUp',
  data: function () {
    return {
      form: {
        first: '',
        last: '',
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
      this.first = ''
      this.last = ''
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>

<style scoped>
    #SignUp {}
    .box {
    margin-top: 100px;
    background-color: #D0D0D0;
    padding: 15px;
  }
</style>
