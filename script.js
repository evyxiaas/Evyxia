function openPopup() {
  const popup = document.getElementById("loginPopup");
  const overlay = document.getElementById("popupOverlay");

  popup.classList.remove("fade-out");
  popup.style.display = "block";
  overlay.style.display = "block";
}

function exitPopup() {
  const popup = document.getElementById("loginPopup");
  const overlay = document.getElementById("popupOverlay");

  popup.classList.add("fade-out");

  setTimeout(() => {
    popup.style.display = "none";
    overlay.style.display = "none";
    popup.classList.remove("fade-out");
  }, 300); // match fade-out duration
}

function submitLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let redirectUrl = "loginfail.html";

  if (username === "Precious" && password === "catpower") {
    redirectUrl = "true.html";
  } else if (username === "Bestie" && password === "Jay") {
    redirectUrl = "RA\\bdayrhian.html";
  } else if (username === "Bar" && password === "Venti") {
    redirectUrl = "CJ\\bdaycj.html";
  }

  exitPopup();

  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 300); // wait for fade-out before redirect

}
