import * as assets from "./assets";

export default (ns) => /* html */ `
<div x-data=" ${ns}.Chatbox() " id="${ns}-component">
    <template x-if="isInitialized" >
        <div x-show.transition="open" x-on:click.away="open=false" class="chat-window-wrapper" >
            <div class="chat-window-blur"></div>
            <div class="chat-window">
    
                <div class="chat-header">
                    <h2 x-text='title' ></h2>
                    <i x-text='subtitle'></i>
                </div>
    
                <div class="chat-area" x-ref="chat_area">
                    <template x-for="message in messages" :key="message.time">
                        <div>
                            <template x-if="message.mode=='sent'">
                                <div class="message sent slide-right">
                                    <div class="text text-right">
                                        <span x-text="message.content" class="scale-up-tr"></span>
                                    </div>
                                    <div class="avatar"> ${assets.user_svg} </div>
                                    <div class="time" x-text="(new Date(message.time)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })" ><div>
                                </div>
                            </template>
                            <template x-if="message.mode=='reply'">
                                <div class="message reply" :class="{'no-avatar':message.type=='buttons'}">
                                    <div class="avatar"> ${assets.bot_png} </div>   
                                    <template x-if="message.type=='text'">
                                        <div class="text">
                                            <span x-text="message.content" class="scale-up-tl" ></span>
                                        </div>
                                    </template>
                                    <template x-if="message.type=='image'">
                                        <div class="image">
                                            <input type="checkbox" :id="'zoomCheck'+message.time">
                                            <label :for="'zoomCheck'+message.time">
                                            <img :src="message.content" width="200" class="scale-up-tl" onload="javascript: this.parentElement.parentElement.className = 'image loaded'" onerror="javascript: this.parentElement.parentElement.className = 'image error'"/>
                                            </label>
                                            <div class="loader"><div></div></div>
                                            <div class="failure"><div>&#9888;</div></div>
                                        </div>
                                    </template>
                                    <template x-if="message.type=='video'">
                                        <div class="video">
                                            <video class="scale-up-tl" controls>
                                                <source :src="message.content" >
                                            </video>
                                        </div>
                                    </template>
                                    <template x-if="message.type=='buttons'">
                                        <div class="buttons">
                                            <template x-for="button in message.buttons">
                                                <button class="scale-up-tl"><span x-text="button.label"></span></button>
                                            </template>
                                        </div>
                                    </template>
                                    <template x-if="message.type!='buttons'"><div class="time" x-text="(new Date(message.time)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })" ><div></template>
                                </div>
                            </template>
                        </div>
                    </template>
                    <div x-show="replyWaiting" class="message reply slide-left">
                        <div class="avatar"> ${assets.bot_png} </div>
                        <div class="text">
                            <span class="scale-up-tl">${assets.chat_loading_gif}</span>
                        </div>
                    </div>
                </div>
    
                <div class="chat-action shadow-6">
                    <div class="chat-input">
                        <input x-model="content" x-on:keydown.enter="sendMessage()" x-ref="chat_input" type="text" placeholder="Type Message...">
                    </div>
                    <div class="chat-send">
                        <button x-on:click="sendMessage()" x-bind:disabled="content==''" > ${assets.send_svg} </button>
                    </div>
                </div>                
            </div>
        </div>
    </template>
    <div class="chat-btns" x-bind:class="{'chat-column':!row}">
        <template x-if="facebook"><a target="_blank" x-bind:href="'https://m.me/'+facebook+(token.hasOwnProperty('auth')?'?ref='+token['auth']:'')" class="chat-btn chat-btn-full chat-sm" x-show.transition="isInitialized && !open" title="Facebook Messenger"> ${assets.facebook_svg} </a></template>
        <template x-if="telegram"><a target="_blank" x-bind:href="'https://telegram.me/'+telegram+(token.hasOwnProperty('auth')?'?start='+token['auth']:'')" class="chat-btn chat-btn-full chat-sm" x-show.transition="isInitialized && !open" title="Telegram"> ${assets.telegram_svg} </a></template>
        <button class="chat-start" x-on:click="startChat()"  x-bind:class="{'chat-error':!isInitialized}" x-bind:title="isInitialized?'Start Chat.':'Reload'" x-show.transition="!open"> ${assets.chat_svg} </button>
    </div>
</div>
`;
