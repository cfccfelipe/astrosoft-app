import { Link } from "react-router-dom";
export const CardMember = ({user, project, deleteMember}) => {
	return (
		
		<div className='card m-3 p-1 col-10'>
			<div className="card-header">
				<h5 className='card-title'>{user.user_id.fullname}</h5>
			</div>
			<div className='card-body'>
				<h5 className='card-title'>{user.user_role}</h5>
				<p className='card-text'>{user.user_id.email}</p>
				<Link to="/">
					<button            
					onClick={e=>{
						e.preventDefault();
						deleteMember({
							variables:{
								member_id: user._id,
								project_id:project,  
								},
							});
						alert("Eliminado");
						setTimeout(window.location.reload(true),30000);
						}}
						className='btn btn-info'>      
							Eliminar
					</button>
				</Link>
			</div>
		</div>
	);
};
