<template>
  <v-layout row justify-center>
    <v-dialog v-model="showLogin" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Connectez vous</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="showLogin = false">Retour</v-btn>
          <v-btn color="blue darken-1" flat @click="showLogin = false">Connexion</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'LoginModal',
  data: () => ({
    showLogin: false
  }),
  mounted () {
    this.$eventBus.bus.$on(this.$eventBus.events.MODAL_LOGIN, () => {
      this.showLogin = true
    })
  }
}
</script>
