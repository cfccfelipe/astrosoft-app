import { Link } from 'react-router-dom';
export const CardMember = ({user, role}) => {
	return (
		<div class='card m-3 p-1 col-10'>
			<div class="card-header">
				<h5 class='card-title'>{user.fullname}</h5>
			</div>
			<div class='card-body'>
				<h5 class='card-title'>{role}</h5>
				<p class='card-text'>{user.email}</p>
				<Link to={'/'}>
					<button
						className='btn btn-info'
					>
						Eliminar
					</button>
				</Link>
			</div>
		</div>
	);
};
