<template>
  <div id="Login">
    <Heading :Heading="Heading"></Heading>
    <SubHeading :SubHeading="SubHeading"></SubHeading>
    <Form></Form>
    <Notice></Notice>
  </div>
</template>

<script>
import Heading from '@/components/Home/RightPanel/Heading'
import SubHeading from '@/components/Home/RightPanel/SubHeading'
import Form from '@/components/Login/Form'
import Notice from '@/components/Login/Notice'
export default {
  name: 'Login',
  data: function () {
    return {
      Heading: 'Login',
      SubHeading: 'Continue creating your Projects'
    }
  },
  components: {
    'Heading': Heading,
    'SubHeading': SubHeading,
    'Form': Form,
    'Notice': Notice
  },
  methods: {}
}
</script>

<style scoped>
  #Login {}
</style>
