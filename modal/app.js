// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const banner = document.querySelector(".banner")

modalBtn.addEventListener('click', function(){
  banner.style.display = 'none'
  modal.classList.add("open-modal")
})
closeBtn.addEventListener("click", function(){
  modal.classList.remove("open-modal")
  banner.style.display = 'block'
})