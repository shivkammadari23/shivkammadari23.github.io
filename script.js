// Modal interaction controller
function openModal(id) {
  document.getElementById(id).style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal on outside click
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}
