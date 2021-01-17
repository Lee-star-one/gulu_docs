<template>
  <div>
        <g-input value="张三"></g-input>
        <g-input value="张三"></g-input>
        <g-input value="李四" disabled></g-input>
        <g-input value="王五" readonly></g-input>
        <p></p>
        <g-input value="赵六" error="姓名不能少于2个字"></g-input>
        <p></p>
        <g-input value="赵六" @change="inputChange"></g-input>
        <p></p>
        <g-input v-model="message"></g-input>
        <span>{{message}}</span>
        <button @click="message+=1">按钮</button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Input} from "test_gulu_lee"
export default {
  name:"input-demos",
  components:{
    "g-input":Input,
  },
  data(){
    return{
        message: "1",
      content:`
            <g-input value="张三"></g-input>
            <g-input value="张三"></g-input>
            <g-input value="李四" disabled></g-input>
            <g-input value="王五" readonly></g-input>
            <g-input value="赵六" error="姓名不能少于2个字"></g-input>
            <g-input value="赵六" @change="inputChange"></g-input>
            <g-input v-model="message"></g-input>
      `
    }
  },
  methods:{
      inputChange(value) {
            alert(value)
        },
  }
}
</script>
