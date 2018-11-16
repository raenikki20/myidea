<template>
  <div id="Header" class="blue-bg">
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col cols="12" class="col">
          <div class="left">
            <h1>Logo</h1>
          </div>
          <div class="right">
            <div class="vl"></div>
            <a href="#" class="navRight">Account</a>
            <div class="vl"></div>
            <a href="#" class="navRight">Notifications</a>
            <div class="vl"></div>
            <a href="#" class="navRight">Messages</a>
            <div class="vl"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  #Header {
    /* Full width of screen */
    width: 100%;
    /* Set height of Navbar */
    height: 50px;
    /* Bring to top */
    z-index: 10000;
    /* Fixed ot top */
    position: fixed;
  }
  .container-fluid, .row, .col {
    height: 100%;
  }
  /* Vertical line between nav links*/
  .vl {
    border-left: 2px solid #DFDFDF;
    margin-top: 5px;
    height: 40px;
    float: right;
    opacity: 0.5;
  }
  /* Left div */
  .left {
    float: left;
    overflow: auto;
  }
  h1 {
    color: white;
    font-size: 40px;
  }
  /* Right div */
  .right {
    float: right;
    overflow: auto;
    height: 100%;
  }
  .navRight {
    float: right;
  }
  a {
    color: white;
    font-size: 16px;
    text-decoration: none;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 12px;
    height: 100%;
  }
  a:hover {
    background-color: #4759CB;
  }
</style>
