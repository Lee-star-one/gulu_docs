<template>
  <div>
    <g-nav :selected.sync="selected3">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="sub1">
          <template slot="title">
              关于
          </template>
            <g-nav-item name="about">关于</g-nav-item>
            <g-nav-item name="about1">关于</g-nav-item>
            <g-sub-nav name="sub2">
              <template slot="title">
                  关于2
              </template>
                <g-nav-item name="about22">关于</g-nav-item>
                <g-nav-item name="about12">关于</g-nav-item>
                <g-nav-item name="about32">关于</g-nav-item>
          </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
  </g-nav>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Nav,NavItem,SubNav} from "test_gulu_lee"
export default {
  name:"Nav-demos",
  components:{
    "g-nav":Nav,
    "g-nav-item":NavItem,
    "g-sub-nav":SubNav,
  },
  data(){
    return{
      selected3:['home'],
        content:`
         <g-nav :selected.sync="selected3">
              <g-nav-item name="home">首页</g-nav-item>
              <g-sub-nav name="sub1">
                  <template slot="title">
                      关于
                  </template>
                   <g-nav-item name="about">关于</g-nav-item>
                   <g-nav-item name="about1">关于</g-nav-item>
                   <g-sub-nav name="sub2">
                      <template slot="title">
                          关于2
                      </template>
                       <g-nav-item name="about22">关于</g-nav-item>
                       <g-nav-item name="about12">关于</g-nav-item>
                       <g-nav-item name="about32">关于</g-nav-item>
                  </g-sub-nav>
              </g-sub-nav>
              <g-nav-item name="hire">招聘</g-nav-item>
          </g-nav>
        `
    }
  }
}
</script>
<style lang="stylus">

</style>
