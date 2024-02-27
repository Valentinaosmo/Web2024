import React from "react"
import "./Body.css"
import hero from '../assets/hero.png'
//<div className="banner" style={{ backgroundImage: `url(${baner})`}}>
import { ShoppedBox } from '../Shopped/ShoppedBox'
import { MoviesBox } from '../Movies/MoviesBox'
import { MoviesData } from '../../Data/Moviesdata'
import { ShoeBox } from '../Shoes/ShoesBox'
import { ShoesData } from '../../Data/ShoesData'
import { ShoppedData } from '../../Data/ShoppedData'



const data =  ShoppedData
const data2 = MoviesData
const data3 = ShoesData

export function Body(){
    return( 
        
    <main>
      <div className="gratis ">
        <h3 id='comprar-nov'>Comprar Novedades</h3>
        <p>
        Comprar
        </p>
      </div>


       <div className="nike">
        <h3 id='coleccion'>Coleccion Nike Zenvy</h3>
        <h1 id="suave">SIENTE LA SUAVIDAD </h1>
        <h2 id="tejido"> El suave tejido InfinaSoft garantiza un ajuste envolvente y la máxima ligereza y comodidad.
        </h2>
        <button id="buy">Shop</button>
        </div>

        <div  >
                         <img id="hero" src={hero} alt="" />

        </div>
  


 <div id='container'>
 <ShoppedBox
        shopped={data}
      />
      <MoviesBox
        movies={data2}
      />
      <ShoeBox
        shoe={data3}
      />
   
      
        </div>
       


    </main>)

    
   
}