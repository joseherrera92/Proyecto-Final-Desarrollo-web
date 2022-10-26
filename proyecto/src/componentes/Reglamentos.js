import react from 'react';
import styles from "./css/Reglamentos.css"

const Reglamentos = () => {
    return(
        <div  className='color'>
        <section className='reglamentos'>
            <article className='reglamento-liga'>

                <h2> Reglamento liga</h2>

                <h3> reglamentos de la liga</h3>
                <p>
                 <p> -Tener un premio para el ganador</p>
                 <p> -Tener muchos estadios para los partidos</p>
                 <p> -Ser justos con todos los equipos</p>
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
            
            <article className='reglamento-jugador'>
                 <h2> Reglamento jugador</h2>
                 <h3> Reglamento para el jugador</h3>
                <p>
                 <p> -Llevar la indumentaria</p>
                 <p> -Llevar 5mil para el albitraje </p>
                 <p> -Llevar publico para que los aliente</p>
                 <p> -Hacerle caso al tecnico </p>
                </p>
            </article>
                
            <article className='regalemnto-aficion'>
                 <h2> Reglamento para la aficion </h2>
                 <h3> Reglamento para los aficionados</h3>
                <p>
                 <p> -Alentar todo el partido a su equipo</p>
                 <p> -No abandonar el equipo</p>
                 <p> -Llegar temprano al estadio </p>
                 <p> -No faltarle al respeto a ninguno de la aficion</p>
                </p>
            </article>
        </section>
        </div>
    );
}

export default Reglamentos;