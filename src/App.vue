<template>
  <div id="app">
    <NavBar />
    <div class="body">

      <Menu />
      <router-view />
    </div>
    <Footer />
  </div>

</template>
<script>
import { RouterView } from 'vue-router';
import NavBar from './views/NavBar.vue';
import Menu from './views/Menu.vue';
import Footer from './views/Footer.vue';

export default {
  components: {
    NavBar,
    Menu,
    Footer
  },

};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.content {
  flex: 1;
  padding: 20px;
  border-left: 1px solid #ddd;
}

.body {
  display: flex;
  flex-direction: row;

}
</style>