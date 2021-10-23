import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import { ProjectDetail } from '../pages/ProjectDetail';
import { Projects } from '../pages/Projects.jsx';
import { NewProject } from '../pages/NewProject';
import { NewMember } from '../pages/NewMember';

const AppRouter = () => {
	return (
		<Router>
				<div>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/projects' component={Projects} />
							<Route exact path='/newproject' component={NewProject} />
							<Route exact path='/project/:id' component={ProjectDetail} />
							<Route exact path='/newmember/:id' component={NewMember} />
						</Switch>
					</div>
					<Footer />
				</div>
		</Router>
	);
};

export default AppRouter;
