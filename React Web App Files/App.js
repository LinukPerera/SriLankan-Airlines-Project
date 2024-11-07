 import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/pages/Home'; 
import Monitor from './components/pages/Monitor'
import UserManual from './components/pages/UserManual';
import MaintenanceManual from './components/pages/MaintenanceManual';
import SignUp from './components/pages/Signup';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
    <Router> 
      <Navbar />
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/home' exact Component={Home}/>
          <Route path='/monitor' exact Component={Monitor}/>
          <Route path='/user-manual' exact Component={UserManual}/>
          <Route path='/maintenance-manual' exact Component={MaintenanceManual}/>
          <Route path='/sign-up' exact Component={SignUp}/> 
          <Route path='/contact' exact Component={Contact}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
