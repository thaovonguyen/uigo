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
import MiniHomepage1 from './components/minihomepage1';
import MiniContactpage from './components/miniContactpage';
import MiniFeature from './components/miniFeature';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<MiniFeature prime="#FFF94A" secondary="blue" sup1="green" sup2="red" sup3="blue"/>} />
        {/* <Route exact path="/"  element={<Homepage />} /> 
        <Route path="/welcomepage" element={<WelcomePage/>} />
        <Route path="/homepage" element={<Homepage/>} /> */}
          {/* <Route path="/welcomepage" element={<WelcomePage/>}/> */}    
      </Routes>
      
    </Router>
  );
}

export default App;
