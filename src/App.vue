<template>
  <div id="app">
    <MHeader />
	<Tab />
	<router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
	Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>
