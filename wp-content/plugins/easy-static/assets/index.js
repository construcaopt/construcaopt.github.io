const anchorLinks = document.querySelectorAll('a[href^="#"]'); // Select all hash links

for (let item of anchorLinks) { // Loop through each link
    item.addEventListener('click', function (e) {
        let hashval = item.getAttribute('href');
        if(hashval && hashval.trim().length > 0 && hashval.trim() !== '#') {
            let target = document.querySelector(hashval);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            history.pushState(null, null, hashval);
            e.preventDefault();// Change the URL hash
        }
    });
}

const actual_button = document.querySelectorAll('.wp-block-uagb-modal a').item(0);
const modal_buttons = document.getElementsByClassName('open_astra_modal');
for(let modal_button of modal_buttons){
    modal_button.addEventListener('click',function(){
        actual_button.click();
    });
}