<template>
  <div>
    <g-button icon="setting">设置</g-button>
            <g-button icon="setting" :loading="loading1" @click="loading1=!loading1">设置</g-button>
            <g-button>设置</g-button>
            <g-button icon="setting" icon-position="right">设置</g-button>
            <g-button icon="setting" icon-position="right" :loading="loading2" @click="loading2=!loading2">设置</g-button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Button} from "test_gulu_lee"
export default {
  name:"button-demos",
  components:{
    "g-button":Button
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
      `
    }
  }
}
</script>
