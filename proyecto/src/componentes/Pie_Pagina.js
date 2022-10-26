import react from 'react';
import styles from './css/Pie_Pagina.css'
import logoaaa from './Img/logoaaa.jpg'
import facebook from './Img/facebook.jpg'

const Pie_Pagina = () => {
    return(
        <footer id='Footer' class="pie-de-pagina">
        <section class="grupo-1">
            <article class="box">
                <figure>
                    <a href="#">
                    <img src={logoaaa} alt="logoaaa"/>
                    </a>
                </figure>
            </article>
            <section class="box">
                <h2>SOBRE NOSOTROS:</h2>
                <p> Formamos personas y luego árbitros.</p>
                <p> Queremos hacer parte de tu proceso formativo, Eligenos.</p>
                <p> Siempre dando lo mejor de nosotros, esperando lo mejor de cada uno de ustedes en este proceso.</p>
            </section>
            <section class="box">
                <h2>SIGUENOS:</h2>
                <section class="red-social">
                    <a href="https://www.facebook.com/antioquiacademia" class="fa fa-facebook"></a>
                </section>
            </section>

        </section>
        <section class="grupo-2">
            <small>&copy; 2022 <b>AAA</b> - Todos los derechos reservados</small>
        </section>
    </footer>
    );
}

export default Pie_Pagina;