<template>
  <div id="MainPanel" class="light-grey-bg">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MainPanel',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  #MainPanel {
    /* height of navbar */
    padding-top: 50px;
    /* width of sidebar */
    padding-left: 270px;
    /* height of screen */
    height: 100%;
  }
</style>
