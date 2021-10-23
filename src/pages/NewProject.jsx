import {CREATE_PROJECT} from '../gql/mutationsGql';
import { useMutation } from '@apollo/client';

export const NewProject = () =>{
    let name;
    const [newProject, {data,loading, error}] =useMutation(CREATE_PROJECT);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return(

    <div className="ProjectsContainer">
        <h1>Crear nuevo proyecto</h1>
        <form
        onSubmit={e=>{
            e.preventDefault();
            newProject({variables: {name: name.value}});
            name.value='';
        }}>        
            <div className="mb-3">
                <label className="form-label">Nombre del proyecto</label>
                <input ref={node=>{
                    name= node;}} className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    </div>
    )
}