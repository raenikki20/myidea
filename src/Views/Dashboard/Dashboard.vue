<template>
    <div id="Dashboard">
      <Header></Header>
      <SidePanel></SidePanel>
      <MainPanel></MainPanel>
    </div>
</template>

<script>
import Header from '@/components/Header/Header'
import SidePanel from '@/components/Layout/SidePanel'
import MainPanel from '@/components/Layout/MainPanel'
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
    #Dashboard {}
</style>
