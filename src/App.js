import NavBar from './components/NavBar.jsx';
import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Mirá qué Cuadros!" />
    </div>
  );
}

export default App;

