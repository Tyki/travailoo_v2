<template>
  <div id="mapid" class="map-height elevation-1"></div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'MapContainer',
  data: function () {
    return {
      mapContainer: null
    }
  },
  methods: {
    initMap () {
      this.mapContainer = L.map('mapid').setView([51.505, -0.09], 13)
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoieGdhcmEiLCJhIjoiY2pjczNpZHd4Mjh5ZTJ3cm9qOWVweGh2diJ9.R_ISD6-vHwKeBvh8hZWaIA'
      }).addTo(this.mapContainer)
    },

    initEvents () {
      this.$eventBus.bus.$on(this.$eventBus.events.MAP_SETCENTER, (position) => {
        this.mapContainer.setView(new L.LatLng(position.coords.latitude, position.coords.longitude))
      })
    }
  },
  mounted () {
    this.initMap()
    this.initEvents()
  }
}
</script>

<style>
.map-height {
  height: calc(100vh - 64px);
}

.elevation-1 {
  z-index: 1;
}
</style>
