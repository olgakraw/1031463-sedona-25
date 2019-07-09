var link = document.querySelector(".button-hotels-search");

var popup = document.querySelector(".hotel-search-form");

var arrival = popup.querySelector(".form-input-date-arrival");
var departure = popup.querySelector(".form-input-date-departure");
var adults = popup.querySelector(".form-input-number-adults");
var children = popup.querySelector(".form-input-number-children");



link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function(evt) {
    if (!arrival.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});