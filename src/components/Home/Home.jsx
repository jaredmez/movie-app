import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../apis/movieApi'
import { APIkey } from '../../apis/MovieApiKey'
import { addMovies } from '../../features/movies/movieSlice';
import { useDispatch } from "react-redux"

function Home() {
  const movieSearch = "drive";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {

      try {
        const response = await movieApi.get(
          `?apiKey=${APIkey}&s=${movieSearch}&type=movie`
        )
        dispatch(addMovies(response.data));
      } catch (err) {
          console.log("Error: ", err);
      }
      
    };

    fetchMovies();
  }, [])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  )
}

export default Home;