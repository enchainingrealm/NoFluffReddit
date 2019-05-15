let CHECKBOX_IDS = {
    removeAdvertisements: "advertisements--checkbox",
    removeReadNext: "read-next--checkbox",
    removeLogin: "login--checkbox",
    removeFooter: "footer--checkbox",
    removeButtons: "buttons--checkbox",
    removeArrows: "arrows--checkbox",
    removeSubmits: "submits--checkbox"
};

let timeout = null;

/**
 * Saves the checkbox states and the contents of the "Redditors to collapse"
 * text area to Chrome-sync-enabled LocalStorage.
 * - Checkbox states are stored as booleans.
 * - In the text area, Redditors are entered one per line. The Redditors are
 *   stored as an array in LocalStorage.
 */
function saveOptions() {
    let options = getOptionsFromDocument();
    chrome.storage.sync.set(options, saveSuccess);
}

/**
 * Returns an object containing the current options selected on the page.
 * - Checkbox settings are stored as booleans
 * - Redditors to collapse are stored as an array
 */
function getOptionsFromDocument() {
    let options = {};
    Object.keys(CHECKBOX_IDS).forEach(function(option) {
        let checkboxId = CHECKBOX_IDS[option];
        options[option] = document.getElementById(checkboxId).checked;
    });

    let rawRedditors = document.getElementById("redditors--textarea").value;
    let redditors = rawRedditors.split("\n");

    options["redditors"] = redditors;
    return options;
}

/**
 * Callback called when the options have been successfully saved to Chrome-sync-
 * enabled LocalStorage. Displays a success alert for one second.
 */
function saveSuccess() {
    let successAlert = document.getElementById("success--alert");
    successAlert.style.display = "block";

    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        successAlert.style.display = "none";
        timeout = null;
    }, 1000);
}

/**
 * Restores the options saved in Chrome-sync-enabled LocalStorage to the form
 * widgets on the page. By default, all page elements except the voting arrows
 * are removed, and no Redditors are collapsed.
 * - The choice of page elements to remove is restored to the checkboxes.
 * - The list of Redditors to collapse is restored to the text area. Redditors
 *   are entered one per line.
 */
function restoreOptions() {
    chrome.storage.sync.get(STORED_OPTIONS, setOptionsToDocument);
}

/**
 * Restores the options in the given object to the form widgets on the page. The
 * options object should come from LocalStorage.
 * @param options   the options to restore to the form widgets on the page
 */
function setOptionsToDocument(options) {
    Object.keys(options).forEach(function(option) {
        if (CHECKBOX_IDS.hasOwnProperty(option)) {
            let checkboxId = CHECKBOX_IDS[option];
            document.getElementById(checkboxId).checked = options[option];
        }
    });

    let redditors = options.redditors;
    let rawRedditors = redditors.join("\n");

    document.getElementById("redditors--textarea").value = rawRedditors;
}

/**
 * The entry point of the script.
 * - When the options page's DOM finishes loading, populate the checkboxes and
 *   textarea with the options saved in LocalStorage.
 * - Attach a click handler to the Save button that saves the options from the
 *   form widgets on the page to LocalStorage.
 */
(function() {
    document.addEventListener("DOMContentLoaded", restoreOptions);

    document.getElementById("save--button")
        .addEventListener("click", saveOptions);
})();
