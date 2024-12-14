<template>
    <header class="header">
      <nav>
        <div class="a">
          <router-link :to="{ name: 'page', params: { nb: 1 } }" class="btn">Header</router-link>
        </div>
        <div class="b">
          <router-link
            v-for="page in pages"
            :key="page.nb"
            :to="{ name: 'page', params: { nb: page.nb } }"
            class="btn"
            :class="{ active: isPageActive(page.nb) }"
          >
            {{ page.name }}
          </router-link>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { useRoute } from "vue-router";
  
  export default {
    name: "NavBar",
    setup() {
      const route = useRoute();
  
      const isPageActive = (nb) => {
        // Check if the current route matches the dynamic page number
        return route.path.startsWith(`/page/${nb}`);
      };
  
      return { isPageActive };
    },
    data() {
      return {
        pages: [
          { nb: 1, name: "Page 1" },
          { nb: 2, name: "Page 2" },
          { nb: 3, name: "Page 3" },
        ],
      };
    },
  };
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
  
  .a {
    display: flex;
    justify-content: start;
  }
  
  .b {
    display: flex;
    justify-content: end;
    gap: 20px;
  }
  
  .btn:hover {
    background: transparent;
    color: #555;
  }
  
  .btn {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .btn.active {
    color: red;
    font-weight: bold;
  }
  </style>
  