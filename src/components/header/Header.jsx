// import User from "../user/User"
import React from 'react';
import User from '../user/User';

const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">ProductSite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">All Products</a>
              </li>
              <User/>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header