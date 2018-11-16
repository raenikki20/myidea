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
          <b-row align-h="center" align-v="center" style="height: 100%;">
            <b-col cols="9">
              <Subscribe></Subscribe>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Main from '@/Views/Home/LeftPanel/Main'
import Subscribe from '@/Views/Home/RightPanel/Subscribe/Subscribe'
import SignUp from '@/Views/Home/RightPanel/SignUp/SignUp'
import Login from '@/Views/Home/RightPanel/Login/Login'
import ResetPassword from '@/Views/Home/RightPanel/ResetPassword/ResetPassword'
export default {
  name: 'Home',
  data: function () {
    return {}
  },
  components: {
    'Main': Main,
    'Subscribe': Subscribe,
    'SignUp': SignUp,
    'Login': Login,
    'ResetPassword': ResetPassword
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
      margin-top: 20%;
    }
</style>
