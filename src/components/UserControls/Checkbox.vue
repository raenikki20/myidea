<template>
  <div id="Checkbox">
    <template>
      <b-form-checkbox id="checkbox"
                        v-model="status"
                        value="true"
                        unchecked-value="false"
                        plain
                        class="checkbox">
                        {{ label }}
      </b-form-checkbox>
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
    'label',
    'status'
  ]
}
</script>

<style>
  #Checkbox {
    text-align: center;
  }
  .checkbox {
    text-align: left;
    margin-bottom: 10px;
    margin-right: 0px;
    width: 100%;
    font-size: 14px;
  }
</style>
