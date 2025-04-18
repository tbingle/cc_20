import React, {useState} from 'React';
import Gallery from './components/Gallery';
import './styles/styles.css';

//Root component of the app
function App() {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);

  //Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour Comparison App</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;