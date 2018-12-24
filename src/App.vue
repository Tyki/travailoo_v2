<template>
  <v-app style="overflow-y: hidden; height: 100vh;">
    <Toolbar />

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

    <ModalWrapper />
  </v-app>
</template>

<script>
import Toolbar from './components/layout/Toolbar'
import MapContainer from './components/map/MapContainer'
import RightPanel from './components/layout/RightPanel'
import ModalWrapper from './components/layout/ModalWrapper'

export default {
  name: 'App',
  components: {
    Toolbar,
    MapContainer,
    RightPanel,
    ModalWrapper
  },
  data () {
    return {
      //
    }
  }
}
</script>
