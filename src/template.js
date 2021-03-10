import * as assets from './assets'

export default (ns) => 
/* template */`
<div x-data=" ${ns}.Chatbox() " id="${ns}-component">
    <template x-if="isInitialized" >
        <div x-show.transition="open" x-on:click.away="open=false" class="chat-window-wrapper">
            <div class="chat-window-blur"></div>
            <div class="chat-window">
    
                <div class="chat-header">
                    <h2>Chat Widow</h>
                </div>
    
                <div class="chat-area">
                    <template x-for="message in messages" :key="message.time">
                        <div>
                            <template x-if="message.type=='sent'">
                                <div class="message sent">
                                    <div class="text text-right">
                                        <span x-text="message.text" ></span>
                                    </div>
                                    <div class="avatar"> ${assets.user_svg} </div>
                                    <div class="time" x-text="(new Date(message.time)).toLocaleTimeString()" ><div>
                                </div>
                            </template>
                            <template x-if="message.type=='reply'">
                                <div class="message reply">
                                    <div class="avatar"> ${assets.bot_png} </div>
                                    <div class="text">
                                        <span x-text="message.text" ></span>
                                    </div>
                                    <div class="time" x-text="(new Date(message.time)).toLocaleTimeString()" ><div>
                                </div>
                            </template>
                        </div>
                    </template>
                    <div x-show.transition="replyWaiting" class="message reply">
                        <div class="avatar"> ${assets.bot_png} </div>
                        <div class="text">
                            <span>${assets.chat_loading_gif}</span>
                        </div>
                    </div>
                </div>
    
                <div class="chat-action">
                    <div class="chat-input">
                        <input x-model="text" x-on:keydown.enter="sendMessage()" x-ref="chat_input" type="text" placeholder="Type Message...">
                    </div>
                    <div class="chat-send">
                        <button x-on:click="sendMessage()" x-bind:disabled="text==''" > ${assets.send_svg} </button>
                    </div>
                </div>                
            </div>
        </div>
    </template>
    <div class="chat-start" x-bind:class="{'chat-error':!isInitialized}" x-bind:title="isInitialized?'Click to Start Chat.':'Click to Reload Page'" x-show.transition="!open">
        <button x-on:click="startChat()"> ${assets.chat_svg} </button>
    </div>
</div>
`