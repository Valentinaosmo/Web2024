import React from "react"
import "./Footer.css"
export function Footer(){
    return(
        <footer>
            <div class="row">
                <div class="col-lg-auto">
                    <ul class="resaltado" id="visible">
                        <li ><a href="">TARJETAS DE REGALO</a></li>
                        <li><a href="">BUSCAR UNA TIENDA</a></li>
                        <li><a href="">NIKE JOURNAL</a></li>
                        <li><a href="">HAZTE MEMBER</a></li>
                        <li><a href="">DESCUENTO PARA ESTUDIANTES</a></li>
                        <li><a href="">TARJETAS DE REGALO</a></li>
                        <li><a href="">COMENTARIOSTARJETAS DE REGALO</a></li>
                        <li><a href="">CÓDIGOS PROMOCIONALES</a></li>
                        <li>&nbsp;</li>
                    </ul>
               </div>
                <div class="col-lg-auto invisible">
                    <ul>
                        <li class="resaltado">AYUDA</li>
                        <li><a href="">Estado del pedidoDE REGALO</a></li>
                        <li><a href="">Envíos y entregas</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Ayuda con los códigos promocionales de NikeDevoluciones</a></li>
                    </ul>
                </div>
                <div class="col-lg-auto invisible">
                    <ul>
                        <li class="resaltado">ACERCA DE NIKE</li>
                        <li><a href="">Novedades</a></li>
                        <li><a href="">Trabaja con nosotros</a></li>
                        <li><a href="">Inversores</a></li>
                        <li><a href="">Sostenibilidad</a></li>
                        <li><a href="">Proposito</a></li>
                    </ul>
                </div>
                <div class="col-lg-auto invisible" >
                    
                <div className="social-links">
                    <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f">&nbsp;</i>
                    </a>

                    <a href="https://twitter.com/">
                    <i className="fab fa-twitter">&nbsp;</i>
                    </a>

                    <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram">&nbsp;</i>
                    </a>

                    <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube">&nbsp;</i>
                    </a>

                    <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in">&nbsp;</i>
                    </a>

                    </div>
                </div>
            </div>

        </footer>
    )
    }

