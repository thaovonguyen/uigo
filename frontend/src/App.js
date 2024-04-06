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
import MiniHomepage from './components/miniHomepage';
import Navbar from './Navbar';

function DefaultContainer() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/hehe" element={<MiniHomepage prime="#3C1518" secondary="#FFF94F" sup1="#69140E" sup2="#A44200" sup3="#D58936"/>} />
      </Routes>
    </Router>
  );
}

export default App;
