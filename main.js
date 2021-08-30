import Vue from 'vue'
import App from './App'
import cuCustom from 'colorui/components/cu-custom.vue'
import dropdown from './components/dt-dropdown/dt-dropdown.vue' 
import { VueJsonp } from 'vue-jsonp/dist'
Vue.use(VueJsonp)


Vue.component('dropdown', dropdown)//下拉组件


Vue.config.productionTip = false
Vue.component('cu-custom',cuCustom)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
