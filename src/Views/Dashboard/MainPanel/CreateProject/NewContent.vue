<template>
  <div id="NewContent">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="9">
          <b-row>
            <b-col cols="4" class="tabColumn px-0">
              <h2>Setup</h2>
              <b-progress height="6px" :value="max" :max="max" class="progress-bar"></b-progress>
            </b-col>
            <b-col cols="4" class="tabColumn px-0">
              <h2>Content</h2>
              <b-progress height="6px" :value="min" :max="max" class="progress-bar"></b-progress>
            </b-col>
            <b-col cols="4" class="tabColumn px-0">
              <h2>Review</h2>
              <b-progress height="6px" :value="min" :max="max" variant="blue"></b-progress>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row class="footer">
          <b-col cols="12">
            footer
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script scoped>
export default {
  name: 'NewContent',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  #NewContent {}
  .tabColumn {
    text-align: center;
    position: relative;
    padding-top: 20px;
  }
  .progress {
    background-color: white;
    border-radius: 0px;
  }
  h2 {
    color: #4759CB;
    font-size: 18px;
    padding-bottom: 10px;
  }
  .blue {
    background-color: #4759CB;
  }
  .footer {
     /* Full width of screen */
    width: 100%;
    /* Set height of Navbar */
    height: 50px;
    /* Bring to top */
    z-index: 10000;
    /* Fixed ot top */
    position: fixed;
    background-color: #6070E3;
    bottom: 0;
  }
</style>
