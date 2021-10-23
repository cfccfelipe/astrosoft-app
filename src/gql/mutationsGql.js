import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
	mutation newProyect($name: String!){
		newProyect(input: {name:$name}){
			name
            create_at
		}
	}  
`;

export const NEW_MEMBER_ON_PROJECT = gql`

    mutation newMemberOnProject(
        $id: ID!
        $user_id: ID! 
        $user_role: String!
        )
        {
        newMemberOnProject(
            input: {id:$id, 
                members:{
                user_id: $user_id, 
                user_role:$user_role
            }}
        ) 
        {
            name
            id
        }
    }
`;