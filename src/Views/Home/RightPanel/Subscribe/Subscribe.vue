<template>
  <div id="Subscribe">
    <Heading :Heading="Heading"></Heading>
    <SubHeading :SubHeading="SubHeading"></SubHeading>
    <Form></Form>
    <Notice :Notice="Notice"></Notice>
  </div>
</template>

<script>
import Heading from '@/components/Home/RightPanel/Heading'
import SubHeading from '@/components/Home/RightPanel/SubHeading'
import Form from '@/components/Subscribe/Form'
import Notice from '@/components/Home/RightPanel/Notice'
export default {
  name: 'Subscribe',
  data: function () {
    return {
      Heading: 'Want to know when we launch?',
      SubHeading: 'Leave your email and we will be in touch',
      Notice: 'Dont worry, your email is safe with us'
    }
  },
  components: {
    'Heading': Heading,
    'SubHeading': SubHeading,
    'Form': Form,
    'Notice': Notice
  }
}
</script>

<style>
  #Subscribe {}
</style>
