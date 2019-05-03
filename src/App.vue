<template>
  <div id="app">
    <router-view/>
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0
      }
    }
  }
</script>

<style lang="stylus">

</style>
