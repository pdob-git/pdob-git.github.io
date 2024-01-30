(function () {
    'use strict';

    const cookies = document.querySelector(".cookies");


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

      function hideCookies(){
        setCookie("cookieAllowed","true",730);
        let cookie =document.getElementById('cookie-div')
        cookie.style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded',()=> {
        let cookieValue = getCookie("cookieAllowed");
        if(cookieValue === 'true'){
            hideCookies();
        }

    });


   
    if(cookies){
        const closeButton = document.querySelector('button#close');
        const okButton = document.querySelector('button#ok');
        console.log(closeButton);
        console.log(okButton);
        
   
        
        closeButton.addEventListener('click',hideCookies);
        okButton.addEventListener('click',hideCookies);
    }

})();