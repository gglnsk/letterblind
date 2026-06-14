let hideRatings = false;
let hideReviews = false;
let hideFriend = false;

function setVisibility(selector, visible) {
    const element = document.querySelector(selector);
    if (element) element.style.display = visible ? "" : "none";
}

chrome.storage.sync.get(['hideRatings', 'hideReviews', 'hideFriend'], (result) => {
    hideRatings = result.hideRatings ?? true;
    hideReviews = result.hideReviews ?? true;
    hideFriend = result.hideFriend ?? true;

    const loggedObserver = new MutationObserver(() => {
        const isLogged = document.getElementsByClassName("action -watch -on").length > 0;
        if (hideRatings) setVisibility("section.ratings-histogram-chart", isLogged);
        if (hideReviews) setVisibility("section.film-recent-reviews", isLogged);
        if (hideFriend) setVisibility("section.activity-from-friends", isLogged);
    });

    loggedObserver.observe(document.body, { childList: true, subtree: true, attributes: true });
});