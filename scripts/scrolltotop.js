var scrollToTopBtn = document.querySelector(".scrolltop");
var rootElement = document.documentElement;

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.2) {
        // Show button
        scrollToTopBtn.classList.add("showtop");
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showtop");
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

