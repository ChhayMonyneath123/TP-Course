<template>
  <aside class="menu">
    <ul>
      <li>Menu</li>
      <li v-for="section in sections" :key="section.id">
        <router-link :to="{ name: 'section', params: { id: section.id } }" class="font"
          :class="{ active: isPageActive(section.id) }">
          {{ section.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      sections: [
        { id: 1, name: 'Section 1' },
        { id: 2, name: 'Section 2' },
        { id: 3, name: 'Section 3' },
        { id: 4, name: 'Section 4' },
      ],
    };
  },
  setup() {
    const route = useRoute();

    const isPageActive = (id) => {
      // Check if the current route matches the dynamic page number
      return route.name === "section" && route.params.id === String(id);
    };

    return { isPageActive };
  },
};
</script>

<style>
.menu {
  width: 200px;
  padding: 10px;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 10px;
  cursor: pointer;
}

.font {
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
}

.font.active {
  color: red;
  font-weight: bold;
}
</style>