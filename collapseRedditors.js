/**
 * Automatically collapses all comments made by one of the Redditors stored
 * under the "redditors" key in Chrome-sync-enabled LocalStorage.
 */
function collapseRedditors() {
    chrome.storage.sync.get({
        redditors: []
    }, function(items) {
        let redditors = items.redditors;
        collapseRedditorsHelper(new Set(redditors));
    });
}

/**
 * Automatically collapses all comments made by one of the Redditors in the
 * given Set of Redditors.
 * @param {!Set<string>} redditors   the Set of redditors whose comments will be
 * automatically collapsed
 */
function collapseRedditorsHelper(redditors) {
    let expands = document.getElementsByClassName("expand");
    Array.from(expands).forEach(function(expand) {
        if (expand.classList.contains("visited")) {
            return;   // continue (skip this iteration)
        }
        expand.classList.add("visited");   // when "load more comments" is
        // clicked later and the DOM changes, don't re-process previous comments

        let parent = expand.parentElement;

        let authors = parent.getElementsByClassName("author");
        if (authors.length === 0) {
            return;   // continue (skip this iteration)
        }
        let author = authors[0];

        // note: expand.text does NOT contain a regular dash!
        if (redditors.has(author.text) && expand.text === "[–]") {
            expand.click();
        }
    });
}

/**
 * The entry point of the content script.
 * - Automatically collapses all comments made by one of the Redditors stored
 *   under the "redditors" key in Chrome-sync-enabled LocalStorage.
 * - Attaches an event listener to the document so any new comments exposed when
 *   the user clicks a "load more comments" link will be automatically collapsed
 *   if the comment is by one of the aforementioned blacklisted Redditors.
 */
(function() {
    collapseRedditors();

    document.addEventListener("DOMSubtreeModified", collapseRedditors);
    // collapse new comments exposed when "load more comments" is clicked
})();
