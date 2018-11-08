<template>
  <div id="ResetPassword">
    <Heading :Heading="Heading"></Heading>
    <SubHeading :SubHeading="SubHeading"></SubHeading>
    <Form></Form>
  </div>
</template>

<script>
import Heading from '@/components/Home/RightPanel/Heading'
import SubHeading from '@/components/Home/RightPanel/SubHeading'
import Form from '@/components/ResetPassword/Form'
export default {
  name: 'ResetPassword',
  data: function () {
    return {
      Heading: 'Reset Password',
      SubHeading: 'Enter email associated with Account'
    }
  },
  components: {
    'Heading': Heading,
    'SubHeading': SubHeading,
    'Form': Form
  }
}
</script>

<style>
  #ResetPassword {}
</style>
