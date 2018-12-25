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
export default {
  name: 'Toolbar',
  methods: {
    detectPosition () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.$eventBus.bus.$emit(this.$eventBus.events.MAP_SETCENTER, position)
        },
        (error) => {
          console.error(error)
        }
      )
    },
    openLoginModal () {
      this.$eventBus.bus.$emit(this.$eventBus.events.MODAL_LOGIN)
    }
  }
}
</script>

<style>
.elevation-10 {
  z-index: 10;
}
</style>
