import { Map, Marker, Popup, TileLayer } from 'leaflet';
import { Icon } from 'leaflet';
import './App.css';
import Menu from './components/Menu';
import MapView from './components/MapView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <content className="content">

        <Menu />
        <MapView />
      </content>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;