<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <ConnectedUserPanel v-if="isUserLogged" />
    <AnonymousUserPanel v-else />
  </v-navigation-drawer>
</template>

<script>
import UserMixin from '@/mixins/userPage/user'
import ConnectedUserPanel from './UserPanel/ConnectedUserPanel'
import AnonymousUserPanel from './UserPanel/AnonymousUserPanel'

export default {
  name: 'UserPanel',
  mixins: [UserMixin],
  components: {
    ConnectedUserPanel,
    AnonymousUserPanel
  },
  data: () => ({
    drawer: false,
    items: []
  }),
  mounted () {
    this.$eventBus.bus.$on(this.$eventBus.events.SET_LEFT_PANEL, (isOpen) => {
      this.drawer = !!isOpen
    })
  },
  destroyed () {
    this.$eventBus.bus.$off(this.$eventBus.events.SET_LEFT_PANEL)
  }
}
</script>
