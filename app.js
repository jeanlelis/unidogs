function handleSideBar() {
  let elementsToAddListener = document.querySelectorAll(".bar-icon");
  let sideBar = document.querySelector(".side-bar");
  let clicked = 0;

  elementsToAddListener.forEach((element) => {
    element.addEventListener("click", function () {
      clicked++;
      if (clicked % 2 != 0) {
        sideBar.classList.add("side-bar-open");
        sideBar.classList.remove("side-bar-collapsed");
      } else {
        sideBar.classList.remove("side-bar-open");
        sideBar.classList.add("side-bar-collapsed");
      }
    });
  });
}

handleSideBar();
