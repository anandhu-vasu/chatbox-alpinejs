import axios from 'axios'

function Chatbox(){
    return{
        open:false,
        replyWaiting:false,
        title:"Chat Box",
        text:"",
        token:null,
        url:"",
        messages:[],
        isInitialized:false,
        isStarted:false,
        checkInitialized(){
            if (this.token){
                window[window.$namespace].$status="INITIALIZED"
                this.isInitialized = true
            }
        },
        sendMessage(){
            let text = ""
            if(this.text != ""){
                this.messages.push({type:"sent",text:this.text,time:Date.now()})
                text = this.text
                this.text = ""
            }
            this.replyWaiting = true;

            if(this.token.expiry*1000 > Date.now()){

                const config = {
                    headers:{
                        'Authorization': 'Bearer '+this.token.access,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }

                let onerror = (error)=>{
                    if(error.response){
                        let response = error.response
                        if(response.status == 401){
                            console.log(error.messages)
                        }
                    }
                }

                if(!this.isStarted){
                    axios.get(this.url+'bot/chat/',config).then(response=>{
                        for(const message of response.data.messages){
                            this.messages.push({type:"reply",text:message,time:Date.now()})
                        }
                        this.isStarted = true
                    }).catch(onerror)
                    
                }else if(text){
                    const data = {
                        message: text
                    }
                    axios.post(this.url+'bot/chat/',data,config).then(response=>{
                        for(const message of response.data.messages){
                            this.messages.push({type:"reply",text:message,time:Date.now()})
                        }
                    }).catch(onerror)
                }

            }else{

                const data = {
                    refresh: this.token.refresh
                }

                const config = {
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }

                axios.post(this.url+'token/refresh/',data,config).then(response=>{
                    this.token.access = response.data.access
                    this.token.expiry = response.data.expiry
                    this.sendMessage()
                    console.log("good")
                }).catch(error=>{
                    if(error.response){
                        let response = error.response
                        if(response.status == 401){
                            console.log(error.messages)
                        }
                    }
                })
            }

            this.replyWaiting = false
            
        },
        startChat(){
            if(!this.isInitialized){
                location.reload();
                return;
            }
            this.open = true
            this.$refs.chat_input.focus()

            this.sendMessage()
        }
    }
}

export {Chatbox}
export * from './functions'