import React from 'react'
import DIGT from './Images/DIGT.png';
import './Header.css'
import AQSD from './Images/AQSD.jpg'
import NEZ from './Images/NEZ.png';
import NESS from './Images/NESS.png';
import FLEX from './Images/FLEX.png'
import VAVA from './Images/VAVA.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">Accueil</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              {/* <Link to="/Portfollio" className="lien">à propos</Link> */}
            </li>
          </ul>
          <span class="navbar-text">
            <img src={DIGT} />
          </span>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row">
        </div>
      </div>
      <div class="container-fluid" >
        <div class="row">
          <div class="col-sm-12">
            <img src={AQSD} />
          </div>
        </div>
      </div>
      <div class="container mt-5" id='carr'>
        <p id='gros'> <strong>PROJETS</strong>  </p> 
        <div class="row mt-5">
          <div class="col-sm-6">
            <div class="card" >
            <img  src={NEZ}class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">ANIMATION MOTION DESIGN</h5>
              <p class="card-text">Projet motion design realiser avec After effect </p>
              <a href="https://drive.google.com/drive/u/0/folders/1L36RrS5WL_Oh1zSj45MOxRBniesI6Ia6" target="_blank" class="btn btn-primary">Go to the site</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6" >
          <div class="card">
            <img  src= {NESS} class="card-img-top" alt="..." />
            <div class="card-body ">
              <h5 class="card-title">PROJET BOOTSRAP</h5>
              <p class="card-text"></p>
              <a href="https://github.com/Levixxxxxxxx/PROJECTS" target="_blank" class="btn btn-primary">Go to the site</a>
            </div>
          </div>

        </div>
        <div class="col-sm-6">
          <div class="card">
      <img src= {FLEX} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">PROJET FLEXBOX</h5>
            <p class="card-text"></p>
            <a href="https://github.com/Levixxxxxxxx/FLEXBOX" target="_blank" class="btn btn-primary">Go to the site </a>
          </div>
        </div>

      </div>
      <div class="col-sm-6">
        <div class="card" >
          <img src={VAVA} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">PROJET VAVAVOUM</h5>
            <p class="card-text"></p>
            <a href="https://drive.google.com/drive/u/0/folders/1JX7vB3ZhM-Ru2JHS-zp6PUI5JURe-APb" target="_blank" class="btn btn-primary">Go to the site</a>
          </div>
        </div>
      </div>
    </div>
</div >






    </div >
  )
}

export default Header
