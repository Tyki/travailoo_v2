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

    <v-btn icon>
      Login
    </v-btn>
  </v-toolbar>
</template>

<script>
import eventBus from '../../services/eventBus/eventbus'

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
    }
  }
}
</script>

<style>
.elevation-10 {
  z-index: 10;
}
</style>
