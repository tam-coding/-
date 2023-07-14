import Vue from 'vue'
import App from './App.vue'

//引入路由
import router  from './router'
//全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false

//unitTest
// import { reqCategoryList } from '@/api'
// reqCategoryList();
// import {reqGetSearchInfo} from '@/api'
// reqGetSearchInfo({})
// import {reqGoodsInfo} from '@/api'
// console.log(reqGoodsInfo(13));

//引入store
import store from './store'
 //引入mock
 import  '@/mock/mockServe'
 //引入swiper.css
import "swiper/css/swiper.css"

//暴露全局api
import * as API from '@/api'

//elemet-ui
import { MessageBox,Form} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(Form);
//懒加载
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload,{

// })

new Vue({
  render: h => h(App),
  router,
  store,
  //安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  }
}).$mount('#app')
