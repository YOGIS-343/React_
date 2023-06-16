import React from 'react'
import { NavLink } from 'react-router-dom'

const header = ({darkMode,setDarkMode}) => {
  const handleTheme = (e)=>{
    setDarkMode(!darkMode)
    e.target.innerText = darkMode ? "Dark" : "light"
  }
  return (
  //   <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ margin :"0px 0px",padding:"0px"}}>
  //   <div className="container-fluid" style={{backgroundColor:" #ffb500",padding:'1.6rem'}}>
  //     <a className="navbar-brand" href="#">Navbar</a>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <a className="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Link</a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             Dropdown
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li><a className="dropdown-item" href="#">Action</a></li>
  //             <li><a className="dropdown-item" href="#">Another action</a></li>
  //             <li><hr className="dropdown-divider"/></li>
  //             <li><a className="dropdown-item" href="#">Something else here</a></li>
  //           </ul>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link disabled">Disabled</a>
  //         </li>
  //       </ul>
  //       <form className="d-flex" role="search">
  //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  //         <button className="btn btn-outline-success" type="submit">Search</button>
  //       </form>
  //     </div>
  //   </div>
  // </nav>
     <nav  className={`mainnav ${darkMode ? "Darktheme": "Lighttheme"}`}>
       <div className='leftnav'>
         Logo
       </div>
       <div className="rightnav">
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/content"><ul>content</ul></NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Textconverter"><ul>Textconverter</ul></NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/User/12345"><ul>User</ul></NavLink>
           <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Products"><ul>Products</ul></NavLink>
           <ul>Content</ul>
         <div className="Con_button">
             <button  onClick = {handleTheme} className={`logo ${darkMode ? "Darktheme": "Lighttheme"}`}>Dark</button>
           </div>
      </div>
     </nav>
  )
}

export default header