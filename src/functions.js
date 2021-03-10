import {$data} from './utils'

function Initialize(token,url){
    try{
        if(token == null)
            throw new TypeError("Token is Null")
        if(typeof token ==  'string')
            token = JSON.parse(token)
        else if(typeof token != 'object')
            throw new TypeError("Token is not a Object")

        if(!token.hasOwnProperty('access')){
            throw new Error("Token has no key 'access'")
        }
        if(!token.hasOwnProperty('refresh')){
            throw new Error("Token has no key 'refresh'")
        }
        if(!token.hasOwnProperty('expiry')){
            throw new Error("Token has no key 'expiry'")
        }
        if(url){

            if(url.charAt(url.length-1)!='/')
                url = url+'/'
            window[$namespace].$url=url
        }

        $data().token = token
        $data().url = window[$namespace].$url
        $data().isInitialized = true

        
    }catch(err){
        console.error(err.message)
    }
    
}

export {Initialize}