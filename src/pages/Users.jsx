import CardProject from '../components/CardProject.jsx';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ALL_USERS } from '../gql/querysGql.js';
import { CardUser } from '../components/CardUser.jsx';

export const Users = () => {
	const { data, loading, error } = useQuery(GET_ALL_USERS);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
	return (
		<div className='ProjectsContainer'>
			<div className='row'>
				<h1> Estos son los usuarios activos </h1>
			</div>
			<div className='Menu'>
				<Link to="/newuser">
					<button type="button" className="btn mx-5">Adicionar Usuario</button>
				</Link>
				
				<form class="d-flex">
					<input class="form-control" type="search" placeholder="Nombre del usuario" aria-label="Search"/>
					<button className="btn" type="submit">Buscar</button>
				</form>
	
			</div>
			<div className='row'>
				{loading ? 'Loading':
				(data?.getAllUsers.map((element, index) => {
							return (
								<div key={index} className='col-4'>
									<CardUser user={element}/>
								</div>

							);
					}))}
			</div>
		</div>
		
	);
				
};
