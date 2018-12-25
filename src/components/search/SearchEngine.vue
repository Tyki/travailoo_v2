<template>
  <div>
    <!-- Filtres par défaut -->
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

    <v-layout row wrap v-if="displayMoreFilters">
      <v-flex xs6>
        <v-text-field label="Recherche par mot-clefs" />
      </v-flex>

      <v-flex xs6>
        <v-select
          :items="items"
          label="Autres filtres"
          solo
        ></v-select>
      </v-flex>
    </v-layout>

    <!-- Affiner la recherche -->
    <v-layout row wrap>
      <v-flex xs6>
        <v-btn block @click.prevent="displayMoreFilters = !displayMoreFilters">
          <span v-if="displayMoreFilters">Fermer les filtres supplémentaires</span>
          <span v-else>Affiner la recherche</span>
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <v-btn block>
          Rechercher
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'SearchEngine',
  data: function () {
    return {
      displayMoreFilters: false,
      items: []
    }
  }
}
</script>
