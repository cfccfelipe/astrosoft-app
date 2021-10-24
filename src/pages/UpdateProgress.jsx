import { useMutation } from "@apollo/client";
import { EDIT_PROGRESS_PROJECT } from "../gql/mutationsGql";
import { Link, useParams } from "react-router-dom";

export const UpdateProgress = () =>{
    const {id} = useParams();
    const [progressProyect, {data: progressData, error, loading}] = useMutation(EDIT_PROGRESS_PROJECT);
    let progress;
    return(
    <div className="ProjectsContainer row">
        <h1>Actualizar progreso</h1>
        <div className="col-4">
            <form
            name="form"
            onSubmit={e=>{
                e.preventDefault();
                progressProyect({variables: {id: id, progress: Number(progress.value)}});
                progress.value='';
                if (error){
                    alert(error)
                }else{
                    alert("Actualizado")
                }
                setTimeout(window.location.reload(true),30000);
            }}>        
                <div className="mb-3">
                    <label className="form-label">Cambiar porcentaje de avance</label>
                    <input ref={node=>{
                        progress= node;}} className="form-control"/>
                </div>
                <button type="submit" name="form" className="btn btn-primary">Guardar</button>
                <Link to={`/project/${id}`}>
                    <button type="submit" className="btn btn-primary">Volver</button>
                </Link>
            </form>
        </div>

    </div>)
}