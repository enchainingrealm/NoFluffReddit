let timeout = null;

function saveOptions() {
    let rawRedditors = document.getElementById("redditors--textarea").value;
    let redditors = rawRedditors.split("\n");

    chrome.storage.sync.set({
        redditors: redditors
    }, function() {
        let successAlert = document.getElementById("success--alert");
        successAlert.style.display = "block";

        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            successAlert.style.display = "none";
            timeout = null;
        }, 1000);
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        redditors: []
    }, function(items) {
        let redditors = items.redditors;
        let rawRedditors = redditors.join("\n");

        document.getElementById("redditors--textarea").value = rawRedditors;
    });
}

(function() {
    document.addEventListener("DOMContentLoaded", restoreOptions);

    document.getElementById("save--button")
        .addEventListener("click", saveOptions);
})();
