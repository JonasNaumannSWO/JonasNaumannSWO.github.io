//toggle show email
var showEmail = false;

document.getElementById("urlTabEmail").onclick = function () {
  if (showEmail == false) {
    showEmail = true;
    document.getElementById("urlTabEmail").innerHTML = "jonaumusic@gmail.com";
  } else {
    window.location.href = "mailto:jonaumusic@gmail.com";
  }
};

//urlTab input links
document.getElementById("urlTabHome").onclick = function () {
  window.open("/index.html", "_self");
};
