import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet 
} from "react-router-dom";

import Homepage from './pages/Homepage';
import WelcomePage from './pages/welcome';
import ColorGenPage from './pages/ColorGen.js';
import FontGenPage from './pages/FontGen.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/welcomepage" element={<WelcomePage/>} />
          {/* <Route path="/welcomepage" element={<WelcomePage/>}/> */}
        <Route path="/fontgen" element={<FontGenPage/>} />
        <Route path="/colorgen" element={<ColorGenPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
