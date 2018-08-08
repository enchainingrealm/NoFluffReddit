/**
 * Checks if the current page is a New Reddit page, and redirects to the
 * corresponding Old Reddit page if so.
 */
function redirect() {
    let srcUrl = location.href;
    let destUrl = srcUrl.replace("www", "old");   // replace first occurrence of
    // "www" with "old"

    location.replace(destUrl);
}

/**
 * The entry point of the content script.
 */
(function() {
    redirect();
})();
