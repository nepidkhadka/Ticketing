import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setmovies] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setmovies(data.results));
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);

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
    <div className="bg-[#13131a] h-full">
      <div className="container py-10 mx-auto">
        <div className="flex gap-16 items-center justify-center flex-wrap">
          {movies.slice(0, 10).map((movie, i) => (
            <div key={i} className="h-90 w-60">
              <div className="poster">
                <img
                  className="h-full w-full rounded-lg"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="details text-white text-center mt-2">
                <h2 className=" text-xl font-bold">{movie.original_title}</h2>
                {/* <p className=" font-extralight">{movie.overview.slice(0,60)+"..."}</p> */}
                <p className="font-semibold">
                  {movie.release_date} ● {movie.original_language.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
