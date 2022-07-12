import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from './Context'
import { CartProvider,useCart } from 'react-use-cart'

const SaveMovie = () => {
  const { id } = useParams();
  // const { data } = useState([])
  const { movie } = useGlobalContext();
  // const { movies,isEmpty, totalUniqueMovies, removeMovie } = useCart()
  // if(isEmpty) return <h1 className='text-center'> Your movie List Empty</h1> 
  return (
    // <CartProvider>
    // <section className='py-4 container'>
    //   <div className='row justify-content-center'>
    //     <div className='col-12'>
    //       <h3>Movie List ({totalUniqueMovies})</h3>
    //       <table className='table table-light table-hover m-0'>
    //         <tbody>
    //         {
    //           data.map((data,imdbId) => {
    //             <tr key={imdbId}>
    //               <td>
    //                 <img src={data.Poster} style={{height: '10rem', width: '10rem'}}/>
    //               </td>
    //               <td>
    //                 {data.Title}
    //               </td>
    //               <td>
    //                 {data.imdbRating}
    //               </td>
    //             </tr>
    //           })
    //         }
    //         </tbody>
    //       </table>

    //     </div>

    //   </div>
    // </section>
    // </CartProvider>
    <>
      {movie.map((movie) => 
          <div>{movie.imdbID}</div>
      )}
    </>
  )
}

export default SaveMovie
