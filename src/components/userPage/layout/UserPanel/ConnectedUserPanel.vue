<template>
  <div>
    <v-list class="pt-0">

      <!-- Profile -->
      <v-list-tile @click="showProfile">
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Mon profil</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- Messages -->
      <v-list-tile @click="'#'">
        <v-list-tile-action>
          <v-icon>messages</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Mes messages</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- Alertes -->
      <v-list-tile @click="'#'">
        <v-list-tile-action>
          <v-icon>notifications_actives</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Mes alertes</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-divider />
      <v-list-tile @click="disconnectUser">
        <v-list-tile-action>
          <v-icon>highlight_off</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Se déconnecter</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import UserMixin from '@/mixins/userPage/user'

export default {
  name: 'ConnectedUserPanel',
  mixins: [UserMixin],
  methods: {
    showProfile () {
      this.$eventBus.bus.$emit(this.$eventBus.events.MODAL_PROFILE)
    }
  }
}
</script>
