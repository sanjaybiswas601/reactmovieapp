import React, { useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL,useGlobalContext } from './Context';
import { useCart } from 'react-use-cart'

const Singlemovie = () => {
    const { id } = useParams();

    const [loading,setLoading,error,setError] = useState(true)
    const [movies,setMovies] = useState("")
    const getMovies = async(url) =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response=== "True"){
                setLoading(false)
                setMovies(data)
            }else{
                setError({
                    show: true,
                    msg: data.error
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`)
        },800)
        
        return() => clearTimeout(timerOut);

    }, [id])

    if(loading){
        return(
            <div className="movie-section">
            <div className='loading'> Loading....</div>

            </div>
        )
    }
    const handleState = () =>{
        return(
            // console.log(movies)

            setMovies()
        )
        
    }

  return (
      <>
        <section className="movie-section">
        <div className='movie-card'>
        <figure>
        <img src={movies.Poster} alt="" />
        </figure>

        <div className="card-content">   
        <p className="title">{movies.Title}</p>
        <p className="card-text">{movies.Released}</p>
        <p className="card-text">{movies.Genre}</p>
        <p className="card-text">{movies.imdbRating}</p>
        <p className="card-text">{movies.Country}</p>
        <form className="d-flex">
        <NavLink to="/" className="back-btn">Go Back</NavLink>
        {/* <NavLink to={`/savemovie`} key={id} className="back-btn" onClick={handleState}>Save</NavLink>   */}
        
        </form>
        </div>

        </div>

        </section>
    </>
  )
}

export default Singlemovie