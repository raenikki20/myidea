<template>
  <div id="Subscribe">
    <Heading type="two" Heading="Want to know when we launch?"></Heading>
    <SubHeading SubHeading="Leave your email and we will be in touch"></SubHeading>
    <b-form @submit="Subscribe">
      <CustomInput type="email"></CustomInput>
      <CustomButton label="Subscribe"></CustomButton>
    </b-form>
    <Notice :Notice="Notice"></Notice>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import SubHeading from '@/components/Headings/SubHeading'
import CustomInput from '@/components/UserControls/Input'
import CustomButton from '@/components/UserControls/Button'
import Notice from '@/components/Headings/Notice'
export default {
  name: 'Subscribe',
  data: function () {
    return {
      Notice: {
        text: 'Dont worry, your email is safe with us'
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
    Subscribe () {
      console.log('Subscribe')
    }
  }
}
</script>

<style>
  #Subscribe {}
</style>
