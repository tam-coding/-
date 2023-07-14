import axios from "axios"
import store from "@/store";
//引入进度条
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
//axios实例
const requests = axios.create({
    baseURL:'/api',
    timeout:5000,
});

//请求拦截器 
requests.interceptors.request.use(config=>{
    //请求条
    nProgress.start();
    //携带uuid 游客身份
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
    }
    store.state.shopcart.cartList[0]?.cartInfoList.forEach(item => {
        //判断url为改变购物车的请求且是当前点击购物车那一行的skuid且现在仓库中该skuid的skunum为1且要进行-1操作
        // /cart/addToCart/1/-1
        if("addToCart"===config.url.split('/')[2]&&config.url.split('/')[3]==item.skuId&&item.skuNum==1&&config.url.split('/')[4]==-1){
           //将url中disNum改为0 ，即购物车中数量不变
           config.url='/cart/addToCart/'+config.url.split('/')[3]+'/'+'0'
            }
    })
    //携带token
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
  
 
    return config;
})

//响应拦截器
requests.interceptors.response.use((response)=>{
    nProgress.done();
    return response.data;
},(error)=>{
    return Promise.reject(new Error('failed'))
})






export default requests