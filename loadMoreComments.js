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

(function() {
    loadMoreComments();
})();
