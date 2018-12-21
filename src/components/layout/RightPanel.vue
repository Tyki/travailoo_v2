<template>
  <div>
    <v-container grid-list-md style="height:calc(100vh - 64px)" >
      <v-layout row style="flex-direction: column; padding: 24px; height:calc(100vh - 64px);" >
        <v-flex xs12 style="flex-grow:1; flex-shrink: 1; flex-basis: 180px;">
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

