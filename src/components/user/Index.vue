<template>
  <v-app style="overflow-y: hidden; height: 100vh;">
    <Toolbar />
    <UserPanel />

    <v-content>
      <v-layout>
        <v-flex xs7>
          <MapContainer />
        </v-flex>

        <v-flex xs5>
          <RightPanel />
        </v-flex>
      </v-layout>
    </v-content>

    <modal-wrapper />
  </v-app>
</template>

<script>
import Toolbar from './layout/Toolbar'
import MapContainer from './map/MapContainer'
import RightPanel from './layout/RightPanel'
import ModalWrapper from './layout/ModalWrapper'
import UserPanel from './layout/UserPanel'

export default {
  name: 'App',
  components: {
    Toolbar,
    MapContainer,
    RightPanel,
    ModalWrapper,
    UserPanel
  }
}
</script>
