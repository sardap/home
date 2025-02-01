<script setup lang="ts">
import { onMounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const props = defineProps<{
  startingLat: number
  startingLng: number
  onLocationChange: (new_lat: number, new_lng: number) => void
}>()

let lastMarker: L.Layer | null = null
var icon = L.icon({
  iconUrl: '/photos/dog/three.png',

  iconSize: [66, 106], // size of the icon
  iconAnchor: [31, 89], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})

onMounted(() => {
  // Initialize the map
  const map = L.map('map').setView([props.startingLat, props.startingLng], 2)

  lastMarker = L.marker([props.startingLat, props.startingLng], { icon: icon }).addTo(map)

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  // Listen for map clicks
  map.on('click', (e: L.LeafletMouseEvent) => {
    props.onLocationChange(e.latlng.lat, e.latlng.lng)

    if (lastMarker) {
      lastMarker.remove()
    }

    lastMarker = L.marker([e.latlng.lat, e.latlng.lng], { icon: icon }).addTo(map)
  })
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  max-width: 100%;
  height: 50vh;
}

#coordinates {
  margin: 10px;
  font-family: Arial, sans-serif;
}
</style>
