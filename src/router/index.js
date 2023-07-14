import Vue from 'vue'
import VueRouter from  'vue-router'
import routes from './routes.js'
import store from '@/store'
Vue.use(VueRouter)


//2、重写push|replace
//第一个参数：告诉原来的push，跳转的目标位置和传递了哪些参数
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location,resolve,reject){
//传了回调 即resolve  reject存在的情况下：
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,() => {},() => {})
    }
}

let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,() => {},() => {})
    }
}

let router=new VueRouter({
    routes,
    scrollBehavior () {
        return { y: 0 }
      }
})

router.beforeEach((to,from,next)=>{
    let token=store.state.user.token
    let name=store.state.user.userInfo.name
    //用户是否登陆了
    if(token){
        //登录了不能再跳转登录
        if(to.path=='/login'){
            next('/home')
        }else{
            //登录了，且不是跳转到注册页面
            //如果用户信息存在
            if(name){
                
                next()
            }else{
                    //用户信息没有，让仓库存储用户信息再跳转
                     store.dispatch("user/getUserInfo").then(()=>{
                        
                        next()
                     }).catch(()=>{
                        //token有效期过了！！！！！需要重新登录，获取新的token
                        store.dispatch("user/userLogout").catch(()=>{
                            alert("退出登录失败")
                        })
                        next('/login')
                     })
                    
               
            }
        }
    }else{
        //未登录
        //2、未登录，首页或者登录页可以正常访问
        if(to.path === '/login' || to.path === '/home' || to.path==='/register')
            next()
        else{
            alert('请先登录')
            next('/login')
        }

    }
})

export default router