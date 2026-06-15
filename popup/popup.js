const hideRatings = document.querySelectorAll('input[name="hide_ratings"]') 
const hideReviews = document.querySelectorAll('input[name="hide_reviews"]') 
const hideFriend = document.querySelectorAll('input[name="hide_friend"]') 
const rel = document.querySelector('.reload');

chrome.storage.sync.get(['hideRatings', 'hideReviews', 'hideFriend'], (result) => {
    hideRatings.forEach(button => {
        if (button.value === result.hideRatings) button.checked = true;
    });
    hideReviews.forEach(button => {
        if (button.value === result.hideReviews) button.checked = true;
    });
    hideFriend.forEach(button => {
        if (button.value === result.hideFriend) button.checked = true;
    });
});

hideRatings.forEach(button => {
    button.addEventListener('change', () => {
        chrome.storage.sync.set({ hideRatings: button.value });
        rel.style.display = "block";
    });
});

hideReviews.forEach(button => {
    button.addEventListener('change', () => {
        chrome.storage.sync.set({ hideReviews: button.value });
        rel.style.display = "block";
    });
});

hideFriend.forEach(button => {
    button.addEventListener('change', () => {
        chrome.storage.sync.set({ hideFriend: button.value });
        rel.style.display = "block";
    });
});