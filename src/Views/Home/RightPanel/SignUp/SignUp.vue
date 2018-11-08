<template>
  <div id="SignUp">
    <Heading :Heading="Heading"></Heading>
    <SubHeading :SubHeading="SubHeading"></SubHeading>
    <Form></Form>
    <Notice></Notice>
  </div>
</template>

<script>
import Heading from '@/components/Home/RightPanel/Heading'
import SubHeading from '@/components/Home/RightPanel/SubHeading'
import Form from '@/components/SignUp/Form'
import Notice from '@/components/SignUp/Notice'
export default {
  name: 'SignUp',
  data: function () {
    return {
      Heading: 'Sign Up',
      SubHeading: 'Begin sharing your projects'
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
  #SignUp {}
</style>
