import {NEW_USER} from '../gql/mutationsGql';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
export const NewUser = () =>{
    const [newUser, {data,loading, error}] =useMutation(NEW_USER);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    let id;
    let fullname;
    let email;
    let password
    return(

    <div className="ProjectsContainer">
        <h1>Crear nuevo usuario</h1>
        <form
        onSubmit={e=>{
            e.preventDefault();
            newUser({variables: {
                id: id.value, 
                fullname: fullname.value, 
                email: email.value,
                password: password.value
            }});
            if (error){
                alert(error)
            }else{
                alert("Agregado")
            }
            //setTimeout(window.location.reload(true),30000);
        }}>        
            <div className="mb-3">
                <label className="form-label">Cédula</label>
                <input ref={node=>{
                    id= node;}} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input ref={node=>{
                    fullname= node;}} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input ref={node=>{
                    email= node;}} className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={node=>{
                    password= node;}} type="password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
            <Link to={`/users`}>
                <button type="submit" className="btn btn-primary">Volver</button>
            </Link>
        </form>
    </div>
    )
}