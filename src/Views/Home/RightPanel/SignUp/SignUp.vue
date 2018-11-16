<template>
  <div id="SignUp">
    <Heading type="two" Heading="Sign Up"></Heading>
    <SubHeading SubHeading="Begin sharing your projects"></SubHeading>
    <b-form @submit="SignUp">
      <CustomInput type="text" placeholder="First Name"></CustomInput>
      <CustomInput type="text" placeholder="Last Name"></CustomInput>
      <CustomInput type="email"></CustomInput>
      <CustomInput type="password"></CustomInput>
      <CustomInput type="confirmpassword"></CustomInput>
      <CustomButton label="Sign Up"></CustomButton>
    </b-form>
    <Notice :Notice="Notice"></Notice>
    <h1>{{firstname}}</h1>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import SubHeading from '@/components/Headings/SubHeading'
import CustomInput from '@/components/UserControls/Input'
import CustomButton from '@/components/UserControls/Button'
import Notice from '@/components/Headings/Notice'
export default {
  name: 'SignUp',
  data: function () {
    return {
      Notice: {
        text: 'Already have an Account, ',
        text2: 'Login Now',
        link: '/login'
      }
    }
  },
  components: {
    'Heading': Heading,
    'SubHeading': SubHeading,
    'CustomInput': CustomInput,
    'CustomButton': CustomButton,
    'Notice': Notice
  },
  methods: {
    SignUp () {
      console.log('Sign Up')
    }
  }
}
</script>

<style scoped>
  #SignUp {}
</style>
