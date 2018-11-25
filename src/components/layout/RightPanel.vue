<template>
  <div>
    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs12>
          <SearchEngine />
        </v-flex>

        <v-flex xs12  style="max-height: 100vh; overflow-y: scroll;">
          <SearchResults />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SearchEngine from '../search/SearchEngine'
import SearchResults from '../search/SearchResults'

export default {
  name: 'RightPanel',
  components: {
    SearchEngine,
    SearchResults
  }
}
</script>

