import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Rocket from './Components/Rocket';
import Mission from './Components/Mission';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Mission />} />
          {/* <Route path="/profile" element={<Rocket />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
