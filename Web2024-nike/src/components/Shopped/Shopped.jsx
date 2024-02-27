import { React } from "react"

export function Shopped (props) {
  const { url , title} = props
  return (
    <div className='serie-box'>
      <img src={url} />
      <h2 id='primeras'>{title}</h2>

    </div>
  )
}
