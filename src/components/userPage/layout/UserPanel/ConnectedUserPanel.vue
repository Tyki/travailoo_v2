<template>
  <div>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Doe</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0">
      <v-divider />

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
          <v-icon></v-icon>
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
      {icon: '', title: 'Mon profil'},
      {icon: '', title: 'Mes messages'},
      {icon: '', title: 'Mes alertes'},
    ]
  })
}
</script>

