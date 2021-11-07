const toggle = document.querySelector('.toggle-theme input[type="checkbox"]');

function toggleTheme(event) {
  if (event.target.checked) {
    document.body.className = 'dark-theme';
  } else {
    document.body.className = '';
  }
}

function pay() {
    alert("You have successfully transacted the desired value.");
}

toggle.addEventListener('change', toggleTheme);
