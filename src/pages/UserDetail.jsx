import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../gql/querysGql';
import { CardMember } from '../components/CardMember';
import { Link } from 'react-router-dom';


export const UserDetail = () => {
	const { data, loading, error } = useQuery(GET_ALL_USERS);

	const { id } = useParams();
	const user = loading ? 'Loading':data?.getAllUsers.filter((user) => user._id === id)[0];
	if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;

	const getDate = (date) =>{
		let full = new Date(Number(date))
		let month = full.getMonth();
		let year = full.getFullYear();
		let day = full.getDay();
		return (`${day} ${month} ${year}`)
	}
    console.log(user)
	return (
		<div className='ProjectsContainer'>
				<h1> Usuario: {user.fullname}</h1>
				<h1>Correo: {user.email}</h1>
                <h1>Cedula: {user.id} </h1>
                <div className='Menu'>
					<div className="btn-group" >
						<button type="button" className="btn"><Link to={`/edituser/${id}`}>Editar Usuario</Link></button>
                        <button type="submit" className="btn"><Link to={`/users`}>Volver</Link></button>
                        
                    </div>
				</div>
		</div>
	);
};