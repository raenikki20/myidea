<template>
    <div id="Dashboard">
      <Header></Header>
      <SidePanel></SidePanel>
      <MainPanel></MainPanel>
    </div>
</template>

<script>
import Header from '@/Views/Dashboard/Header/Header'
import SidePanel from '@/Views/Dashboard/SidePanel/SidePanel'
import MainPanel from '@/Views/Dashboard/MainPanel/MainPanel'
export default {
  name: 'Dashboard',
  data: function () {
    return {}
  },
  components: {
    'Header': Header,
    'SidePanel': SidePanel,
    'MainPanel': MainPanel
  }
}
</script>

<style scoped>
    #Dashboard {
      height: 100%;
    }
</style>
