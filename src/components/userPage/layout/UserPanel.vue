<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <ConnectedUserPanel v-if="isUserLogged" />
    <AnonymousUserPanel v-else />
  </v-navigation-drawer>
</template>

<script>
import UserMixin from '@/mixins/userPage/user'
import ConnectedUserPanel from './UserPanel/ConnectedUserPanel'

export default {
  name: 'UserPanel',
  mixins: [UserMixin],
  components: {
    ConnectedUserPanel
  },
  data: () => ({
    drawer: false,
    items: []
  }),
  mounted () {
    this.$eventBus.bus.$on(this.$eventBus.events.SET_LEFT_PANEL, (isOpen) => {
      this.drawer = !!isOpen
    })
  }
}
</script>
