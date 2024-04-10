window.addEventListener("load", () => {
  const navBarHeight = document.querySelector(".NavBarContainer").offsetHeight;
  const content = document.querySelector(".Content");
  content.style.marginTop = navBarHeight + "px";
});

function renderMovieData(movieData) {
  //Clearing Output Container
  const appContainer = document.querySelector(".AppContainer");
  const outputContainer = document.querySelector(".OutputContainer");
  appContainer.removeChild(outputContainer);

  const newOutputContainer = document.createElement("div");
  newOutputContainer.classList.add("OutputContainer");
  appContainer.appendChild(newOutputContainer);

  //Rendering New Movie

  movieData.map((movie, index) => {
    //Rendering New MovieCard
    const newMovie = document.createElement("div");

    newMovie.classList.add("MovieCardContainer");
    newMovie.id = "movie_" + index;
    //Rendering New MovieCardThumbnail

    const newMovieThumbnail = document.createElement("div");

    //Rendering Unique Movie Image for Each Movie
    const moviePoster = document.createElement("img");

    moviePoster.src = "images/" + movie.thumbnail_img;
    moviePoster.alt = "movie_" + index;

    newMovieThumbnail.appendChild(moviePoster);
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

    newMovieInfoYearContainer.textContent = "(" + movie.release_year + ")";

    newMovieInfo.appendChild(newMovieInfoYearContainer);

    //Rendering New MovieCardInfoRating
    const newMovieInfoRatingContainer = document.createElement("div");
    //  Rendering Star Icon
    const starIconContainer = document.createElement("div");
    const starIcon = document.createElement("i");
    starIcon.classList.add("fa-solid", "fa-star");
    starIconContainer.appendChild(starIcon);
    //  Rendering Movie Rating Value
    const movieRatingValue = document.createElement("div");
    movieRatingValue.textContent = movie.rating;

    // Append  Star Icon and Movie Rating Value to newMovieInfoRatingContainer
    newMovieInfoRatingContainer.appendChild(starIconContainer);
    newMovieInfoRatingContainer.appendChild(movieRatingValue);

    newMovieInfoRatingContainer.classList.add("MovieInfoRatingContainer");

    newMovieInfo.appendChild(newMovieInfoRatingContainer);

    newMovie.appendChild(newMovieInfo);

    document.querySelector(".OutputContainer").appendChild(newMovie);
  });
}

renderMovieData(totalMovieData);
