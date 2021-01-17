<template>
  <div>
    <div>
        <g-tabs :selected.sync="selectedTab">
        <g-tabs-header>
            <g-tabs-item name="news" disabled>
                新闻
            </g-tabs-item>
            <g-tabs-item name="finance">
                财经
            </g-tabs-item>
            <g-tabs-item name="sports">
                体育
            </g-tabs-item>
            <g-tabs-item name="yule">
                娱乐
            </g-tabs-item>
            <template slot="actions">
                <button>设置</button>
            </template>
        </g-tabs-header>
        <g-tabs-body>
            <g-tabs-pane name="news">
                新闻内容
            </g-tabs-pane>
            <g-tabs-pane name="finance">
                财经内容
            </g-tabs-pane>
            <g-tabs-pane name="sports">
                体育内容
            </g-tabs-pane>
            <g-tabs-pane name="yule">
                娱乐内容
            </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
    </div>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Tabs,TabsBody,TabsHeader,TabsItem,TabsPane} from "test_gulu_lee"
export default {
  name:"tabs-demos",
  components:{
    "g-tabs":Tabs,
    "g-tabs-body":TabsBody,
    "g-tabs-header":TabsHeader,
    "g-tabs-pane":TabsPane,
    "g-tabs-item":TabsItem
  },
  data(){
    return{
      selectedTab: "sports",
      content:`
        <g-tabs :selected.sync="selectedTab">
          <g-tabs-header>
              <g-tabs-item name="news" disabled>
                  新闻
              </g-tabs-item>
              <g-tabs-item name="finance">
                  财经
              </g-tabs-item>
              <g-tabs-item name="sports">
                  体育
              </g-tabs-item>
              <g-tabs-item name="yule">
                  娱乐
              </g-tabs-item>
              <template slot="actions">
                  <button>设置</button>
              </template>
          </g-tabs-header>
          <g-tabs-body>
              <g-tabs-pane name="news">
                  新闻内容
              </g-tabs-pane>
              <g-tabs-pane name="finance">
                  财经内容
              </g-tabs-pane>
              <g-tabs-pane name="sports">
                  体育内容
              </g-tabs-pane>
              <g-tabs-pane name="yule">
                  娱乐内容
              </g-tabs-pane>
          </g-tabs-body>
      </g-tabs>
      `
    }
  }
}
</script>
