import React from "react"
import "./Header.css"


const links = [
    {
        id: crypto.randomUUID(),
        text: "New & Features"
    },
    {
        id: crypto.randomUUID(),
        text: "Men"
    },
    {
        id: crypto.randomUUID(),
        text: "Women"
    },
    {
        id: crypto.randomUUID(),
        text: "Kids"
    },
    {
        id: crypto.randomUUID(),
        text: "Sale"
    },

]

console.log(links)


export function Header(){
    function prueba () {
        console.log('hola');
    }
    return(
        <header>

            <nav> 
                <ul>  <img  src="https://i.pinimg.com/originals/9d/0b/4b/9d0b4b9cbaba5226a76757b0e2e99367.png" alt="" className="logo" />
</ul> 
                <ul className="text">
               {
                    links.map(({ id, text}) => {
                        return (
                            <li key={id} onMouseEnter={prueba}>{text}</li>
                        )
                    })
                }

                </ul>

                <ul className="iconos">

                <form>

               
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            
      </form>
       
                <li><a href=""><svg id="favorite" xmlns="http://www.w3.org/2000/svg"  height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></a></li>
                    <li><a href=""><svg id="shop"   xmlns="http://www.w3.org/2000/svg"  height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg></a></li>

<li><a href=""><svg id="profile " xmlns="http://www.w3.org/2000/svg"  height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
</a></li>

                    <li><a href=""><svg id=" hamburguer-btn" xmlns="http://www.w3.org/2000/svg"  height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></a></li>


                </ul>
            </nav>



                    
                
        
        </header>
    )
    }






