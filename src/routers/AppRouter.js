import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import { ProjectDetail } from '../pages/ProjectDetail';
import { Projects } from '../pages/Projects.jsx';
import { NewProject } from '../pages/NewProject';
import { NewMember } from '../pages/NewMember';
import { UpdateProject } from '../pages/UpdateProject';
import { UpdateProgress } from '../pages/UpdateProgress';
import { Users } from '../pages/Users';
import { UserDetail } from '../pages/UserDetail';
import { EditUser } from '../pages/EditUser';
import { NewUser } from '../pages/NewUser';

const AppRouter = () => {
	return (
		<Router>
				<div>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/projects' component={Projects} />
							<Route exact path='/users' component={Users} />
							<Route exact path='/newproject' component={NewProject} />
							<Route exact path='/project/:id' component={ProjectDetail} />
							<Route exact path='/user/:id' component={UserDetail} />
							<Route exact path='/newuser' component={NewUser} />
							<Route exact path='/edituser/:id' component={EditUser} />
							<Route exact path='/newmember/:id' component={NewMember} />
							<Route exact path='/updateproject/:id' component={UpdateProject} />
							<Route exact path='/updateprogress/:id' component={UpdateProgress} />
						</Switch>
					</div>
					<Footer />
				</div>
		</Router>
	);
};

export default AppRouter;
