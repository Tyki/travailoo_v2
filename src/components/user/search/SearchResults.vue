<template>
  <div>
    <v-layout>
      <v-flex xs12 />
    </v-layout>

    <v-layout>
      <h1 style="float:left;">Vos résultats de recherche</h1> <br />
    </v-layout>

    <v-layout row wrap>
      <v-flex xs3>
        <v-select
          :items="items"
          label="Trier par"
          solo
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout row wrap fill-height>
      <ResultItem v-for="i in 12" :key="i" />
    </v-layout>
  </div>
</template>

<script>
import ResultItem from './ResultItem'
export default {
  name: 'SearchResults',
  components: {
    ResultItem
  },
  data: () => {
    return {
      items: []
    }
  }
}
</script>
