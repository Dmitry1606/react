import bg from './bg.png';
import './styles.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trip House</h1>
        <div className='Title'>
          <h2>Stays</h2>
          <h3>Attractions</h3>
        </div>
        <h4>Discover stays to live, or just relax</h4>
        { <img src={bg} className='bg.png' alt='bg'></img> }
      </header>
    </div>
  );
}

export default App;

