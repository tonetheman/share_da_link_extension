//console.log("background js has started");

// installed event
//chrome.runtime.onInstalled.addListener(function() {
//    console.log("totally installed share da link");
//});


chrome.browserAction.onClicked.addListener(function(tab) {
    let tmp = `mailto:?SUBJECT=${tab.title}&BODY=${tab.url}`
    //console.log(tab);
    chrome.tabs.create({url:tmp}, function() {
        console.log("done create tab");
    });
});