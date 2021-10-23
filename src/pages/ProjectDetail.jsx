import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_ALL_PROYECTS } from '../gql/querysGql';
import { CardMember } from '../components/CardMember';
import { Link } from 'react-router-dom';
export const ProjectDetail = () => {
	const { data, loading, error } = useQuery(GET_ALL_PROYECTS);
	const { id } = useParams();
	const project = loading ? 'Loading':data?.getAllProyects.filter((proj) => proj.id === id)[0];
	if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

	const getDate = (date) =>{
		let full = new Date(Number(date))
		let month = full.getMonth();
		let year = full.getFullYear();
		let day = full.getDay();
		return (`${day} ${month} ${year}`)
	}

	return (
		<div className='ProjectsContainer'>
				<h1> Proyecto: {project.name}</h1>
				<div className='Menu'>
					<div class="btn-group" >
						<button type="button" class="btn">Actualizar Proyecto</button>
						<Link to={`/newmember/${project.id}`}>
						  <button type="button" class="btn">Adicionar Miembro</button>
						</Link>
						<button type="button" class="btn">Eliminar Proyecto</button>
					</div>
				</div>
				<h3>Estadísticas</h3>
				<table class="table stadistics">
					<thead>
						<tr>
							<th> Creado</th>
							<th> Inicio</th>
							<th> Estado</th>
							<th> Progreso</th>
							<th> Finalizo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> {getDate(project.create_at)}</td>
							<td> {getDate(project.start_date)}</td>
							<td> {project.state}</td>
							<td>{project.progress}</td>
							<td> {getDate(project.end_date)}</td>

						</tr>

					</tbody>
				</table>
				<br/>
				<h3>Miembros</h3>
				<div className='row'>
					{loading ? 'Loading':
					(project.members.map((member, index) => {
							return (
								<div key={index} className='col-4'>
									<CardMember user={member.user_id} role={member.user_role} />
								</div>
							);
					}))}
				</div>
			</div>
		
	);
};