<template>
  <div>
    <g-container :zoom="10" :center="[37, 107]" adapter="GaoDe.Normal.Map" :minZoom="5" width="100%"  @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated">
        <g-tileLayer></g-tileLayer>
        </g-container>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import "test_gulu_lee/dist/gulu.css"
import {Container,TileLayer} from "test_gulu_lee"
export default {
  name:"layer-demos",
  components:{
   "g-container":Container,
   "g-tileLayer":TileLayer,
  },
  data(){
    return{
        content:`
        <g-container>
            <g-tileLayer :url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
            </g-tileLayer>
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
