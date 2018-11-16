e<template>
  <div id="Projects">
    <b-container fluid class="px-0">
      <b-row no-gutters style="padding-top: 15px;">
        <b-col md="12" lg="4" cols="4" class="p-2">
          <b-img src="@/assets/createproject.png" alt="create project" fluid class="addImg"/>
        </b-col>
        <b-col md="12" lg="4" cols="4" v-for="(project, key) in projects" :key="key" class="p-2">
          <b-img blank blank-color="#DFDFDF" height="1500" width="1500" alt="img" fluid class="img"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data: function () {
    return {
      projects: [
        {id: 1, title: 'Project 1', img: '', tags: ['Tags', 'tags', 'tags']},
        {id: 2, title: 'Project 2', img: '', tags: ['Tags', 'tags', 'tags']},
        {id: 3, title: 'Project 3', img: '', tags: ['Tags', 'tags', 'tags']},
        {id: 4, title: 'Project 4', img: '', tags: ['Tags', 'tags', 'tags']}
      ]
    }
  }
}
</script>

<style scoped>
  #Projects {}
  .addImg {
    border: 4px solid transparent;
  }
  .addImg:hover {
    border: 4px solid #5F70E3;
  }
  .img {
    border: 4px solid transparent;
  }
  .img:hover {
    border: 4px solid #5F70E3;
  }
</style>
