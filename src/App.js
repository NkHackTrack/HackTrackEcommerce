import './App.css';
import IndustriesTab from './Components/IndustriesTab/IndustriesTab';
import Card from './Components/Card/Cards';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <IndustriesTab/>
        <Card/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
