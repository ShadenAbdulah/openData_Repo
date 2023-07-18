function alertFun() {
    window.alert('Sorry, we still working on this page.')
}

function shiftTaps(tapId, contentId) {
    let toNonActive = document.getElementsByClassName('activeTab');
    for (let i = 0; i < toNonActive.length; i++) {
        toNonActive[i].classList.replace('activeTab', 'nonactiveTab');
    }

    let toHidden = document.getElementsByClassName('content');
    for (let i = 0; i < toHidden.length; i++) {
        toHidden[i].classList.replace('block', 'hidden');
    }

    let toActive = document.getElementById(tapId);
    let content = document.getElementById(contentId);
    toActive.classList.replace('nonactiveTab', 'activeTab');
    content.classList.replace('hidden', 'block');
}

function rating(rate, text) {
    let rateStr = document.getElementById(text);
    rateStr.innerHTML = rate.toString();

    let stars = document.getElementsByClassName(text);
    for (let i = 0; i < rate; i++) {
        stars[i].classList.replace('text-gray-300','text-yellow-500');
    }
    for (let i = rate; i < stars.length; i++) {
        stars[i].classList.replace('text-yellow-500', 'text-gray-300');
    }
}
