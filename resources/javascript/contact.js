//toggle show email
let showEmail = false;
let tabEmail = document.getElementById("urlTabEmail");

tabEmail.onclick = function () {
  if (showEmail == false) {
    showEmail = true;
    tabEmail.innerHTML = "jonaumusic@gmail.com";
  } else {
    window.location.href = "mailto:jonaumusic@gmail.com";
  }
};
