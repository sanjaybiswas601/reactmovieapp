import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    
    const [show, setShow] = useState(false)
  return (
    <>
        <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">
    Movie collection
    </a>
    <button className="navbar-toggler" type="button"
     data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation"
      onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
      
      <form className="d-flex ms-auto mb-2 mb-lg-0">
             <NavLink className="btn btn-outline-success btn-style" type="submit" to="/savemovie">Save Movies</NavLink>
           </form>
      
      
    </div>
  </div>
</nav>
    </section>
    </>
  )
}

export default Navbar