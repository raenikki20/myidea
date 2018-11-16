<template>
  <div id="NewSetup">
    <b-container fluid>
      <b-row align-h="center" align-v="center" class="rowSpacing">
        <b-col cols="9">
          <b-row align-h="center" align-v="center">
            <b-col cols="4" class="tabColumn px-0">
              <h2>Setup</h2>
            </b-col>
            <b-col cols="4" class="tabColumn px-0">
              <h2>Content</h2>
            </b-col>
            <b-col cols="4" class="tabColumn px-0">
              <h2>Review</h2>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="9" class="px-0">
          <b-progress height="6px" :value="min" :max="max" variant="status">
             <b-progress-bar :value="min" variant="status"></b-progress-bar>
            </b-progress>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center" class="rowSpacing">
        <b-col cols="10" class="setup">
          hello
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NewSetup',
  data: function () {
    return {
      min: 33.33,
      max: 100
    }
  }
}
</script>

<style scoped>
  #NewSetup {}
  .rowSpacing {
    padding-top: 20px;
  }
  .tabColumn {
    text-align: center;
    position: relative;
  }
  .progress {
    background-color: white;
    border-radius: 0px;
  }
  h2 {
    color: #4759CB;
    font-size: 18px;
    padding-bottom: 15px;
  }
  .bg-status {
    background-color: #4759CB !important;
  }
  .setup {
    background-color: white;
  }
</style>
