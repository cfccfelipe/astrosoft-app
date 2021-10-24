import { Link } from "react-router-dom";
export const CardUser = ({user}) => {
	return (
		
		<div className='card m-3 p-1 col-10'>
			<div className="card-header">
				<h5 className='card-title'>{user.fullname}</h5>
			</div>
			<div className='card-body'>
				<p className='card-text'>{user.email}</p>
                <Link to={`/user/${user._id}`}>
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
