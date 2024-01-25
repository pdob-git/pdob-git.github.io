(function () {
    'use strict';

    const cookies = document.querySelector(".cookies");
    if(cookies){
        const closeButton = document.querySelector('button#close');
        const okButton = document.querySelector('button#ok');
        console.log(closeButton);
        console.log(okButton);
        
        function hideCookies(){
            let cookie =document.getElementById('cookie-div')
            cookie.style.display = 'none';
        }
        
        closeButton.addEventListener('click',hideCookies);
        okButton.addEventListener('click',hideCookies);
    }

})();