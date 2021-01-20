<template>
  <div>
    <g-button @click="showToast">Toast</g-button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Vue from "vue"
import "test_gulu_lee/dist/gulu.css"
import {Button,Plugin} from "test_gulu_lee"
Vue.use(Plugin)
export default {
  name:"toast-demos",
  components:{
    "g-button":Button,
  },
  data(){
    return{
        message: "1",
        content:`
import {plugin} from "test_gulu_lee"
Vue.use(plugin)

<g-button @click="showToast">Toast</g-button>

showToast() {
    this.$toast('<div style="color:#ff0000">有一条新的消息有一条新的消息有一条新的消息有一条新的消息有一条新的消息</div>', {
        closeButton: {
            text: "已读",
            callback(toast) {
                toast.log()
                console.log("用户说他知道了")
            }
        },
        position: "middle",
        enableHtml: false
    })
}
        `
    }
  },
  methods:{
      showToast() {
            this.$toast('<div style="color:#ff0000">有一条新的消息有一条新的消息有一条新的消息有一条新的消息有一条新的消息</div>', {
                closeButton: {
                    text: "已读",
                    callback(toast) {
                        toast.log()
                        console.log("用户说他知道了")
                    }
                },
                position: "middle",
                enableHtml: false
            })
        }
  }
}
</script>
