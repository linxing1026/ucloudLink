
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import store from './store'
import i18n from './lang/all'
import 'lib-flexible'
import config from './config/config'
import getConfig from './data/getConfig'
import getData from './data'
import {LoadingPlugin,ToastPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.prototype.$ajax = getData

Vue.use(VueRouter)
getConfig.getConfig()
         .then(res=>{
           Object.assign(config,res);
           Vue.prototype.apiList = config;//将config配置参数挂载到Vue原型上
         })
const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store:store,
  i18n:i18n,
  render: h => h(App)
}).$mount('#app-box')
