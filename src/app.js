function Chatbox(){
    return{
        open:false,
        replyWaiting:false,
        text:"",
        token:null,
        url:"",
        messages:[{type:"sent",text:"Hai",time:Date.now()},{type:"reply",text:"Hai",time:Date.now()}],
        isInitialized:false,
        isStarted:false,
        checkInitialized(){
            if (this.token){
                window[window.$namespace].$status="INITIALIZED"
                this.isInitialized = true
            }
        },
        startChat(){
            if(!this.isInitialized){
                location.reload();
                return;
            }
            this.open = true
            this.$refs.chat_input.focus()

            if(this.isStarted){
                
            }else{
                fetch(this.url+"bot/chat/", {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer '+this.token.access,
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    var items = responseJson._bodyInit
                    console.log(items)
                })
                .catch(error =>{
                    let message= 'Something bad happened ' + error
                    console.error(message)
                });
            }
        },
        sendMessage(){
            if(this.text != ""){
                this.messages.push({type:"sent",text:this.text,time:Date.now()})
                this.text = ""
            }
        }
    }
}

export {Chatbox}
export * from './functions'