import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api/index'
import {setToken,getToken,removeToken} from '@/utils/token'
const state={
    code:'',
    token:getToken(),
    userInfo:{},
}
const actions={
    //获取验证码
    async getCode({commit},phone){
        let result=await reqGetCode(phone)
        if(result.code==200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async userRegister({commit},user){
       
      let result = await reqUserRegister(user)
      if(result.code==200){
        return 'ok'
      }else{
        return Promise.reject(new Error('failed'))
      }
    },
    //登录业务
    async userLogin({commit},data){
      
        let result=await reqUserLogin(data)
        if(result.code==200){
            commit("USERLOGIN",result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject("failed")
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let result=await reqUserInfo()
        if(result.code==200){
            commit("GETUSERINFO",result.data)
            return "ok"
        }
    },
    //退出登录
    async userLogout({commit}){
        //通知服务器清除token
        let result=await reqLogout()
        if(result.code==200){
            commit("CLEAR")
            return 'ok'
        }else{
            return Promise.reject(new Error("failed!"))
        }
    }

}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    //清除本地数据
    CLEAR(state){
        //本地仓库token清空
        state.token='',
        state.userInfo={},
        //localstorage token清空
        removeToken()
    }
}
const getters={}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}