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

export default [
    {
        path:'/paySuccess',
        component:PaySuccess,
        meta:{show:true}
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true}
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
        meta:{show:false}
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