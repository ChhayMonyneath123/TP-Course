<template>
    <header class="header">
        <nav>
            <div class="a">
                <router-link to="/page1" class="btn">Header</router-link>
            </div>
            <div class="b">
                <router-link to="/page1" class="btn" :class="{ active: isPageActive('/page1') }">Page 1</router-link>
                <router-link to="/page2" class="btn" :class="{ active: isPageActive('/page2') }">Page 2</router-link>
                <router-link to="/page3" class="btn" :class="{ active: isPageActive('/page3') }">Page 3</router-link>
            </div>

        </nav>
    </header>

</template>
<script>
 import { useRoute } from 'vue-router';
export default {
    name: "NavBar",
    setup() {
      const route = useRoute();
  
      const isPageActive = (path) => route.path === path;
  
      return { isPageActive };
    },
}
</script>
<style>
.header {
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #0e0303;

}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.a{
    display: flex;
    justify-content: start;
}
.b{
    display: flex;
    justify-content: end;
    gap: 20px;
    
}
.btn:hover {
    background: transparent;

}
.btn{
    color: #333;
    text-decoration: none;
}
.btn.active{
    color: red;
}

</style>