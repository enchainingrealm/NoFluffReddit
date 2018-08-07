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
