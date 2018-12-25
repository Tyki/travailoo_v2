<template>
  <v-app>
    <img src="/static/home_background.jpg" id="bg" alt="">

    <transition name="fade" mode="out-in">
      <ChooseEntity v-if="type === null"
        @chose-user="type = 1" @chose-society="type = 2"/>
      <UserIsSearching v-if="type == 1" />
      <v-card v-if="type === 2" key="2">TYPE 2</v-card>
    </transition>

  </v-app>
</template>

<script>
import ChooseEntity from './ChooseEntity'
import UserIsSearching from './UserIsSearching'

export default {
  name: 'Home',
  components: {
    ChooseEntity,
    UserIsSearching
  },
  data: () => ({
    type: null
  })
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
