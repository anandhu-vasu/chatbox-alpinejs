const base_space_unit = "1em"
const shadow = {
    0 : "none !important",
    1 : "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;",
    2 : "0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15) !important;",
    3 : "0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;",
    4 : "0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important;",
    5 : "0 16px 28px 0 rgba(0,0,0,0.22),0 25px 55px 0 rgba(0,0,0,0.21) !important;",
    6 : "0 27px 24px 0 rgba(0,0,0,0.2),0 40px 77px 0 rgba(0,0,0,0.22) !important;"
}

export default (ns) => 
/* css */`
${ns},${ns} *{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
${ns} button{
    cursor:pointer;
    transition: all 0.1s;
    transform: scale(1,1);
    box-shadow: ${shadow[2]};
}
${ns} button:disabled{
    cursor:initial;
}
${ns} button:hover{
    box-shadow: ${shadow[5]} !important;
    background: white;
}
${ns} button:active{
    transform:scale(0.9,0.9);
}
${ns} .chat-start,
${ns} .chat-window-wrapper{
    position:fixed;
    bottom: 0px;
    right: 0px;
}
${ns} .chat-start{
    margin: 0 15px 15px 0;
}
${ns} .chat-start button{
    border:none;
    height:50px;
    width:50px;
    padding:10px;
    border-radius:50%;
    box-shadow: ${shadow[2]};
}
${ns} .chat-start.chat-error button{
    background:crimson;
    color:white !important;
    position:relative;
}
${ns} .chat-start.chat-error button svg{
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
${ns} .chat-start.chat-error button:after{
    content:"!";
    background:red;
    color:white;
    height:15px;
    width:15px;
    font-size:15px;
    position:absolute;
    top:0;
    right:0;
    border-radius:50%;
    box-shadow: ${shadow[1]};
}
${ns} .chat-window-wrapper{
    width: 100%;
    height: 100%;
    box-shadow: ${shadow[3]};
    width: 350px;
    height: 500px;
    max-width: 85vw;
    max-height: 100vh;
    margin: 0 15px 15px;
    border-radius: 10px 10px 20px 20px;
    overflow:hidden;
}
${ns} .chat-window-blur{
    background: rgba(128, 128, 128, 0.75);
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    width: 100%;
    height:100%;
    position: absolute;
    z-index:-1;
}
${ns} .chat-window{
    display:flex;
    flex-flow: column nowrap;
    height:100%;
    width:100%;
    align-items:stretch;
}
${ns} .chat-header{
    flex-grow:0;
    padding:10px 20px;
    background:blueviolet;
    color:white;
    font-family:sans-serif;
}
${ns} .chat-area{
    flex-grow:1;
    margin:10px;
    overflow:hidden;
    overflow-y:auto;
}
${ns} .chat-action{
    flex-grow:0;
    display:flex;
    background:white;
    border-radius: 40px;
    padding: 5px;
}
${ns} .chat-input{
    flex-grow:1;
    height:40px
}
${ns} .chat-input input{
    width: 100%;
    height: 40px;
    border: none;
    background: transparent;
    outline:none !important;
    font-size: 1em;
    padding:0px 10px;
}
${ns} .chat-send{

}
${ns} .chat-send button{
    width:40px;
    height:40px;
    border:none;
    padding:10px;
    border-radius:50%;
    box-shadow: ${shadow[2]};
}

${ns} .message{
    display: flex;
    position: relative;
}
${ns} .message .text{
    flex-grow:1;
}
${ns} .message .avatar{
    flex-grow:0;
    height:30px !important;
    width:30px !important;
    min-width:30px;
    border-radius: 50%;
    background:dodgerblue;
}
${ns} .message .avatar img{
    height:100%;
    width:100%;
}
${ns} .message .text{
    margin:25px 10px;
}
${ns} .message .text span{
    display:inline-block;
    overflow: hidden;
    background: white;
    padding:10px;
    overflow-wrap: anywhere;
    border-radius:0px 25px 15px 25px;
    box-shadow: ${shadow[1]};
}
${ns} .message.sent .text span{
    border-radius: 25px 0px 25px 15px;
    background:lightblue;
}

${ns} .message .time{
    position:absolute;
    top:0px;
    color: #eee;
    font-weight:bold;
    font-size:0.75em;
    text-shadow: 0 0 2px #999;
}
${ns} .message.sent .time{
    right:40px;
}
${ns} .message.reply .time{
    left:40px;
}


${ns} .text-left   { text-align: left; }
${ns} .text-right  { text-align: right; }
${ns} .text-center { text-align: center; }
${ns} .shadow-0 { box-shadow: ${shadow[0]}; }
${ns} .shadow-1 { box-shadow: ${shadow[1]}; }
${ns} .shadow-2 { box-shadow: ${shadow[2]}; }
${ns} .shadow-3 { box-shadow: ${shadow[3]}; }
${ns} .shadow-4 { box-shadow: ${shadow[4]}; }
${ns} .shadow-5 { box-shadow: ${shadow[5]}; }
${ns} .shadow-6 { box-shadow: ${shadow[6]}; }
`