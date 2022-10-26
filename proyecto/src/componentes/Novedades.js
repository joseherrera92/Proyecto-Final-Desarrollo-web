import react from 'react';
import styles from './css/Novedades.css';
import foto_federico from './Img/foto_federico.jpg';
import foto_banderin from './Img/foto_banderin.jpg';
import foto_arbitro from './Img/foto_arbitro.jpg';

const  Novedades = () => {
    return(
        <section className='Novedades'>
            <div className='contenedornovedades'>
            <h2>NOVEDADES</h2> 
            <article className='novedad1'>
            <h3>El arbitro de futbol Federico Puerta no ve muy lejos la "B" profesional</h3> 
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
            <h3>En el 2022 la academia de arbitros AAA cumple 13 años </h3> 
            <p>Asi es, este año la academia antioqueña de arbitros cumple 13 años al servicio del juzgamiento deportivo, ya lleva mucho timepo, cada dia aportando en el proceso de cada uno de los arbitros que perteneces a este colegio</p>
                <figure>
                    <a href="#">
                    <img className="banderin" src={foto_banderin} alt="foto_banderin.jpg"/>
                    </a>
                </figure>
            </article>

            <article className='novedad3'>
            <h3>Academia</h3> 
            <p>A lo alrgo del timepo, esta academia fue cogiendo fuerza y logro conseguir torneos para mandar a sus diferentes arbitros a impartir justicia, y asi fue consiguiendo mas y mas, actualmente dirigen 6 torneos </p>
                <figure>
                    <a href="#">
                    <img className="arbitro" src={foto_arbitro} alt="foto_arbitro.jpg"/>
                    </a>
                </figure>
            </article>
            </div>
        </section>
    );
}

export default Novedades;