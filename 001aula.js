const btn = document.querySelector('.btn');

function activeButton() {
  this.classList.add('active');
}

btn.addEventListener('click', activeButton);
