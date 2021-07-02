const bookingModalForm = document.querySelector(".booking-modal-form");
const bookingForm = bookingModalForm.querySelector(".booking-form");
const bookingButtonModal = bookingModalForm.querySelector(".booking-button-modal");
const bookingFormDateIn = bookingModalForm.querySelector(".booking-form-date-in");
const bookingFormDateOut = bookingModalForm.querySelector(".booking-form-date-out");

bookingButtonModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!bookingModalForm.open) {
    bookingModalForm.open = true;
    bookingFormDateIn.focus();
  } else {
    bookingModalForm.open = false;
    bookingModalForm.focus();
  }

});

bookingForm.addEventListener("submit", function (evt) {
  if (!bookingFormDateIn.value || !bookingFormDateOut.value) {
    evt.preventDefault();
    bookingForm.classList.add("submit-error");
    setTimeout(() => { bookingForm.classList.remove("submit-error") }, 600);
  }
});
