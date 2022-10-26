import react from 'react';
import styles from './css/Barra_Navegacion.css'

const Barra_Navegacion = () => {
    return(

        <nav className='menu'>
            <div clasName= 'titulo'>
                <h1> Academia Antioqueña de Arbitros</h1>
            </div>
                <div className='contenido'>
                    <a href="#Footer">Footer</a>
                    <a href="#Reglamentos">Reglamentos</a>
                    <a href="#Novedades">Novedades</a>
                </div>
        </nav>
    );

}

export default Barra_Navegacion;