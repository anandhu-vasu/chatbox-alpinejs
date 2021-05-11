function addTemplate(template, ns) {
    document
        .getElementsByTagName("body")[0]
        .insertAdjacentHTML(
            "beforeend",
            `<div id="${ns}"> ${template(ns)} </div>`
        );
}

function addStyle(styles, ns) {
    styles = styles("#" + ns);
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));

    document.getElementsByTagName("head")[0].appendChild(css);
}

function css(styles, ns) {
    styles = styles("#" + ns);
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));

    document.getElementsByTagName("head")[0].appendChild(css);
}

const $data = () =>
    document.querySelector(
        `#${window.$namespace} #${window.$namespace}-component[x-data]`
    ).__x.$data;

export { addTemplate, addStyle, $data };
