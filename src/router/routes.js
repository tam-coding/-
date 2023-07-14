import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCarSuccess from '@/pages/AddCartSuccess'
import Trade from '@/pages/Trade'
import ShopCart from '@/pages/ShopCart'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//二级路由组件
import MyOrder from '@/pages/Center/myOrder/index.vue'
import GroupOrder from '@/pages/Center/groupOrder/index.vue'

export default [
    
    {
        path:'/center',
        component:Center,
        meta:{show:true},
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder,
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paySuccess',
        component:PaySuccess,
        meta:{show:true}
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=="/shopCart"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopCart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCarSuccess,
        meta:{show:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false},
       
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true}
    },
    //重定向，让项目跑起来的时候访问/让其立马重定向到首页
    {
        path:'/',
        redirect:'/home'
    },
    
]