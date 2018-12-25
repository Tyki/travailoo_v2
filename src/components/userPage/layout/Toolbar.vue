<template>
  <v-toolbar>
    <v-toolbar-side-icon @click.prevent="openLeftPanel"/>

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
import UserMixin from '@/mixins/userPage/user'
import LayoutMixin from '@/mixins/userPage/layout'

export default {
  name: 'Toolbar',
  mixins: [UserMixin, LayoutMixin],
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
    }
  }
}
</script>

<style>
.elevation-10 {
  z-index: 10;
}
</style>
