
import { useMutation, useQuery} from '@apollo/client';
import { useParams } from 'react-router';
import { NEW_MEMBER_ON_PROJECT } from '../gql/mutationsGql';
import { Link } from 'react-router-dom';
import {GET_ALL_USERS} from "../gql/querysGql";

export const NewMember = () =>{
    const {id} = useParams();
    const [newMemberOnProject, {data:getMember, error}] =useMutation(NEW_MEMBER_ON_PROJECT);
    const {data, loading} = useQuery(GET_ALL_USERS);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    let user_role;
    let user_id;
    return(

    <div className="ProjectsContainer">
        <h1>Adicionar Miembro al Proyecto</h1>
        <h1>{id}</h1>

        <form
        onSubmit={e=>{
            e.preventDefault();
            newMemberOnProject({
                variables:{
                    id:id, 
                    user_id: user_id.value, 
                    user_role: user_role.value,
                },
            });
            if (error){
                alert(error)
            }else{
                alert("Miembro Agregado")
            }
            setTimeout(window.location.reload(true),30000);


        }}>    
            <div className='mb-3'>
                <label className="form-label">Miembro</label>
                <select  ref={node=>{user_id = node;}} 
                className="form-select form-control bg-white">
                {loading ? 'Loading':
                (data?.getAllUsers.map((element, index) => {
                    return (
                        <option key={index} 
                        value={element._id}>
                            {element.fullname}
                        </option>
                        );
                        })
                )
                }
                </select>
            </div>
            <div className='mb-3'>
                <label className="form-label">Rol</label>
                <select  ref={node=>{
                    user_role = node;}} className="form-select form-control bg-white">
					<option value="Investigador">Investigador</option>
					<option value="Lider">Lider</option>
                    <option value="Tutor">Tutor</option>
				</select> 
            </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            <Link to={`/project/${id}`}>
                <button type="submit" className="btn btn-primary">Volver</button>
            </Link>
            
        </form>
    </div>
    )
}