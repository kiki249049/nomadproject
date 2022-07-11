import Movie from "../components/Movie.js"
import { useState, useEffect } from 'react';
import styles from './Home.module.css'

function Home() {
  const URL = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const json = await( await fetch(
      URL
    )).json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies)
  return (
    <div>
      <div className={styles.container}>
        {loading ? <h1>Loading...</h1> : <div className={styles.movies}>
          {movies.map((movie) => 
          <Movie 
          id={movie.id} 
          key={movie.id} 
          medium_cover_image={movie.medium_cover_image}
          year={movie.year} 
          title={movie.title} 
          genres={movie.genres} 
          summary={movie.summary} />)}
        </div>
        }
      </div>
    </div>
  )
}

export default Home;