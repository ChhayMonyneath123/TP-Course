<template>
    <div>
      <h1>This is section {{ $route.params.id }} of Page {{ $route.params.nb }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Section',
  };
  </script>
  