import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Simulation from './Components/Simulation/Simulation'; 
import FloodAlerts from './Components/Alerts/FloodAlerts';
import Datasets from './Components/Datasets/Datasets';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Account from './Components/Account/Account';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/simulator" element={<Simulation />} />
        <Route path='/alerts' element={<FloodAlerts/>}/>
        <Route path='/datasets' element={<Datasets/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </Router>
  );
}

export default App;
