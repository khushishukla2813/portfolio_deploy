// Get the top position of an element in the document
const getTop = function(element, start) {
    if (element.nodeName === 'HTML') return -start;
    return element.getBoundingClientRect().top + start;
}

// Ease in-out function for smooth scrolling
const easeInOutCubic = function(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Calculate the scroll position
const position = function(start, end, elapsed, duration) {
    if (elapsed > duration) return end;
    return start + (end - start) * easeInOutCubic(elapsed / duration);
}

// Smooth scroll implementation
const smoothScroll = function(el, duration = 500, callback, context = window) {
    const start = context.scrollTop || window.pageYOffset;
    let end = typeof el === 'number' ? parseInt(el) - 60 : getTop(el, start) - 60;

    const clock = Date.now();
    const step = function() {
        const elapsed = Date.now() - clock;
        const scrollPosition = position(start, end, elapsed, duration);
        if (context !== window) {
            context.scrollTop = scrollPosition;
        } else {
            window.scroll(0, scrollPosition);
        }

        if (elapsed > duration) {
            if (typeof callback === 'function') callback(el);
        } else {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
                window.setTimeout(fn, 15);
            })(step);
        }
    };
    step();
}

export default url => {
    return new Promise((resolve, reject) => {
        const pattern = /^(\/#.+)|(.+(\/#.+))$/;
        const hash = pattern.exec(url)?.filter(Boolean)?.pop();
        if (hash) {
            const id = hash.replace(/\/?#/, '');
            const el = document.getElementById(id);
            if (el) {
                smoothScroll(el, 600, resolve);
                return;
            }
        }
        reject(new Error('Error: hash in URL is invalid or element not found!'));
    });
};
