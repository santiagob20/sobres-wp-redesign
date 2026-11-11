(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var videos = document.querySelectorAll(".hero video");
  if (videos.length > 1) {
    var current = 0;
    videos.forEach(function (video, index) {
      video.addEventListener("ended", function () {
        if (index !== current) return;
        video.classList.remove("is-active");
        current = (index + 1) % videos.length;
        var next = videos[current];
        next.currentTime = 0;
        next.classList.add("is-active");
        next.play();
      });
    });
  }

})();
