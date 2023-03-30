(function () {
    pagination( isInfinite = false);
})();

/* Responsive video in post content */
(function () {
    const sources = [
        '.verdin-content iframe[src*="youtube.com"]',
        '.verdin-content iframe[src*="youtube-nocookie.com"]',
        '.verdin-content iframe[src*="player.vimeo.com"]',
        '.verdin-content iframe[src*="kickstarter.com"][src*="video.html"]',
        '.verdin-content object',
        '.verdin-content embed',
    ];
    reframe(document.querySelectorAll(sources.join(',')));
})();


/* Mobile menu burger toggle */
(function () {
    var head = document.querySelector('.gh-head');
    var burger = head.querySelector('.gh-burger');
    if (!burger) return;

    burger.addEventListener('click', function () {
        if (!head.classList.contains('is-head-open')) {
            head.classList.add('is-head-open');
        } else {
            head.classList.remove('is-head-open');
        }
    });
})();