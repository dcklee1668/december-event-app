<template>
  <div id="app">
    <NavigationBar />
    <router-view /> <!-- This is where the routed components will be rendered -->
  </div>
</template>

<script>
import NavigationBar from '@/views/NavigationBar.vue'; // Import NavigationBar component

export default {
  components: {
    NavigationBar // Use NavigationBar component
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
