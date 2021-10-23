import { Link } from 'react-router-dom';
const CardProject = ({ project}) => {
	return (
		<div className='card m-3 p-1 col-10'>
			<div className='card-header'>
				<h5>{project.name}</h5>
			</div>
			<div className='card-body'>
				<p> Estado = {project.state}</p>
				<Link to={`/project/${project.id}`}>
					<button
						className='btn btn-info'
					>
						Detalles
					</button>
				</Link>
			</div>
		</div>
	);
};
export default CardProject;
