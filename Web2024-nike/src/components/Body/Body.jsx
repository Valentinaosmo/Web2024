import React from "react"
import "./Body.css"
import hero from '../assets/hero.png'
import banner from '../assets/baner.jpg'
//<div className="banner" style={{ backgroundImage: `url(${baner})`}}>
import { Card } from "../Card/Card"
import { Carousel } from "../Carousel/Carousel"

export function Body(){
    return( 
        
    <main>
      <div className="gratis ">
        <h3 >Comprar Novedades</h3>
        <p>
        Comprar
        </p>
      </div>

      <div className="banner">
      <h3 id="invensible">Nike invincible</h3>
      <h1 id="novedades" >Consigue hasta un -25%</h1>
      <h3 id="text">Consigue descuentos en la tienda hasta de un 25% en productos seleccionados,valido hasta el 22 de febrero</h3>
      <div className="buttoms">
        <div>         <button id="shop-buttom">comprar</button>
</div>
<div>
<button id="promo">+ terminos de promocion</button>
</div>
        </div>
       

      </div>
       <div className="nike">
        <h3>Coleccion Nike Zenvy</h3>
        <h1 id="suave">SIENTE LA SUAVIDAD </h1>
        <h2 id="tejido"> El suave tejido InfinaSoft garantiza un ajuste envolvente y la máxima ligereza y comodidad.
        </h2>
        <button id="buy">Shop</button>
        </div>

        <div>
                         <img id="hero" src={hero} alt="" />

        </div>
   

 <div>
  Tendencias de la semana
  <Carousel text2='sjkasjaskj' />
 </div>
       
       


      



    </main>)

    
   
}