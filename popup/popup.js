const hideRatings = document.getElementById('hide_ratings');
const hideReviews = document.getElementById('hide_reviews');
const hideFriend = document.getElementById('hide_friend');
const rel = document.querySelector('.reload');

chrome.storage.sync.get(['hideRatings', 'hideReviews', 'hideFriend'], (result) => {
    hideRatings.checked = result.hideRatings ?? true;
    hideReviews.checked = result.hideReviews ?? true;
    hideFriend.checked = result.hideFriend ?? true;
});

hideRatings.addEventListener('change', () => {
    chrome.storage.sync.set({ hideRatings: hideRatings.checked });
    rel.style.display = "block";
});

hideReviews.addEventListener('change', () => {
    chrome.storage.sync.set({ hideReviews: hideReviews.checked });
    rel.style.display = "block";
});

hideFriend.addEventListener('change', () => {
    chrome.storage.sync.set({ hideFriend: hideFriend.checked });
    rel.style.display = "block";
});