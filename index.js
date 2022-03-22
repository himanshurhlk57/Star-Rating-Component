const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');

for (let i = 0; i < stars.length; i++) {
    stars[i].starRating = i + 1;
    stars[i].addEventListener('click', eventHandler);
    stars[i].addEventListener('mouseover', eventHandler);
    stars[i].addEventListener('mouseout', eventHandler);
}

function eventHandler(event) {
    const starRating = this.starRating;
    if (event.type === 'click') {
        rating.innerHTML = `You rated this: ${starRating} stars`;
    }
    stars.forEach((star, index) => {
        if (event.type === 'click') {
            if (index < starRating) {
                star.classList.add('yellow');
            } else {
                star.classList.remove('yellow');
            }
        }
        if (event.type === 'mouseover') {
            if (index < starRating) {
                star.classList.add('light-yellow');
            } else {
                star.classList.remove('light-yellow');
            }
        }
        if (event.type === 'mouseout') {
            star.classList.remove('light-yellow');
        }
    });
}
