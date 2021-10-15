import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Dashboard } from '../pages/Dashboard';
import Home from '../pages/Home';
import { Projects } from '../pages/Projects';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/projects' component={Projects} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default AppRouter;
