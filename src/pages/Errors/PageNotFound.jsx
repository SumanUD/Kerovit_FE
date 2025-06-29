import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <section class="page_404">
        <div class="container">
            <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>                        
            </div>
                
            <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>            
                <p>the page you are looking for not avaible!</p>                
                <Link to="/" class="btn-primary-dark">Go to Home</Link>
            </div>
        </div>
    </section>
  )
}
