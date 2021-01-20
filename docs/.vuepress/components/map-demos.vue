<template>
  <div>
    <g-container :zoom="10" :center="[37, 107]" adapter="GaoDe.Normal.Map" :minZoom="5" width="100%"  @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"></g-container>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import "test_gulu_lee/dist/gulu.css"
import {Container} from "test_gulu_lee"
export default {
  name:"map-demos",
  components:{
   "g-container":Container,
  },
  data(){
    return{
        content:`
          <g-container :zoom="12" 
              :center="[37, 107]" 
              adapter="GaoDe.Normal.Map" 
              minZoom="5" width="100%">
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
