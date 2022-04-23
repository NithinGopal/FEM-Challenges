const btnSubmit = document.querySelector('.btn-submit');
const btnRating = document.querySelectorAll('.btn-rating');

let customerRating;
btnRating.forEach(btn => {
    btn.addEventListener ('click', () => {
        return customerRating = btn.textContent;
    })
})

btnSubmit.addEventListener ('click', () => {
    let ratingSection = document.querySelector('.rating-card');
    let thankYouSection = document.querySelector('.thankYou-card');
    let cRating = document.querySelector('span');
    ratingSection.style.display = 'none';
    thankYouSection.style.display = 'flex';
    cRating.textContent = customerRating;
})