<template>
  <div id="SidePanel" class="grey-bg">
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="intro">
          <b-row align-h="center" align-v="center" class="introRow">
            <b-col cols="6">
              <b-img blank blank-color="grey" height="1500" width="1500" alt="img" fluid class="img"/>
            </b-col>
            <b-col cols="6">
              <p>Welcome,</p>
              <h1>{{ name }}</h1>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="px-0 links">
          <ul>
            <li class="active"><span>ICON</span>Profile</li>
            <li><span>ICON</span> Projects</li>
            <li><span>ICON</span> Project</li>
            <li class="subLink"><span>ICON</span> Publish</li>
            <li class="subLink"><span>ICON</span> Edit</li>
            <li class="subLink"><span>ICON</span> Download</li>
            <li class="subLink"><span>ICON</span> Share</li>
            <li class="subLink"><span>ICON</span> Delete</li>
            <li><span>ICON</span> Create Project</li>
          </ul>
        </b-col>
        <b-col cols="12" class="footer">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Coppyright</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SidePanel',
  data: function () {
    return {
      name: 'Nikki'
    }
  }
}
</script>

<style scoped>
  #SidePanel {
    /* height of navbar */
    padding-top: 50px;
    /* Fixed so it doesnt move */
    position: fixed;
    /* width*/
    width: 270px;
    /* fill scrren height */
    height: 100vh;
  }
  .intro {
    text-align: center;
    margin: 30px 0px 30px 0px;
  }
  .introRow {
    padding-left: 15px;
    padding-right: 15px;
  }
  .img {
    border-radius: 20px;
  }
  h1, p {
    color: #5F70E3;
    line-height: 30px;
  }
  h1 {
    font-size: 26px;
  }
  p {
    font-size: 14px;
  }
  .links {
  }
  .subLink {
    padding-left: 80px;
  }
  ul {
    list-style-type: none;
    padding-left: 0px;
  }
  li {
    padding-left: 30px;
    border-right: 6px solid #DFDFDF;
    color: #5F70E3;
    font-size: 16px;
    height: 40px;
    display: flex;
    align-items: center;
  }
  li:hover {
    border-right: 6px solid #5F70E3;
    background-color: #CDCED7;
  }
  .active {
    font-weight: bold;
    border-right: 6px solid #5F70E3;
    background-color: #CDCED7;
  }
  span {
    margin-right: 10px;
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
</style>
