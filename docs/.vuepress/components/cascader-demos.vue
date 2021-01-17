<template>
  <div>
      <g-cascader :source="source" :selected.sync="selected1"></g-cascader>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {CascaderItem,Cascader} from "test_gulu_lee"
export default {
  name:"collapse-demos",
  components:{
    "g-cascader":Cascader,
    "g-cascader-item":CascaderItem,
  },
  data(){
    return{
      source: [{
            "name": "浙江",
            "children": [{
                "name": "杭州",
                "children": [{
                    "name": "上城"
                }, {
                    "name": "下城"
                }]
            }]
        },{
            "name": "山西",
            "children": [{
                "name": "太原",
                "children": [{
                    "name": "小店"
                }, {
                    "name": "迎泽"
                }]
            }]
        }],
        selected1:[],
        content:`
            <g-cascader :source="source" :selected.sync="selected"></g-cascader>
        `
    }
  },
  methods:{

  }
}
</script>
