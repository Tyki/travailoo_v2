<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" width="800" persistent hide-overlay>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Travailoo
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </v-card-text>

        <v-card-actions>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-btn color="primary" @click="$emit('chose-user')">
                  Je souhaite consulter les offres
                </v-btn>
                <v-btn color="lightgrey" @click="$emit('chose-society')">
                  Je dépose une offre d'emploi
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'ChooseEntity',
  data: () => ({
    show: true
  })
}
</script>
