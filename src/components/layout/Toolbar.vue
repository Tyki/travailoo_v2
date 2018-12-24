<template>
  <v-toolbar>
    <v-btn icon @click.prevent="detectPosition">
      <v-icon>my_location</v-icon>
    </v-btn>

    <v-text-field
      hide-details
      prepend-icon="search"
      single-line
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-btn icon @click="openLoginModal">
      Login
    </v-btn>
  </v-toolbar>
</template>

<script>
import eventBus from '../../services/eventBus/eventbus'
import { SHOW_LOGIN_MODAL } from '../../store/layout/types.js'

export default {
  name: 'Toolbar',
  methods: {
    detectPosition () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          eventBus.bus.$emit(eventBus.events.MAP_SETCENTER, position)
        },
        (error) => {
          console.error(error)
        }
      )
    },
    openLoginModal () {
      this.$store.commit(SHOW_LOGIN_MODAL, true)
    }
  }
}
</script>

<style>
.elevation-10 {
  z-index: 10;
}
</style>
