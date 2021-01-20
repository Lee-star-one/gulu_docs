<template>
  <div>
    <g-container :zoom="10" :center="[37, 107]" adapter="GaoDe.Normal.Map" :minZoom="5" width="100%"  @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated">
        <g-marker :lat-lng="[37, 107]" :icon="icon"></g-marker>
      </g-container>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import "test_gulu_lee/dist/gulu.css"
import * as L from "leaflet";
import {Container,TileLayer,Marker} from "test_gulu_lee"
export default {
  name:"marker-demos",
  components:{
   "g-container":Container,
   "g-marker":Marker
  },
  data(){
    return{
        icon:new L.Icon({iconUrl: require("../../img/favicon.png"),iconSize:[40, 40]}),
        content:`
        <g-container>
            <g-marker :lat-lng="[37, 107]" icon="icon"></g-marker>
        </g-container>
        `
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
      console.log(zoom)
    },
    centerUpdated (center) {
      this.center = center;
      console.log(center)

    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
      console.log(bounds)

    }
  }
}
</script>
<style lang="less">

</style>
