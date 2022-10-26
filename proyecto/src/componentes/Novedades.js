import react from 'react';
import styles from './css/Novedades.css';
import foto_federico from './Img/foto_federico.jpg';
import foto_banderin from './Img/foto_banderin.jpg';
import foto_arbitro from './Img/foto_arbitro.jpg';
import foto_bicho from './Img/elBicho.jpg';

const  Novedades = () => {
    return(
        <section className='Novedades'>
            <h1>NOVEDADES</h1> 
            <article className='novedad1'>
            <h2>El arbitro de futbol Federico Puerta no ve muy lejos la "B" profesional</h2> 
            <p>Federico es un arbitro que lleva incorporado en el colegio de arbitros de la AAA "" años.
            En los ultimos años a destacado bastante y por eso el no se ve lejos de alcanzar la B profesional del futbol profesional colombia, su disciplina y constacia lo a llevado hasta donde ahora.
            </p>
                <figure>
                    <a href="#">
                    <img className="federico" src={foto_federico} alt="foto_federico.jpg"/>
                    </a>
                </figure>
            </article>

            <article className='novedad2'>
            <h2>En el 2022 la academia de arbitros AAA cumple 13 años </h2> 
            <p>Asi es, este año la academia antioqueña de arbitros cumple 13 años al servicio del juzgamiento deportivo, ya lleva mucho timepo, cada dia aportando en el proceso de cada uno de los arbitros que perteneces a este colegio</p>
                <figure>
                    <a href="#">
                    <img className="banderin" src={foto_banderin} alt="foto_banderin.jpg"/>
                    </a>
                </figure>
            
            </article>

            <section className="news-feed" class="container">
              <section class = "news-block">
                 <div class="left-block">
                     <article>
                       <h1> el bicho se gano el mundial, siuuuuuuu </h1>
                       <p> y se lo dedica a su mejor amigo james david loaiza en medellin, que humildad la del bicho. </p>
                       <figure>
                           <img className='img' src={foto_bicho} alt ="./Img/elBicho.jpg"/>
                           <figcaption>
                           Por James Loaiza
                           </figcaption>
                        </figure>
                     </article>
                </div>
            <div class="right-block">right block</div>
        </section>
    </section>

            <article className='novedad3'>
            <h2>Academia </h2> 
            <p>A lo alrgo del timepo, esta academia fue cogiendo fuerza y logro conseguir torneos para mandar a sus diferentes arbitros a impartir justicia, y asi fue consiguiendo mas y mas, actualmente dirigen 6 torneos </p>
                <figure>
                    <a href="#">
                    <img className="arbitro" src={foto_arbitro} alt="foto_arbitro.jpg"/>
                    </a>
                </figure>
            </article>
            
        </section>
    );
}

export default Novedades;