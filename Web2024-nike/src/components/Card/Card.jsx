import React from "react";
import "./Card.css"
import hero from '../assets/hijab.jpeg'
import hero2 from '../assets/run.jpeg'
import hero3 from '../assets/group.jpeg'
import hero4 from '../assets/desert.jpeg'
import hero5 from '../assets/girls.jpeg'


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);




export function Card(){
    return(
    

  <body>
    <div className="container">
        <h2 className="title">Lo mejor y lo mas nuevo </h2>
      <div class="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded">
          chevron_left
        </button>
        <ul className="image-list">
            <div>
            <img className="image-item" src={hero} alt="img-1" />
            <h2>  Nike V2K Running   </h2>
            </div>
            <div>
            <img class="image-item" src={hero2} alt="img-1" />
            <h2> Equipacion de Running       </h2>
            </div>
            <div>
            <img class="image-item" src={hero3} alt="img-1" />
            <h2>Air Max</h2>
            </div>
            <div>
            <img class="image-item" src={hero4} alt="img-1" />
            <h2>Superventas</h2>
            </div>
            <div>
            <img class="image-item" src={hero5} alt="img-1" />
            <h2>Basicos de Fitness</h2>
            </div>





          
        </ul>
        <button id="next-slide" class="slide-button material-symbols-rounded">
          chevron_right
        </button>
      </div>
      <div class="slider-scrollbar">
        <div class="scrollbar-track">
          <div class="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  </body>

   



    )


}