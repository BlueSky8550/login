// 注册全局组件
import Vue from "vue"
import BackTop from "../components/backTop/BackTop"
import AccoutLogin from "../components/accoutLogin/AccoutLogin"
import PhoneLogin from "../components/phoneLogin/PhoneLogin"


Vue.component('backTop', BackTop)
Vue.component('accoutLogin', AccoutLogin)
Vue.component('phoneLogin',PhoneLogin)