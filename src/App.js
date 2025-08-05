import './App.css';
import casaBranca from './assets/casaBranca.jpeg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <div>
        <img src={casaBranca} alt='Casa Branca' />
      </div>
      <ManageData />
      <ListRender />
    </div>
    
  );
}

export default App;
