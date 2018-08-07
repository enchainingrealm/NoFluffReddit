function removeWelcomeToReddit() {
    removeOneByClass("listingsignupbar");
}

function removeAddToDiscussion() {
    removeOneByClass("commentsignupbar");
}

function removeReadNext() {
    removeOneByClass("read-next");
}

function removeGoldvertisement() {
    removeOneByClass("goldvertisement");
}

function removeLogin() {
    removeOneById("login_login-main");
}

function removeFooter() {
    removeOneByClass("footer-parent");
}

function removeButtons() {
    removeAllByClass("save-button");
    removeAllByClass("report-button");
    removeAllByClass("reply-button");
    removeAllByClass("hide-button");
    removeOneByClass("subscribe-button");
}

function removeArrows() {
    removeAllByClass("arrow");
    removeAllByClass("rank");
    removeAllByClass("midcol");
}

function removeSubmits() {
    removeAllByClass("submit");
}

(function() {
    removeWelcomeToReddit();
    removeAddToDiscussion();
    removeReadNext();
    removeGoldvertisement();
    removeLogin();
    removeFooter();
    removeButtons();
    removeArrows();
    removeSubmits();
})();
