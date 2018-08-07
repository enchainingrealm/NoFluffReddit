function removeOneByClass(className) {
    let elements = document.getElementsByClassName(className);
    if (elements.length === 0) {
        return;
    }

    let element = elements[0];
    element.parentElement.removeChild(element);
}

function removeAllByClass(className) {
    let elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(function(element) {
        element.parentElement.removeChild(element);
    });
}

function removeOneById(id) {
    let element = document.getElementById(id);
    element.parentElement.removeChild(element);
}

function collapseRedditors(redditors) {
    let expands = document.getElementsByClassName("expand");
    Array.from(expands).forEach(function(expand) {
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
