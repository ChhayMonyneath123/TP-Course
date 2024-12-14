<template>
  <div>
    <h1>Page {{ $route.params.nb }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'page',
};
</script>
