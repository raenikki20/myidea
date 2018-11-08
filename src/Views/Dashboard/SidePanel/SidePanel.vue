<template>
  <div id="SidePanel" class="dark-blue-bg">
    <b-container fluid>
      <b-row align-h="center" align-v="center" class="intro">
        <b-col cols="6">
          <b-img blank width="1750" height="1750" blank-color="#777" alt="img" fluid class="img"/>
        </b-col>
        <b-col cols="6">
          <h3>Welcome,</h3>
          <h1>Nikki</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-row v-for="(link, index) in links" :key="index" align-h="center" align-v="center" class="link">
            <b-col cols="2" class="px-0">
              <h3>Icon</h3>
            </b-col>
            <b-col cols="10">
              <p>{{ link.name }}</p>
            </b-col>
            <template v-if="link.subLinks">
              <b-col cols="12">
                <b-row v-for="(subLink, key) in link.subLinks" :key="key" align-h="center" align-v="center" class="subLink">
                  <b-col cols="2" class="px-0">
                    <h3>Icon</h3>
                  </b-col>
                  <b-col cols="10">
                    <p>
                      {{ subLink.name }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </template>
          </b-row>
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
      links: [
        { name: 'Profile' },
        { name: 'Projects' },
        { name: 'Project',
          subLinks: [
            { name: 'Publish' },
            { name: 'Edit' },
            { name: 'Download' },
            { name: 'Share' },
            { name: 'Delete' }
          ]
        },
        { name: 'Create Project' }
      ]
    }
  }
}
</script>

<style scoped>
  #SidePanel {
    margin-top: 50px;
    position: fixed;
    width: 270px;
    height: 100%
  }
  h1 {
    color: white;
    font-size: 28px;
    margin-bottom: 0px;
  }
  h3 {
    color: white;
    font-size: 18px;
    margin-bottom: 0px;
  }
  p {
    font-size: 20px;
    color: white;
    margin-bottom: 0px;
  }
  .intro {
    text-align: center;
    margin: 20px 10px 20px 10px;
  }
  .img {
    border-radius: 20px;
  }
  .link {
    padding: 10px 0px 10px 10px;
    background-color: #4B4F6A;
  }
  .subLink {
    padding: 10px 0px 10px 40px;
    background-color: #4B4F6A;
  }
  .link:hover, .subLink:hover {
    background-color: #5F70E3;
  }
</style>
