import { useMutation } from "@apollo/client";
import { EDIT_DATES_PROJECT} from "../gql/mutationsGql";
import { Link, useParams } from "react-router-dom";

export const UpdateProject = () =>{
    const {id} = useParams();
    const [updateDatesProjectById, {data: dates, error, loading}] = useMutation(EDIT_DATES_PROJECT);
    let start_date;
    let end_date;
    return(
    <div className="ProjectsContainer row">
        <h1>Actualizar proyecto</h1>
        <div>
            <form
            onSubmit={e=>{
                e.preventDefault();
                updateDatesProjectById({variables: {
                    id: id, 
                    start_date: start_date.value, 
                    end_date: end_date.value}});
                if (error){
                    alert(error)
                }else{
                    alert("Actualizado")
                }
                setTimeout(window.location.reload(true),30000);
            }}>        
                <div className="mb-3">
                    <label className="form-label">Cambiar fecha de inicio</label>
                    <input ref={node=>{
                        start_date= node;}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cambiar fecha de finalización</label>
                    <input ref={node=>{
                        end_date= node;}}/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <Link to={`/project/${id}`}>
                    <button type="submit" className="btn btn-primary">Volver</button>
                </Link>
            </form>
        </div>
    </div>)
}