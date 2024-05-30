<script>
import theHeader from '/src/components/component/theHeader.vue'
import theFooter from '/src/components/component/theFooter.vue'
export default {
  components: {theHeader, theFooter}
}
</script>

<template>
  <div class="wrapper">
    <theHeader></theHeader>
    <router-view></router-view>
    <theFooter></theFooter>
  </div>
</template>

<style scoped>
</style>
