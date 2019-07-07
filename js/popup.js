var link = document.querySelector(".button-hotels-search");

var popup = document.querySelector(".hotel-search-form");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});