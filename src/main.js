// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置请求地址的根路径
Vue.http.options.root = 'http://027xin.com:8899';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


//导入时间插件
import moment from  "moment"

  //安装全局过滤器
Vue.filter('dateFormat', function(datastr,pattern = "YYYY-MM-DD hh:mm:ss") {
  return moment(datastr).format(pattern)
})
Vue.use(MintUI)

import './assets/mui/css/mui.css'
import './assets/mui/css/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
