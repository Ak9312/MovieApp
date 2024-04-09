window.addEventListener("load", () => {
  const navBarHeight = document.querySelector(".NavBarContainer").offsetHeight;
  const content = document.querySelector(".Content");
  content.style.marginTop = navBarHeight + "px";
});
