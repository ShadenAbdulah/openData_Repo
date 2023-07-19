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
        stars[i].classList.replace('fill-gray-400','fill-amber-500');
    }
    for (let i = rate; i < stars.length; i++) {
        stars[i].classList.replace('fill-amber-500', 'fill-gray-400');
    }
}

let searchIcon = document.getElementById('searchIcon');
searchIcon.addEventListener('click', function () {
    let searchBar = document.getElementById('searchBar');
    if (searchBar.classList.contains('hidden'))
        searchBar.classList.replace('hidden', 'block');
    else  searchBar.classList.replace('block', 'hidden');
})

let lang = document.getElementById('lang');

lang.addEventListener('click', function () {
    if (lang.innerText === "EN") lang.innerText = "ع";
    else lang.innerText = "EN";
})