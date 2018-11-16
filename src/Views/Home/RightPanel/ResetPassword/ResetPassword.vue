<template>
  <div id="ResetPassword">
    <Heading type="two" Heading="Reset Password"></Heading>
    <SubHeading SubHeading="Enter email associated with Account"></SubHeading>
    <b-form @submit="Submit">
      <CustomInput type="email"></CustomInput>
      <CustomButton label="Recover Password"></CustomButton>
      <Notice :Notice="Notice"></Notice>
    </b-form>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import SubHeading from '@/components/Headings/SubHeading'
import CustomInput from '@/components/UserControls/Input'
import CustomButton from '@/components/UserControls/Button'
import Notice from '@/components/Headings/Notice'
export default {
  name: 'ResetPassword',
  data: function () {
    return {
      Notice: {
        text: 'Remembered your password, ',
        text2: 'Login',
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
    Submit () {
      console.log('Reset Password')
    }
  }
}
</script>

<style>
  #ResetPassword {}
</style>
