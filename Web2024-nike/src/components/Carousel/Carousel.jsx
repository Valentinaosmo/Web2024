import React from "react"
import { CAROUSEL } from "./CarouselData"


export function Carousel(props){

    return(

        <div className="carousel">
            {
                CAROUSEL.map(Card => {
                    return(
                        <div>
                        <div className='carousel-thumbnail' style={{backgroundImage: `url(${Card.bgImage})`, width: '100px', height: '100px'}}></div>

                       <p className='card-title'>{Card.text}</p>
                       <h1 className='tittle'>{props.text2}</h1>
                       <button className='buttom'>{Card.buttom}</button>
                       </div>

                    )
                })

            }

        </div>
    )
  }


