const anchorLinks = document.querySelectorAll('a[href^="#"]'); // Select all hash links

for (let item of anchorLinks) { // Loop through each link
    item.addEventListener('click', function (e) {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        history.pushState(null, null, hashval); // Change the URL hash
        e.preventDefault();
    });
}