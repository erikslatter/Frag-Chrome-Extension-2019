browser.webNavigation.onHistoryStateUpdated.addListener(function () {
    if (window.location.hostname == "esea.net")
        browser.tabs.executeScript(null, { file: "content.js" });
});