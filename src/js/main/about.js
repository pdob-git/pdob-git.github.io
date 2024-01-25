//Timeout based on https://css-tricks.com/forums/topic/javascript-problem-with-scroll-and-delay/
(function () {
  window.addEventListener("load", function () {
    let timeout;

    //Define heading for about page
    const element = this.document.getElementById("about-perfeton-blog");

    //If right address and elemnt exists do
    if (document.baseURI.includes("about") && element) {
      //Get y of element
      let y = element.getBoundingClientRect().top + window.scrollY;
      y = y - 60;
      console.log(y);

      function scrollToAboutHeading() {
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      }

      //Scroll to element
      clearTimeout(timeout);

      timeout = setTimeout(function () {
        scrollToAboutHeading();
      }, 3000);
    } else {
      return;
    }

    // this.window.removeEventListener("load");
  });
})();
