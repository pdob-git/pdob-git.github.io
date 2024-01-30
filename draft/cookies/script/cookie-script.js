function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const setCookieButton = document.querySelector("#set-cookie");
if (setCookieButton) {
    setCookieButton.addEventListener("click", () => {
    console.log(setCookieButton);

    setCookie("cookieAllowed","CAllowedPerf",730);
  });
};

const showCookie = document.querySelector("#show-cookie");

if (showCookie) {
  showCookie.addEventListener("click", () => {
    console.log(showCookie);
    let cookieValue = getCookie("cookieAllowed");
    let message = "cookieAllowed value " + cookieValue;
    console.log(message);
    alert(message);
  });
};

console.log("Loaded");


