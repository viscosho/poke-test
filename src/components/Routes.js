import React from 'react';
import logo from '../assets/pokeapi_logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import AllPoke from '../pages/AllPoke';
import GridPoke from '../pages/GridPoke';

const Routes = () => {
	return (
		<Router>
			<header className='App-header'>
				<Navbar expand='lg'>
					<Navbar.Brand href='/'>
						<img src={logo} alt='logo' width='100' />
					</Navbar.Brand>
					<Link to='/'>Browse by One</Link>
					<span> | </span>
					<Link to='/poke-grid'>Browse All</Link>
				</Navbar>
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={AllPoke} />
					<Route path='/poke-grid' component={GridPoke} />
				</Switch>
			</main>
		</Router>
	);
};

export default Routes;
