<template>
  <div>
      <div>
          <g-layout style="height: 20vh;">
              <g-header>header</g-header>
              <g-layout>
                  <g-sider>sider</g-sider>
                  <g-content>content</g-content>
              </g-layout>
              <g-footer>footer</g-footer>
          </g-layout>
      </div>
      <p></p>
      <div>
          <g-layout style="height: 20vh;">
              <g-sider>sider</g-sider>
              <g-layout>
                  <g-header>header</g-header>
                  <g-content>content</g-content>
                  <g-footer>footer</g-footer>
              </g-layout>
          </g-layout>
      </div>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Layout,Content,Footer,Header,Sider} from "test_gulu_lee"
export default {
  name:"layout-demos",
  components:{
    "g-layout":Layout,
      "g-sider":Sider,
      "g-content":Content,
      "g-footer":Footer,
      "g-header":Header,
  },
  data(){
    return{
        message: "1",
      content:`
              <g-layout>
                  <g-header>header</g-header>
                  <g-layout>
                      <g-sider>sider</g-sider>
                      <g-content>content</g-content>
                  </g-layout>
                  <g-footer>footer</g-footer>
              </g-layout>

              <g-layout>
                  <g-sider>sider</g-sider>
                  <g-layout>
                      <g-header>header</g-header>
                      <g-content>content</g-content>
                      <g-footer>footer</g-footer>
                  </g-layout>
              </g-layout>
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
<style scoped>
.sider {
  background: #333;
  width: 150px;
}

.header {
  background: #666;
  height: 50px;
}

.footer {
  background: #666;
  height: 50px;
}
</style>
