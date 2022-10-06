//toggle show email
var showEmail = false;

document.getElementById("urlTabEmail").onclick = function () {
  if (showEmail == false) {
    showEmail = true;
    document.getElementById("urlTabEmail").innerHTML = "hide e-mail";
    document.getElementById("showEmailText").style.display = "inherit";
    document.getElementById("showEmailText").innerHTML = "jonaumusic@gmail.com";
  } else {
    showEmail = false;
    document.getElementById("urlTabEmail").innerHTML = "show e-mail";
    document.getElementById("showEmailText").style.display = "none";
    document.getElementById("showEmailText").innerHTML = null;
  }
};

document.getElementById("showEmailText").onclick = function () {
  if (showEmail == true) {
    window.location.href = "mailto:jonaumusic@gmail.com";
  }
};

//urlTab input links
document.getElementById("urlTabHome").onclick = function () {
  window.open("/index.html", "_self");
};
