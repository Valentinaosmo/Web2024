import { Shoe } from './Shoes'
import './ShoesBox.css'
import { React } from "react"


export function ShoeBox ({ shoe, id }) {
  return (
    <>
      <h2 id='motivation'>Descubre nuestros Iconos</h2>

      <div className='shoeBox-container'>
        {
            shoe.map((shoe) => {
              return <Shoe
               url={shoe.url}
                key={shoe.id}
                button={shoe.button}
                 />
            })
          }
      </div>
    </>
  )
}
