<template>
  <div id="MainPanel" class="light-grey-bg">
    <b-container fluid>
      <b-row>
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
    padding-left: 270px;
    height: 100%;
  }
</style>
