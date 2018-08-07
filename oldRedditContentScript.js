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
}

function removeArrows() {
    removeAllByClass("arrow");
    removeAllByClass("rank");
    removeAllByClass("midcol");
}

function removeSubmits() {
    removeAllByClass("submit");
}

function collapseBlacklistedRedditors() {
    chrome.storage.sync.get({
        redditors: []
    }, function(items) {
        let redditors = items.redditors;
        collapseRedditors(new Set(redditors));
    });
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
    collapseBlacklistedRedditors();
})();
