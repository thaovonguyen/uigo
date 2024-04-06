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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path='/' element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
