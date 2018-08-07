function collapseRedditors() {
    chrome.storage.sync.get({
        redditors: []
    }, function(items) {
        let redditors = items.redditors;
        collapseRedditorsHelper(new Set(redditors));
    });
}

function collapseRedditorsHelper(redditors) {
    let expands = document.getElementsByClassName("expand");
    Array.from(expands).forEach(function(expand) {
        if (expand.classList.contains("visited")) {
            return;   // continue (skip this iteration)
        }

        let parent = expand.parentElement;

        let authors = parent.getElementsByClassName("author");
        if (authors.length === 0) {
            return;   // continue (skip this iteration)
        }
        let author = authors[0];

        // note: expand.text does NOT contain a regular dash!
        if (redditors.has(author.text)) {
            if (expand.text === "[–]") {
                expand.click();
            }
            expand.classList.add("visited");   // when "load more comments" is
            // clicked later and the DOM changes, don't re-process previous
            // comments
        }
    });
}

(function() {
    collapseRedditors();

    document.addEventListener("DOMSubtreeModified", collapseRedditors);
    // collapse new comments exposed when "load more comments" is clicked
})();
