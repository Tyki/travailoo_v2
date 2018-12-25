<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" width="800" persistent hide-overlay>
      <v-card>
        <v-card-title>
          <span class="headline">Que recherchez vous?</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs4>
                <v-select
                  :items="items"
                  label="Secteur"
                  solo
                ></v-select>
              </v-flex>

              <v-flex xs4>
                <v-select
                  :items="items"
                  label="Catégories"
                  solo
                ></v-select>
              </v-flex>

              <v-flex xs4>
                <v-select
                  :items="items"
                  label="Sous-catégories"
                  solo
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="goToUserPage">Rechercher</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'UserIsSearching',
  data: () => ({
    show: true,
    items: []
  }),
  methods: {
    goToUserPage () {
      this.$router.push({name: 'User'})
    }
  }
}
</script>
