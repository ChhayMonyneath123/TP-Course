<template>
  <div class="contain">
    <h1>Page {{ $route.params.nb }}</h1>

    <router-view/>
    <message/>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  name: 'page',
  components: { Message },
};
</script>
<style>
.contain{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

</style>
