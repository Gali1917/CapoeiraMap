import { MapContainer, Marker, Popup, TileLayer } from 'leaflet';
import { Icon } from 'leaflet';
import './App.css';
import Menu from './pages/IndexPage/Menu';
import MapView from './pages/IndexPage/MapView';
import NuevoPin from './pages/pines/NuevoPin';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
      <header>
        <h1>
          ENCUENTRA TU CAPOEIRA DONDE ESTES!
        </h1>
      </header>
      <main>
        <Link to="/nuevo-pin">Nuevo Marcador</Link>
        <Routes>
          <Route path="/" element={<Menu />}/>
          {/* <Route path="/" element={<MapView />}/> */}
          <Route path="/nuevo-pin" element={<NuevoPin/>}/>
        </Routes>
        <MapView/>
      </main>
      <footer>
        <p>
          2023
        </p>
      </footer>
    </div>
  );
}

export default App;