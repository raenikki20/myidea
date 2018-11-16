<template>
  <div id="Button">
    <template>
      <b-button type="submit" class="submit dark-blue-bg"> {{ label }} </b-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: function () {
    return {}
  },
  props: [
    'label'
  ]
}
</script>

<style>
  #Button {
    text-align: center;
  }
  .submit {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 40px;
  }
</style>
