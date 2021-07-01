const bookingModalForm = document.querySelector(".booking-modal-form");
const bookingForm = bookingModalForm.querySelector(".booking-form");
const bookingButtonModal = bookingModalForm.querySelector(".bookingModalForm");
const bookingFormDateIn = bookingModalForm.querySelector(".booking-form-date-in");
const bookingFormDateOut = bookingModalForm.querySelector(".booking-form-date-out");
const bookingFormDescriptionAdult = bookingModalForm.querySelector(".booking-form-description-adult");
const bookingFormDescriptionChildren = bookingModalForm.querySelector(".booking-form-description-children");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}

bookingButtonModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingForm.classList.toggle("modal-show");
  bookingForm.classList.toggle("booking-form");

  if (storage) {
    bookingFormDescriptionAdult.value = storage;
    bookingFormDescriptionChildren.focus();
  }
  else {
    bookingFormDescriptionAdult.focus();
  }

});

// bookingButtonModal.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   bookingForm.classList.remove("modal-show");
// })

bookingForm.addEventListener("submit", function (evt) {
  if (!bookingFormDescriptionAdult.value || !bookingFormDescriptionChildren.value) {
    evt.preventDefault();
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("adult", bookingFormDescriptionAdult.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (bookingForm.classList.contains("modal-show")) {
      evt.preventDefault();
      bookingForm.classList.remove("modal-show");
    }
  }
});
