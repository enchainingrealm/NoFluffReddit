let timeout = null;

/**
 * Saves the Redditors entered in the "Redditors to collapse" text area to
 * Chrome-sync-enabled LocalStorage under the "redditors" key.
 * - In the text area, Redditors are entered one per line.
 * - The redditors are stored as an array in LocalStorage.
 */
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

/**
 * Restores the Redditors saved in Chrome-sync-enabled LocalStorage to the
 * "Redditors to collapse" text area.
 * - In the text area, Redditors are entered one per line.
 */
function restoreOptions() {
    chrome.storage.sync.get({
        redditors: []
    }, function(items) {
        let redditors = items.redditors;
        let rawRedditors = redditors.join("\n");

        document.getElementById("redditors--textarea").value = rawRedditors;
    });
}

/**
 * The entry point of the script.
 * - When the options page's DOM finishes loading, populate the "Redditors to
 *   collapse" text area with the list of Redditors saved in LocalStorage.
 * - Attach a click handler to the Save button that saves the Redditors in the
 *   text area to LocalStorage.
 */
(function() {
    document.addEventListener("DOMContentLoaded", restoreOptions);

    document.getElementById("save--button")
        .addEventListener("click", saveOptions);
})();
