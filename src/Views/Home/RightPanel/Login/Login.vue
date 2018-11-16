<template>
  <div id="Login">
    <Heading type="two" Heading="Login"></Heading>
    <SubHeading SubHeading="Continue creating your Projects"></SubHeading>
    <b-form @submit="Login">
      <CustomInput type="email"></CustomInput>
      <CustomInput type="password"></CustomInput>
      <CustomCheckbox label="Remember Password" :status="status"></CustomCheckbox>
      <CustomButton label="Login"></CustomButton>
    </b-form>
    <Notice :Notice="Notice"></Notice>
    <Notice :Notice="Notice2"></Notice>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import SubHeading from '@/components/Headings/SubHeading'
import CustomInput from '@/components/UserControls/Input'
import CustomCheckbox from '@/components/UserControls/Checkbox'
import CustomButton from '@/components/UserControls/Button'
import Notice from '@/components/Headings/Notice'
export default {
  name: 'Login',
  data: function () {
    return {
      Notice: {
        text: 'Dont have an Account, ',
        text2: 'Sign Up Now',
        link: '/signup'
      },
      Notice2: {
        text: '',
        text2: 'Forgot Password?',
        link: '/resetpassword'
      },
      login: {
        email: '',
        password: ''
      },
      status: false
    }
  },
  components: {
    'Heading': Heading,
    'SubHeading': SubHeading,
    'CustomInput': CustomInput,
    'CustomCheckbox': CustomCheckbox,
    'CustomButton': CustomButton,
    'Notice': Notice
  },
  methods: {
    Login () {
      console.log('login')
    }
  }
}
</script>

<style scoped>
  #Login {}
</style>
