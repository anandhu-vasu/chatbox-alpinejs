const base_space_unit = "1em";
const shadow = {
    0: "none !important",
    1: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;",
    2: "0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15) !important;",
    3: "0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;",
    4: "0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important;",
    5: "0 16px 28px 0 rgba(0,0,0,0.22),0 25px 55px 0 rgba(0,0,0,0.21) !important;",
    6: "0 27px 24px 0 rgba(0,0,0,0.2),0 40px 77px 0 rgba(0,0,0,0.22) !important;",
};

export default (ns) => /* css */ `
${ns},${ns} * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
${ns} {
    position: relative;
    z-index: 10000 !important;
}
${ns} button,
${ns} .chat-btn {
    cursor: pointer;
    transition: all 0.1s;
    transform: scale(1, 1);
    box-shadow: ${shadow[2]};
}
${ns} button:disabled,
${ns} .chat-btn:disabled {
    cursor: initial;
}
${ns} button:hover,
${ns} .chat-btn:hover {
    box-shadow: ${shadow[5]} !important;
    background: white;
}
${ns} button:active,
${ns} .chat-btn:active {
    transform: scale(0.9, 0.9);
}
${ns} .chat-btns,
${ns} .chat-window-wrapper {
    position: fixed;
    bottom: 0px;
    right: 0px;
}
${ns} .chat-btns {
    margin: 0 5px 10px 0;
    display: flex;
}
${ns} .chat-btns button,
${ns} .chat-btns .chat-btn {
    margin: 5px;
    border: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    border-radius: 50%;
    box-shadow: ${shadow[2]};
}
${ns} .chat-btns.chat-column {
    flex-direction: column;
}
${ns} .chat-btns svg {
    width: 100%;
    height: 100%;
}
${ns} .chat-btn-full {
    padding: 0px !important;
    background: transparent !important;
}
${ns} .chat-sm {
    transform: scale(0.8, 0.8);
}
${ns} .chat-start.chat-error {
    background: crimson;
    color: white !important;
    position: relative;
}
${ns} .chat-start.chat-error svg {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
${ns} .chat-start.chat-error:after {
    content: "!";
    background: red;
    color: white;
    height: 15px;
    width: 15px;
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    box-shadow: ${shadow[1]};
}
${ns} .chat-window-wrapper {
    width: 100%;
    height: 100%;
    box-shadow: ${shadow[3]};
    width: 350px;
    height: 500px;
    max-width: 85vw;
    max-height: 100vh;
    margin: 0 15px 15px;
    border-radius: 10px 10px 20px 20px;
    overflow: hidden;
}
${ns} .chat-window-blur {
    background: rgba(128, 128, 128, 0.75);
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
${ns} .chat-window {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    align-items: stretch;
    backdrop-filter: blur(5px);
}
${ns} .chat-header {
    flex-grow: 0;
    padding: 10px 20px;
    background: #563d7c;
    color: white;
    font-family: sans-serif;
}
${ns} .chat-area {
    flex-grow: 1;
    padding: 10px;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    height: 100%;
}
${ns} .chat-area::-webkit-scrollbar {
    width: 0px !important;
    display: none !important;
}
${ns} .chat-area {
    overflow: -moz-scrollbars-none !important;
    -ms-overflow-style: none !important;
    scrollbar-width: none;
}
${ns} .chat-action {
    flex-grow: 0;
    display: flex;
    background: white;
    border-radius: 40px;
    padding: 5px;
}
${ns} .chat-input {
    flex-grow: 1;
    height: 40px;
}
${ns} .chat-input input {
    width: 100%;
    height: 40px;
    border: none;
    background: transparent;
    outline: none !important;
    font-size: 1em;
    padding: 0px 10px;
}
${ns} .chat-send {
}
${ns} .chat-send button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 10px;
    border-radius: 50%;
    box-shadow: ${shadow[2]};
}

${ns} .message {
    display: flex;
    position: relative;
}
${ns} .message .text {
    flex-grow: 1;
}
${ns} .message .avatar {
    flex-grow: 0;
    height: 30px !important;
    width: 30px !important;
    min-width: 30px;
    border-radius: 50%;
    background: dodgerblue;
}
${ns} .message.no-avatar .avatar img{
    display: none;
}
${ns} .message.no-avatar .avatar{
    visibility: hidden;
}
${ns} .message .avatar img {
    height: 100%;
    width: 100%;
}
${ns} .message .text,
${ns} .message .image,
${ns} .message .video,
${ns} .message .buttons {
    margin: 16px 10px 8px 10px;
}
${ns} .message .image img,
${ns} .message .video video,{
    display: inline-block;
    overflow: hidden;
    overflow-wrap: anywhere;
    border-radius: 0px 25px 15px 25px;
    box-shadow: ${shadow[1]};
    width:250px;
}
${ns} .message.reply .buttons{
    display: flex;
    width:265px;
    margin-top: 5px;
}
${ns} .message.reply .buttons button{
    border:none;
    outline: 0px;
    border-radius:80px;
    background: #fff5;
    padding: 5px;
    box-shadow:  3px 3px 7px rgba(55, 84, 170, 0.15), -3px -3px 10px #fffa,inset 0 0 15px rgba(55, 84, 170, 0), inset 0 0 20px rgba(255, 255, 255, 0), inset 0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    transition: all 0.25s;
}
${ns} .message.reply .buttons button:before{
    position:absolute;
    top:0;
    left:0;
    background: #fff5;
    filter:blur(14px);
}
${ns} .message.reply .buttons button:hover{
    box-shadow: -3px -3px 10px #fffa, 0px 0px 4px rgba(255, 255, 255, 0.2),inset 3px 3px 7px rgba(55, 84, 170, 0.15), inset -3px -3px 10px #fffa !important;
}
${ns} .message .image input[type=checkbox] {
    display: none;
}
${ns} .message .image label,${ns} .message .image .failure{
    display:none;
}
${ns} .message .image.loaded label{
    display:initial;
}
${ns} .message .image .loader,
${ns} .message .image.error .failure{
    
    display: inline-block;
    overflow: hidden;
    overflow-wrap: anywhere;
    border-radius: 0px 25px 15px 25px;
    box-shadow: ${shadow[1]};
}
${ns} .message .image .loader div {
    
    border: 3px solid #f3f3f3;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    border-top: 3px solid #555;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin:20px;
}
${ns} .message .image.loaded .loader,${ns} .message .image.error .loader{
    display:none;
}
${ns} .message .image.error .failure{
    display:inline-block;
    background:#555;
    color:#999;
}
${ns} .message .image.error .failure div {
    
    -webkit-animation: fade-in 0.5s linear;
    animation: fade-in 0.5s linear;
    font-size:30px;
    text-align:center;
    line-height:30px;
    width: 30px;
    height: 30px;
    margin:20px;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
${ns} .message .image img {
    transition: all 0.25s ease;
    cursor: zoom-in;
}

${ns} .message .image.loaded input[type=checkbox]:checked ~ label > img {
    width:100%;
    height:100%;
    border-radius:5px;
    object-fit: contain;
    cursor: zoom-out;
}
${ns} .message .image.loaded input[type=checkbox]:checked ~ label{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:100000000;
    background-color: #333333;
}
${ns} .message .text span {
    display: inline-block;
    overflow: hidden;
    background: white;
    padding: 10px;
    overflow-wrap: anywhere;
    border-radius: 0px 25px 15px 25px;
    box-shadow: ${shadow[1]};
}
${ns} .message.sent .text span {
    border-radius: 25px 0px 25px 15px;
    background: lightblue;
}

${ns} .message .time {
    position: absolute;
    top: 0px;
    color: #eee;
    font-weight: bold;
    font-size: 0.75em;
    text-shadow: 0 0 2px #999;
}
${ns} .message.sent .time {
    right: 40px;
}
${ns} .message.reply .time {
    left: 40px;
}
@-webkit-keyframes scale-up-tl {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
}
@keyframes scale-up-tl {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
}
@-webkit-keyframes scale-up-tr {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
    }
}
@keyframes scale-up-tr {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
    }
}
@-webkit-keyframes slide-left {
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    0% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}
@keyframes slide-left {
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    0% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}
@-webkit-keyframes slide-right {
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    0% {
        -webkit-transform: translateX(100px);
        transform: translateX(100px);
    }
}
@keyframes slide-right {
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    0% {
        -webkit-transform: translateX(100px);
        transform: translateX(100px);
    }
}
@-webkit-keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.scale-up-tl {
    -webkit-animation: scale-up-tl 0.3s 0.25s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
    animation: scale-up-tl 0.3s 0.25s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}
.scale-up-tr {
    -webkit-animation: scale-up-tr 0.3s 0.25s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
    animation: scale-up-tr 0.3s 0.25s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}
.slide-left {
    -webkit-animation: slide-left 0.25s 0.1s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-left 0.25s 0.1s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-right {
    -webkit-animation: slide-right 0.25s 0.1s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-right 0.25s 0.1s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.fade-in {
    -webkit-animation: fade-in 0.3s 0.25s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
    animation: fade-in 0.3s 0.25s
        cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

${ns} .text-left {
    text-align: left;
}
${ns} .text-right {
    text-align: right;
}
${ns} .text-center {
    text-align: center;
}
${ns} .shadow-0 {
    box-shadow: ${shadow[0]};
}
${ns} .shadow-1 {
    box-shadow: ${shadow[1]};
}
${ns} .shadow-2 {
    box-shadow: ${shadow[2]};
}
${ns} .shadow-3 {
    box-shadow: ${shadow[3]};
}
${ns} .shadow-4 {
    box-shadow: ${shadow[4]};
}
${ns} .shadow-5 {
    box-shadow: ${shadow[5]};
}
${ns} .shadow-6 {
    box-shadow: ${shadow[6]};
}
`;
