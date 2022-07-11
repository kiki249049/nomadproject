import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail(){
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState([true])
  const getMovies = async () => {
    const json = await ( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()
      console.log(json)
      setMovie(json.data.movie)
      setLoading(false)
  }
  console.log(movie)
  useEffect(() => {
    getMovies()
  },[])
  console.log(id)
  return <div>
    <h1>{ loading ? "loading..." : <h2 style={{ textAlign:"center", color:"tomato", margin:5 }}>{movie.title}</h2> }</h1>
    <hr></hr>
    <div style={{display:"flex",
        justifyContent:'center',
        alignContent:'center',
         }}>
      <img src={movie.medium_cover_image}/>
    </div>
    <hr></hr>
    <div>{movie.description_intro}</div>
    </div>
  
  
}

export default Detail;