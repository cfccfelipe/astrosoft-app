import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_PROYECTS } from '../gql/querysGql';
import { CardMember } from '../components/CardMember';
import { Link } from 'react-router-dom';
import { DELETE_MEMBER_ON_PROJECT, DELETE_PROJECT } from '../gql/mutationsGql';

export const ProjectDetail = () => {
	const { data, loading, error } = useQuery(GET_ALL_PROYECTS);
	const [deleteMemberOnProjectById, {data: deleteMember}]= useMutation(DELETE_MEMBER_ON_PROJECT);
	const [deleteProjectById, {data:deleteProject}]=useMutation(DELETE_PROJECT);
	const { id } = useParams();
	const project = loading ? 'Loading':data?.getAllProyects.filter((proj) => proj.id === id)[0];
	if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;

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
						<button type="button" class="btn"><Link to={`/updateproject/${project.id}`}>Actualizar Proyecto</Link></button>
						<button type="button" class="btn"><Link to={`/updateprogress/${project.id}`}>Cambiar Progreso</Link></button>
						<button type="button" class="btn"><Link to={`/newmember/${project.id}`}>Adicionar Miembro</Link></button>
						<button type="button" class="btn"
						onClick={e=>{
						e.preventDefault();
						deleteProjectById({
							variables:{
								project_id:id,  
								},
							});
						alert("Eliminado");
						setTimeout(window.location.reload(true),30000);
						}}
						><Link to={`/projects`}>Eliminar</Link></button>	
						<button type="button" class="btn"><Link to={`/projects`}>Volver</Link></button>
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
									<CardMember user={member} project={project.id} deleteMember={deleteMemberOnProjectById} />
								</div>
							);
					}))}
				</div>
			</div>
		
	);
};