// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';

import Home from './components/Home'

const App = () => (
    <Router>
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/projects' Component={Projects} />
            <Route exact path='/about' Component={About} />
            <Route exact path='/contacts' Component={Contacts} />
        </Routes>
    </Router>
)

export default App;
