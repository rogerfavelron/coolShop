import React from 'react';
import OnePiece from './Components/OnePiece';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar'


function App() {
  /*
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    const getFunction = async () => {
      const getCrews = await axios.get('http://localhost:8000/crews');
      let data = getCrews.data;
      let strawHats = data['straw-hat-pirates'];
      let redHairs = data['red-hair-pirates'];
      let beasts = data['beast-pirates'];
      let bigMoms = data['big-mom-pirates'];
      let whitebeards = data['whitebeard-pirates'];
      let rogers = data['roger-pirates'];

      let all = [...strawHats,...redHairs,...beasts,...bigMoms,...whitebeards,...rogers]
      console.log("crew ", getCrews.data['straw-hat-pirates']);
      setCrew(all);
    }
    getFunction()
  }, [])

*/
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="onepiece" element={<OnePiece />} />
      </Routes>
    </div>
  );
}

export default App;
