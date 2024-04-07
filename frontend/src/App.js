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
import LayoutSample from './pages/LayoutSample';
import ColorGenPage from './pages/ColorGen';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/"  element={<LayoutSample  prime="#FFF94A" secondary="blue" sup1="green" sup2="red" sup3="blue"/>} /> */}
        {/* <Route exact path="/"  element={<Homepage />} /> 
        <Route path="/welcomepage" element={<WelcomePage/>} />
          {/* <Route path="/welcomepage" element={<WelcomePage/>}/> */}
        <Route exact path="/"  element={<Homepage />} /> 
        {/* <Route exact path="/gen" element={<ColorGenPage/>} />
        <Route path="/layout" element={<LayoutSample/>} /> */}
      </Routes>
      
    </Router>
  );
}

export default App;
