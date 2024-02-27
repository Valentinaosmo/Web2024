import { React } from "react"


export function Shoe (props) {
  const { url , button} = props
  return (
    <div className='movie-box'>
      <img src={url} />
      <button>{button}</button>
    </div>
  )
}
