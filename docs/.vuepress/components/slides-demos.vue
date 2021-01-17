<template>
  <div>
      <g-slides :selected.sync="selected2">
          <g-slides-item name="1">
              <div class="slides-box">1</div>
          </g-slides-item>
          <g-slides-item name="2">
              <div class="slides-box">2</div>
          </g-slides-item>
          <g-slides-item name="3">
              <div class="slides-box">3</div>
          </g-slides-item>
          <g-slides-item name="4">
              <div class="slides-box">4</div>
          </g-slides-item>
      </g-slides>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {SlidesItem,Slides} from "test_gulu_lee"
export default {
  name:"Slides-demos",
  components:{
    "g-slides":Slides,
    "g-slides-item":SlidesItem,
  },
  data(){
    return{
        selected2:undefined,
        content:`
         <g-slides :selected.sync="selected2">
            <g-slides-item name="1">
                <div class="slides-box">1</div>
            </g-slides-item>
            <g-slides-item name="2">
                <div class="slides-box">2</div>
            </g-slides-item>
            <g-slides-item name="3">
                <div class="slides-box">3</div>
            </g-slides-item>
            <g-slides-item name="4">
                <div class="slides-box">4</div>
            </g-slides-item>
          </g-slides>
        `
    }
  }
}
</script>
<style lang="stylus">
.slides-box{
    width: 100%;
    height: 150px;
    background: #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>
