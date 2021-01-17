<template>
  <div>
    <g-button>设置</g-button>
    <p></p>
    <g-button icon="setting">设置</g-button>
    <p></p>
    <g-button disabled>默认按钮</g-button>
    <p></p>
    <g-button icon="setting" :loading="loading1" @click="loading1=!loading1">加载中..</g-button>
    <p></p>
    <g-button icon="setting" icon-position="right" :loading="loading2" @click="loading2=!loading2">设置</g-button>
    <p></p>
    <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button icon="you" icon-position="right">下一页</g-button>
    </g-button-group>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Button,ButtonGroup} from "test_gulu_lee"
export default {
  name:"button-demos",
  components:{
    "g-button":Button,
    "g-button-group":ButtonGroup
  },
  data(){
    return{
      loading1: true,
        loading2: false,
      content:`
        <g-button>默认按钮</g-button>

        <g-button icon="settings">默认按钮</g-button>

        <g-button :loading="true">默认按钮</g-button>

        <g-button disabled>默认按钮</g-button>

        <g-button-group>
          <g-button icon="left">上一页</g-button>
          <g-button icon="you" icon-position="right">下一页</g-button>
        </g-button-group>
      `
    }
  }
}
</script>
