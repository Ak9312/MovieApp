// console.log(totalMovieData);

// totalMovieData.map((movie) => {
//   let img = document.createElement("img");
//   img.src = `./images/${movie.thumbnail_img}`;
//   img.style.height = "400px";
//   img.style.width = "300px";
//   body.appendChild(img);
// });

window.addEventListener("load", () => {
  const navBarHeight = document.querySelector(".NavBarContainer").offsetHeight;
  const content = document.querySelector(".Content");
  content.style.marginTop = navBarHeight + "px";
});
