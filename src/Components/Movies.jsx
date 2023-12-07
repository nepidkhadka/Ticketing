import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  //UseState for Movie Data & Loading
  const [movies, setmovies] = useState();
  const [loading, setloading] = useState(true);

  //SideEffects for Fetching API Data & To Set Loading Value To False
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setmovies(data.results));
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);

  //Loading Animation
  if (loading)
    return (
      <div className="absolute left-2/4 top-1/2">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 text-white border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );

  return (
    <section>
      <div className="bg-[#13131a] h-full">
        <div className="container py-10 mx-auto">
          <div className="flex gap-4 sm:gap-16 items-center justify-center flex-wrap">
            {movies.slice(0, 10).map((movie, i) => (
              <div key={i} className="moviebox max-w-[240px]">
                <Link to={`/movie/${movie.id}`}>
                  <div className="poster rounded-lg h-[340px] w-[240px] relative">
                    <img
                      className="h-full w-full rounded-lg"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                    <div className="absolute top-4 right-4 bg-[#1c3246] rounded-md text-white text-center">
                      <p className="text-sm font-medium px-4 py-2">Movies</p>
                    </div>
                  </div>
                </Link>

                <div className="details text-white text-center mt-2">
                  <h2 className=" text-xl font-bold">
                    {movie.original_title.slice(0, 20)}
                  </h2>
                  {/* <p className=" font-extralight">{movie.overview.slice(0,60)+"..."}</p> */}
                  <p className="font-semibold">
                    {movie.release_date} ●{" "}
                    {movie.original_language.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
