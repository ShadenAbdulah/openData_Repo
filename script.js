function alertFun() {
    window.alert('Sorry, we still working on this page.')
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

function shiftTaps(tapId, contentId) {
    let toActive = document.getElementById(tapId);
    let content = document.getElementById(contentId);

    let toNonActive = document.getElementsByClassName('activeTab');
    for (let i = 0; i < toNonActive.length; i++)
        toNonActive[i].classList.remove('activeTab');
    toActive.classList.toggle('activeTab');

    let toHidden = document.getElementsByClassName('content');
    for (let i = 0; i < toHidden.length; i++)
        toHidden[i].classList.replace('block', 'hidden');
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

function filter() {
    let filter = document.getElementById('filter');
    filter.classList.toggle('activeFilter');

    let filterFields = document.getElementById('filter-fields');
    if (filterFields.classList.contains('hidden'))
        filterFields.classList.replace('hidden', 'block');
    else filterFields.classList.replace('block', 'hidden');
}