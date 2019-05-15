/**
 * Removes the
 *     "Welcome to Reddit. Come for the cats, stay for the empathy. Become a
 *      Redditor and start exploring."
 * banner at the top of a Reddit page.
 */
function removeWelcomeToReddit() {
    removeOneByClass("listingsignupbar");
}

/**
 * Removes the
 *     "Want to add to the discussion? Post a comment! Create an account"
 * box at the top of the comments section of a Reddit page.
 */
function removeAddToDiscussion() {
    removeOneByClass("commentsignupbar");
}

/**
 * Removes the
 *     "discussions in r/*"
 * box at the bottom right of a Reddit page.
 */
function removeReadNext() {
    removeOneByClass("read-next");
}

/**
 * Removes the
 *     "Daily reddit gold goal
 *      (========--------) **%
 *      Help support reddit"
 * box at the right of the Reddit home page.
 */
function removeGoldvertisement() {
    removeOneByClass("goldvertisement");
}

/**
 * Removes the login box (that contains the "username" and "password" text
 * boxes, the "remember me" checkbox, and the "reset password" link) in the
 * sidebar of a Reddit page.
 */
function removeLogin() {
    removeOneById("login_login-main");
}

/**
 * Removes the section at the bottom of a Reddit page containing "about",
 * "help", "apps & tools", and "<3".
 */
function removeFooter() {
    removeOneByClass("footer-parent");
}

/**
 * Removes the "save", "report", "reply", and "hide" buttons at the bottom of
 * each submission and comment, and the "subscribe" button in the sidebar of a
 * Reddit page.
 */
function removeButtons() {
    removeAllByClass("save-button");
    removeAllByClass("report-button");
    removeAllByClass("reply-button");
    removeAllByClass("hide-button");
    removeOneByClass("subscribe-button");
}

/**
 * Removes all voting arrows from a Reddit page, and the "1", "2", "3", ...
 * numbers next to submissions listed on a subreddit page.
 */
function removeArrows() {
    removeAllByClass("arrow");
    removeAllByClass("rank");
    removeAllByClass("midcol");
}

/**
 * Removes the
 *     "Submit a new link"
 * and
 *     "Submit a new text post"
 * buttons in the sidebar of a Reddit page.
 */
function removeSubmits() {
    removeAllByClass("submit");
}

/**
 * The entry point of the content script.
 * Removes the Reddit page elements that are either useless advertisements or
 * correspond to functionality that is only enabled when signed in to Reddit.
 */
(function() {
    chrome.storage.sync.get(STORED_OPTIONS, removeElements);
})();

/**
 * Removes Reddit page elements according to the user's choices stored in
 * LocalStorage.
 * @param options   the object from LocalStorage storing the user's choices of
 * page elements to remove
 */
function removeElements(options) {
    if (options.removeAdvertisements) {
        removeWelcomeToReddit();
        removeAddToDiscussion();
        removeGoldvertisement();
    }

    if (options.removeReadNext) {
        removeReadNext();
    }

    if (options.removeLogin) {
        removeLogin();
    }

    if (options.removeFooter) {
        removeFooter();
    }

    if (options.removeButtons) {
        removeButtons();
    }

    if (options.removeArrows) {
        removeArrows();
    }

    if (options.removeSubmits) {
        removeSubmits();
    }
}
