// change website theme

let boxDiv = document.querySelectorAll(".boxn div");

if (window.localStorage.getItem("color")) {
  boxDiv.forEach((e) => {
    e.classList.remove("active");
    document
      .querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`)
      .classList.add("active");
  });
}

boxDiv.forEach((d) => {
  d.addEventListener("click", function (e) {
    boxDiv.forEach((f) => {
      f.classList.remove("active");
    });
    e.target.classList.add("active");
    window.localStorage.clear();
    window.localStorage.setItem("color", e.target.dataset.color);
    setTimeout(location.reload());
  });
});

document.documentElement.style.setProperty(
  "--main-color",
  `${window.localStorage.getItem("color")}`
);

//end change website theme

// query variable

// end query variable

//website theme bar
let themeClick = document.querySelector(".theme");
let boxn = document.querySelector(".boxn");
let fullScreen = window.matchMedia("(min-width: 768px)");
let mediumScreen = window.matchMedia("(max-width: 768px)");

themeClick.addEventListener("click", function () {
  if (fullScreen.matches) {
    if (boxn.style.left == "0px") {
      boxn.style.left = "-200px";
    } else {
      boxn.style.left = "0px";
    }
  } else if (mediumScreen.matches) {
    if (boxn.style.left == "20px") {
      boxn.style.left = "-200px";
    } else {
      boxn.style.left = "20px";
    }
  }
});
// end website theme bar
