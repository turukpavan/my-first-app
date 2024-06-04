import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='w-50'>
        <nav className="navbar   navbar-expand-lg  bg-transparent mx-lg-5  position-absolute header sticky">
        <div className="container-fluid ">
          <a className="navbar-brand scholar text-light   fw-bolder fs-1" href="#a">Navbar</a>
          <form class="d-none d-md-flex ">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            
          </form>
          <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="ri-menu-line"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-evenly  mb-2 mb-lg-0 nav-links ">
              <li class="nav-item">
                <a className="nav-link px-3" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#teams">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#register-now">Register Now</a>
              </li>
             
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

 

export default Navbar