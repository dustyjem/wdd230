const images = document.querySelectorAll('img');
const options = {
    threshold: [0.5]
};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    img.src = source;
}
const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if (entry.idIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            console.log(entries);
        });
        console.log(entries);
    }, options
);
images.forEach(image => {
    io.observe(image);
});