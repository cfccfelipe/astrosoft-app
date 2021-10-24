
import {useParams } from "react-router-dom";

export const EditUser = () =>{
    const {id} = useParams();

    return(
    <div> HOLA id: {id}</div>
    )
}