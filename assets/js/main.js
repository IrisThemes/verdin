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
