import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../apis/movieApi'
import { APIkey } from '../../apis/MovieApiKey'

function Home() {
  const movieSearch = "drive"
  useEffect(() => {
    const fetchMovies = async () => {

      try {
        const response = await movieApi.get(
          `?apiKey=${APIkey}&s=${movieSearch}&type=movie`
        )
        console.log("The response from API ", response);
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