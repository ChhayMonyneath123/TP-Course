<template>
  <div>
    <hr>
    <h1>This is section {{ $route.params.id }} of Page {{ $route.params.nb }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Section',
};
</script>
<style>
hr {
  width: 100%;
}
</style>