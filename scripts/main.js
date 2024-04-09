window.addEventListener("load", () => {
  const navBarHeight = document.querySelector(".NavBarContainer").offsetHeight;
  const content = document.querySelector(".Content");
  content.style.marginTop = navBarHeight + "px";
});

function renderMovieData(movieData) {
  //Rendering New Movie

  movieData.map((movie, index) => {
    //Rendering New MovieCard
    const newMovie = document.createElement("div");

    newMovie.classList.add("MovieCardContainer");
    newMovie.id = "movie_" + index;
    //Rendering New MovieCardThumbnail

    const newMovieThumbnail = document.createElement("div");
    newMovieThumbnail.classList.add("MovieCardThumbnailContainer");

    newMovie.appendChild(newMovieThumbnail);

    //Rendering New MovieCardInfoContainer
    const newMovieInfo = document.createElement("div");
    newMovieInfo.classList.add("MovieInfoContainer");

    //Rendering New MovieCardInfoTitleContainer
    const newMovieInfoTitleContainer = document.createElement("div");
    newMovieInfoTitleContainer.classList.add("MovieInfoTitleContainer");
    newMovieInfoTitleContainer.textContent = movie.movie_name;

    newMovieInfo.appendChild(newMovieInfoTitleContainer);

    //Rendering New MovieCardInfoReleaseYearContainer
    const newMovieInfoYearContainer = document.createElement("div");
    newMovieInfoYearContainer.classList.add("MovieInfoYearContainer");
    newMovieInfoYearContainer.textContent = movie.release_year;

    newMovieInfo.appendChild(newMovieInfoYearContainer);

    //Rendering New MovieCardInfoRating
    const newMovieInfoRatingContainer = document.createElement("div");
    newMovieInfoRatingContainer.classList.add("MovieInfoRatingContainer");

    newMovieInfoRatingContainer.textContent = movie.rating;

    newMovieInfo.appendChild(newMovieInfoRatingContainer);

    newMovie.appendChild(newMovieInfo);

    document.querySelector(".OutputContainer").appendChild(newMovie);
  });
}

renderMovieData(totalMovieData);
