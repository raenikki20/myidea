<template>
  <div id="Home">
    <b-container fluid>
      <b-row>
        <b-col cols="8" sm="12" md="12" lg="8" class="left blue-bg">
          <b-row align-h="center" class="top-margin">
            <b-col cols="9">
              <Main></Main>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="4" sm="12" md="12" lg="4" class="right light-grey-bg">
          <b-row align-h="center" class="top-margin">
            <b-col cols="9">
              <router-view></router-view>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Main from '@/Views/Home/LeftPanel/Main'
export default {
  name: 'Home',
  data: function () {
    return {}
  },
  components: {
    'Main': Main
  }
}
</script>

<style scoped>
    #Home {
      height: 100vh;
    }
    .left {
      height: 100vh;
    }
    .right {
      height: 100vh;
    }
    .top-margin {
      margin-top: 300px;
    }
</style>
