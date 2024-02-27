import { Shopped } from './Shopped'
import './ShoppedBox.css'
import { React } from "react"


export function ShoppedBox ({ shopped, id }) {
  return (
    <>
      <h2 id='motivation'>Comprar por actividad</h2>
      <div className='shoppedBox-container'>
        {
            shopped.map((shopped) => {
              return <Shopped 
              url={shopped.url} 
              key={shopped.id} 
              title={shopped.title}

              
              />
            })
          }
      </div>
    </>
  )
}
