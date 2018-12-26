<template>
  <div>
    <v-list>
      <v-list-tile @click="openLoginModal">
        <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Se connecter</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import LayoutMixin from '@/mixins/userPage/layout'

export default {
  name: 'AnonymousUserPanel',
  mixins: [LayoutMixin]
}
</script>
