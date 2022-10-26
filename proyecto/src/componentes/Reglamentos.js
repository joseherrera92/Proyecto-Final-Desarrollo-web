import react from 'react';
import styles from "./css/Reglamentos.css"

const Reglamentos = () => {
    return(
        <section className='reglamentos'>
            <article className='reglamento-liga'>
                <></>
                <h2> Reglamento liga</h2>
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
            
            <article className='reglamento-salado'>
                 <h2> Reglamento salado</h2>
            </article>
                
            <article className='regalemnto-san-ignacio'>
                 <h2> Reglamento san ignacio</h2>
            </article>
        </section>
    );
}

export default Reglamentos;