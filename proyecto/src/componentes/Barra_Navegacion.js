import react from 'react';
import styles from './css/Barra_Navegacion.css'

const Barra_Navegacion = () => {
    return(
        <nav className='menu'>
            <div clasName= 'titulo'>
                <h1> Academia Antioqueña de Arbitros</h1>
            </div>
                <div className='contenido'>
                    <a href="">Novedades</a>
                    <a href="">Reglamentos</a>
                    <a href="">Footer</a>
                </div>
        </nav>
    );

}

export default Barra_Navegacion;