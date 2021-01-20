module.exports = {
  base:'/gulu_docs/',
  dest: 'docs/dist',
  title:'eco-UI',
  description:'一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      { 
        title:'入门',
        children:[
        '/install/',
        '/get-started/',
      ]
      },
      { 
        title:'基础组件',
        children:[
        '/components/button',
        '/components/Input',
        '/components/layout',
        '/components/toast',
        '/components/tabs',
        '/components/collapse',
        '/components/cascader',
        '/components/slides',
        '/components/nav',]
      },
      { 
        title:'地图组件',
        children:[
        '/components/map',
        '/components/layer',
        '/components/marker',]
      },
    ],
  }
}