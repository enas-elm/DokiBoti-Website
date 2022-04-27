// Show and hide a navbar depending on screen size
var sidebar = document.getElementById("sidebar");

function show() {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

function hide() {
  sidebar.style.display = "none";
}