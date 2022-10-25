import react from 'react';
import styles from "./css/Reglamentos.css"

const Reglamentos = () => {
    return(
        <section className='reglamentos'>
            <article className='reglamento-liga'>
                <></>
                <h2> Reglamento liga</h2>
                <h3> Reglamentos para las ligas competitivas</h3>
                <p>
                 <p> -todos los jugadores deben tener ropa deportiva</p>
                 <p> -Tener toda su indumentaria lista para el encuentro</p>
                 <p> -Llevar 5mil para el albitraje </p>
                 <p> -Llevar a la mamá para que lo aliente </p>
                </p>

            </article>

            <article className='reglamento-festival'>
                <h2> Reglamento festival</h2>
                <h3> Categoria SUB 7 y 8</h3>
                <p>
                 <p> TIEMPO JUGADO: 3 tiempos cada uno de quince minutos</p>
                 <p>NUMERO DE JUGADORES: 5</p>
                 <p> BALON: #3</p>
                 <p>  FIGURA DE LUGAR: no aplica</p>
                </p>


                <h3> Categoria Sub 9 y 10 </h3>
                <p>
                   <p> TIEMPO JUGADO: 3 tiempos de 20 minutos</p>
                   <p> NUMERO DE JUGADORES: 7</p>
                   <p> BALON: #3</p>
                   <p> FUERA DE LUGAR: no aplica</p>


                </p>


            </article>
            
            <article className='reglamento-aficionado'>
                 <h2> Reglamento de los aficionados</h2>
                 <h3> Reglamento para los que vayan a ver el encuentro deportivo</h3>
                <p>
                 <p> - No insultar a los participantes del encuentro</p>
                 <p>- llevar algo para animar al equipo que apoya</p>
                </p>
            </article>
                
            <article className='regalemnto-arbitro'>
                 <h2> Reglamento para el arbitro</h2>
                 <h3> Reglamento para el arbitro del partido </h3>
                <p>
                 <p> - Llevar ropa diferente a el de los jugadores</p>
                 <p> - Llevar chimba de silvato </p>
                 <p> - Ser justo para las personas </p>
                 <p> - Ser parchaito con le jente </p>
                </p>
            </article>
        </section>
    );
}

export default Reglamentos;