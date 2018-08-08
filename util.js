/**
 * Removes the first DOM element with the given class from its parent.
 * @param className   the class the removed element has
 */
function removeOneByClass(className) {
    let elements = document.getElementsByClassName(className);
    if (elements.length === 0) {
        return;
    }

    let element = elements[0];
    element.parentElement.removeChild(element);
}

/**
 * Removes all DOM elements with the given class from their parents.
 * @param className   the class the removed elements have
 */
function removeAllByClass(className) {
    let elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(function(element) {
        element.parentElement.removeChild(element);
    });
}

/**
 * Removes the DOM element with the given ID from its parent.
 * @param id   the id of the DOM element to remove
 */
function removeOneById(id) {
    let element = document.getElementById(id);
    element.parentElement.removeChild(element);
}
