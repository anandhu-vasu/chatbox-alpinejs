import {$data} from './utils'

function Initialize(token,options){
    try{
        if(token == null)
            throw new TypeError("Token is Null")
        if(typeof token ==  'string')
            token = JSON.parse(token)
        else if(typeof token != 'object')
            throw new TypeError("Token is not a Object")
        if(options && typeof options != "object"){
            throw new TypeError("Options is not a Object")
        }

        if(!token.hasOwnProperty('access')){
            throw new Error("Token has no key 'access'")
        }
        if(!token.hasOwnProperty('refresh')){
            throw new Error("Token has no key 'refresh'")
        }
        if(!token.hasOwnProperty('expiry')){
            throw new Error("Token has no key 'expiry'")
        }
        if(options){    
            if(options.hasOwnProperty('url')){

                if(options.url.charAt(options.url.length-1)!='/')
                    options.url = options.url+'/'
                window[$namespace].$url=options.url
            }
            if(options.hasOwnProperty('title')){
                $data().title = options.title
            }
            if(options.hasOwnProperty('subtitle')){
                $data().subtitle = options.subtitle
            }
        }

        $data().token = token
        $data().url = window[$namespace].$url
        $data().isInitialized = true

        
    }catch(err){
        console.error(err.message)
    }
    
}

export {Initialize}