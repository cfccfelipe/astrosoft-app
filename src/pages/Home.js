import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_PROYECTS } from '../gql/querysGql';
import Login from '../components/Login';



const Home = () => {
/*     const { data, loading, error } = useQuery(GET_ALL_PROYECTS);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data.getAllProyects) */

 
    
    return (
        <div>
    
            <Login/>
{/*             {
                loading ? 'Loading'
                        : (
                            data?.getAllProyects.map((item) =>(
                                <div key={item.id}>
                                    <p>{item.id} --- {item.name}</p>
                                </div>
                            ))
                        )
            } */}
        </div>
    )
}

export default Home
