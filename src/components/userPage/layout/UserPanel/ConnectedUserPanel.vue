<template>
  <div>
    <v-list class="pt-0">

      <v-list-tile
        v-for="item in items"
        :key="item.title"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
  data: () => ({
    items: [
      {icon: 'person', title: 'Mon profil'},
      {icon: 'message', title: 'Mes messages'},
      {icon: 'notifications_active', title: 'Mes alertes'}
    ]
  })
}
</script>
