<template>
  <div>
    <img src="/static/home_background.jpg" id="bg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#bg {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
</style>
