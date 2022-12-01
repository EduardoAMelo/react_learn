import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages';
import About from './components/Pages/about';
import Contact from './components/Pages/contact';
import Garanties from './components/Pages/garanties';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/garanties' component={Garanties} />
	</Routes>
	</Router>
);
}

export default App;
