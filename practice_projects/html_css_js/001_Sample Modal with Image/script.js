// JavaScript to handle opening and closing the modal

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-btn");
const openModalBtn = document.querySelector(".open-modal-btn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
