let hideRatings = "0";
let hideReviews = "0";
let hideFriend = "0";

function setVisibility(selector, visible) {
    const element = document.querySelector(selector);
    if (element) element.style.display = visible ? "" : "none";
}

function visibilityHelper(attrib, element, logged, rated) {
    if (attrib === "0") {
        setVisibility(element, true);
    } else if (attrib === "1") {
        setVisibility(element, logged);
    } else if (attrib === "2") {
        setVisibility(element, rated);
    } else if (attrib === "3") {
        setVisibility(element, false);
    }
}

chrome.storage.sync.get(['hideRatings', 'hideReviews', 'hideFriend'], (result) => {
    hideRatings = result.hideRatings ?? "0";
    hideReviews = result.hideReviews ?? "0";
    hideFriend = result.hideFriend ?? "0";

    function applyVisibility() {
        const isLogged = document.getElementsByClassName("action -watch -on").length > 0;
        const isRated = document.querySelectorAll('[data-state="selected"]').length > 0;

        visibilityHelper(hideRatings, "section.ratings-histogram-chart", isLogged, isRated);
        visibilityHelper(hideReviews, "section.film-recent-reviews", isLogged, isRated);
        visibilityHelper(hideFriend, "section.activity-from-friends", isLogged, isRated);
    }

    const loggedObserver = new MutationObserver(applyVisibility);
    applyVisibility();
    loggedObserver.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
});