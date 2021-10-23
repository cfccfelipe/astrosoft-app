import CardProject from '../components/CardProject.jsx';
import { useQuery } from '@apollo/client';
import { GET_ALL_PROYECTS } from '../gql/querysGql';
import { Link } from 'react-router-dom';

export const Projects = () => {
	const { data, loading, error } = useQuery(GET_ALL_PROYECTS);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
	return (
		<div className='ProjectsContainer'>
			<div className='row'>
				<h1> Elije un proyecto para empezar </h1>
			</div>
			<div className='Menu'>
				<Link to="/newproject">
					<button type="button" className="btn mx-5">Adicionar Proyecto</button>
				</Link>
				
				<form class="d-flex">
					<input class="form-control" type="search" placeholder="Nombre proyecto" aria-label="Search"/>
					<button className="btn" type="submit">Buscar</button>
				</form>
	
			</div>
			<div className='row'>
				{loading ? 'Loading':
				(data?.getAllProyects.map((element, index) => {
							return (
								<div key={index} className='col-4'>
									<CardProject project={element} />
								</div>

							);
					}))}
			</div>
		</div>
		
	);
				
};
