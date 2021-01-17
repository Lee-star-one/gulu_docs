<template>
  <div>
    <g-collapse :selected.sync="selected" single>
        <g-collapse-item title="标题1" name="1">1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">3</g-collapse-item>
    </g-collapse>
    {{selected}}
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Collapse,CollapseItem} from "test_gulu_lee"
export default {
  name:"collapse-demos",
  components:{
    "g-collapse":Collapse,
    "g-collapse-item":CollapseItem,
  },
  data(){
    return{
      
        selected: ['1', '2'],
        content:`
        <g-collapse :selected.sync="selected" single>
            <g-collapse-item title="标题1" name="1">1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">3</g-collapse-item>
        </g-collapse>
        {{selected}}
        `
    }
  },
  methods:{

  }
}
</script>
