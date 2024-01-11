(function () {
  "use strict";

  var recommendation = document.querySelector(".recommendation");
  var buttonHide = recommendation.getElementsByTagName("button").querySelector(".hidding");
  var isVisible = false;

  if (recommendation) {
    // Back to top button
    var goBackToTop = recommendation.querySelector(".message button");
    goBackToTop.addEventListener("click", function () {
      scrollToTop();
      return false;
    });

    // Hide
    document.addEventListener(
      "stillReading",
      function (elem) {
        if (isVisible) {
          recommendation.style.bottom = "-100%";
          isVisible = false;
        }
      },
      false
    );

    // Hide button
   
    // buttonHide.addEventListener("click", function () {
    //     if (isVisible && recommendation.style.display !== 'none') {
    //         recommendation.style.display = 'none';
    //         isVisible = false;
    //     }
    //     console.log("Hide button clicked");
    //   });

    // Show
    document.addEventListener(
      "finishedReading",
      function (elem) {
        if (!isVisible) {
          recommendation.style.bottom = "0%";
          // recommendation.style.display = block;
          isVisible = true;
        }
      },
      false
    );

    
  }

  var timeOut;
  function scrollToTop() {
    if (
      document.body.scrollTop != 0 ||
      document.documentElement.scrollTop != 0
    ) {
      window.scrollBy(0, -50);
      timeOut = setTimeout(scrollToTop, 10);
    } else clearTimeout(timeOut);
  }
})();
