<template>
  <div id="Profile">
    <b-container>
      <b-row>
        <b-col cols="3" sm="12" md="6" lg="3" class="colTop" v-for="n in 4" :key="n">
          <b-img blank blank-color="#DFDFDF" height="500" width="1500" alt="img" fluid/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  #Profile {}
  .colTop {
    padding-top: 30px;
  }
</style>
