import axios from "axios";

function Chatbox() {
    return {
        open: false,
        replyWaiting: false,
        title: "Chat Box",
        subtitle: "",
        text: "",
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
        sendMessage(start, text) {
            if (!text) {
                if (this.text != "") {
                    this.messages.push({
                        type: "sent",
                        text: this.text,
                        time: Date.now(),
                    });
                    text = this.text;
                    this.text = "";
                    this.replyWaiting = true;
                }
            } else {
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
                                if (message)
                                    this.messages.push({
                                        type: "reply",
                                        text: message,
                                        time: Date.now(),
                                    });
                            }
                            this.isStarted = true;
                        })
                        .catch(onError)
                        .then(final);
                } else if (text) {
                    const data = {
                        message: text,
                    };
                    axios
                        .post(this.url + "bot/chat/", data, config)
                        .then((response) => {
                            this.replyWaiting = false;
                            for (const message of response.data.messages) {
                                this.messages.push({
                                    type: "reply",
                                    text: message,
                                    time: Date.now(),
                                });
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
                        this.sendMessage(start, text);
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
