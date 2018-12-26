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

    <v-btn icon @click="openLoginModal" v-if="!isUserLogged">
      Login
    </v-btn>
    <v-menu v-else>
      <v-toolbar-title slot="activator">
        <v-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="avatar">
        </v-avatar>
        <span>John Doe</span>
      </v-toolbar-title>

      <ConnectedUserPanel />
    </v-menu>
  </v-toolbar>
</template>

<script>
import UserMixin from '@/mixins/userPage/user'
import LayoutMixin from '@/mixins/userPage/layout'
import ConnectedUserPanel from './UserPanel/ConnectedUserPanel'
import AnonymousUserPanel from './UserPanel/AnonymousUserPanel'

export default {
  name: 'Toolbar',
  mixins: [UserMixin, LayoutMixin],
  components: {
    ConnectedUserPanel,
    AnonymousUserPanel
  },
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
