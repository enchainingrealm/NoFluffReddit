function redirect() {
    let srcUrl = location.href;
    let destUrl = srcUrl.replace("www", "old");   // replace first occurrence of
    // "www" with "old"

    location.replace(destUrl);
}

(function() {
    redirect();
})();
