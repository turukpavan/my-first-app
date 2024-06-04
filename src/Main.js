import React from 'react'
import './main.css';
function Main() {
  return (
    <section className="main-banner">
        <div className='hero w-75  border border-2 position-absolute '>
          
          <div className="card position-absolute bg-transparent text-light " style={{width:"28rem"}}>
  <div class="card-body text-start">
  <button type="button" class="button btn-1 " id="btn-3">Request Demo</button>
    <h5 class="card-title fs-1 fw-bolder ">With Scholar<br/> Teachers,<br/>Everything is <br/> easier</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="button btn-1 ">Request Demo</button>
    <button type="button" class="button btn-2"><i class="ri-play-large-fill"></i></button>
    <span>What's Scholar</span>
  </div>

          </div>
        <img className='' src="/banner-item-01.jpg" alt="Girl in a jacket">
        </img>
         
        </div>

    </section>
  )
}

export default Main