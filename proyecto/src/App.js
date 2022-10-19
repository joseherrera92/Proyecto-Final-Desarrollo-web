import './App.css';
import Titulo from './componentes/Titulo'
import Barra_Navegacion from './componentes/Barra_Navegacion';
import Novedades from './componentes/Novedades';
import Reglamentos from './componentes/Reglamentos';
import Pie_Pagina from './componentes/Pie_Pagina';

function App() {
  return (
    <div className="App">
      <Titulo />
      <Barra_Navegacion />
      <Novedades />
      <Reglamentos />
      <Pie_Pagina />


    </div>
  );
}

export default App;
