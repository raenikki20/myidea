<template>
  <div id="Heading">
    <template v-if="type == 'one'">
      <h1 class="dark-blue-text one">
        {{ Heading }}
      </h1>
    </template>
    <template v-else-if="type == 'two'">
      <h1 class="dark-blue-text two">
        {{ Heading }}
      </h1>
    </template>
    <template v-else-if="type == 'three'">
      <h1 class="dark-blue-text three">
        {{ Heading }}
      </h1>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: [
    'type',
    'Heading'
  ]
}
</script>

<style scoped>
  #Heading {
    text-align: center;
  }
  .one {
    font-size: 180px;
    color: white;
    font-weight: 600;
     margin-bottom: 30px;
  }
  .two {
    font-size: 64px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .three {
    font-size: 44px;
    font-weight: 600;
    margin-bottom: 30px;
  }
</style>
