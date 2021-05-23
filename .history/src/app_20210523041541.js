import axios from "axios";
const reg_media =
    /<(image|video)\|(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))>/;

function Chatbox() {
    return {
        open: false,
        replyWaiting: false,
        title: "Chat Box",
        subtitle: "",
        content: "",
        row: false,
        token: null,
        url: "",
        telegram: null,
        facebook: null,
        messages: [],
        isInitialized: false,
        isStarted: false,
        checkInitialized() {
            if (this.token) {
                window[window.$namespace].$status = "INITIALIZED";
                this.isInitialized = true;
            }
        },
        messageController(message) {
            if (typeof message == "object") {
                this.messages.push({
                    mode: "reply",
                    ...message,
                    time: Date.now(),
                });
            } else {
                let match = message.match(reg_media);
                if (match)
                    this.messages.push({
                        mode: "reply",
                        type: match[1],
                        content: match[2],
                        time: Date.now(),
                    });
                else
                    this.messages.push({
                        mode: "reply",
                        type: "text",
                        content: message,
                        time: Date.now(),
                    });
            }
        },
        sendMessage(start, content, force_content = null) {
            if (!content) {
                if (this.content != "") {
                    this.messages.push({
                        mode: "sent",
                        type: "text",
                        content: this.content,
                        time: Date.now(),
                    });
                    content = this.content;
                    this.content = "";
                    this.replyWaiting = true;
                }
            } else {
                if (force_content) {
                    this.messages.push({
                        mode: "sent",
                        type: "text",
                        content: force_content,
                        time: Date.now(),
                    });
                }
                this.replyWaiting = true;
            }

            const final = () => {
                this.replyWaiting = false;
                setTimeout(this.scrollBottom, 500);
            };
            const onError = (error) => {
                if (error.response) {
                    let response = error.response;
                    if (response.status == 401) {
                        console.log(error.messages);
                    }
                }
                console.log(error);
                window[window.$namespace].$status = "NOT INITIALIZED";
                this.isInitialized = false;
                this.open = false;
                return;
            };

            if (this.token.expiry * 1000 > Date.now()) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + this.token.access,
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                };

                if (start && !this.isStarted) {
                    this.replyWaiting = true;
                    axios
                        .get(this.url + "bot/chat/", config)
                        .then((response) => {
                            this.replyWaiting = false;
                            for (const message of response.data.messages) {
                                if (message) {
                                    this.messageController(message);
                                }
                            }
                            this.isStarted = true;
                        })
                        .catch(onError)
                        .then(final);
                } else if (content) {
                    const data = {
                        message: content,
                    };
                    axios
                        .post(this.url + "bot/chat/", data, config)
                        .then((response) => {
                            this.replyWaiting = false;
                            for (const message of response.data.messages) {
                                if (message) {
                                    this.messageController(message);
                                }
                            }
                        })
                        .catch(onError)
                        .then(final);
                }
            } else {
                const data = {
                    refresh: this.token.refresh,
                };

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                };

                axios
                    .post(this.url + "token/refresh/", data, config)
                    .then((response) => {
                        this.token.access = response.data.access;
                        this.token.expiry = response.data.expiry;
                        this.sendMessage(start, content);
                    })
                    .catch(onError)
                    .then(final);
            }
            setTimeout(this.scrollBottom, 100);
        },
        startChat() {
            if (!this.isInitialized) {
                location.reload();
                return;
            }
            this.open = true;
            this.$refs.chat_input.focus();

            this.sendMessage(true);
        },
        scrollBottom() {
            let area = document.querySelector(
                `#${window.$namespace} .chat-area`
            );
            if (area) {
                area.scrollTop = area.scrollHeight;
            }
        },
    };
}

export { Chatbox };
export * from "./functions";
