/**
 * Automatically clicks all "load more comments" links on this Reddit page.
 */
function loadMoreComments() {
    while (true) {
        let loaders = getLoaders();
        if (loaders.length === 0) {
            break;
        }

        loaders.forEach(function(loader) {
            loader.click();
        });
    }
}

/**
 * Get all "load more comments" links on this Reddit page, and return them as
 * anchor elements.
 * @returns {!*[]}   the "load more comments" anchor elements on this page
 */
function getLoaders() {
    let anchors = document.getElementsByTagName("a");
    anchors = Array.from(anchors);

    // noinspection JSCheckFunctionSignatures
    let loaders = anchors.filter(function(anchor) {
        if (anchor.childNodes.length === 0) {
            return false;
        }

        let text = anchor.childNodes[0].nodeValue;
        let id = anchor.id;   // returns "" if anchor has no id

        return text === "load more comments"
            && id.startsWith("more_");
    });
    return loaders;
}

/**
 * The entry point of the content script.
 * Automatically clicks all "load more comments" links on this Reddit page.
 */
(function() {
    loadMoreComments();
})();
