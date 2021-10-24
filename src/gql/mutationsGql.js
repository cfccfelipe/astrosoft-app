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

export const DELETE_MEMBER_ON_PROJECT = gql`

    mutation deleteMemberOnProjectById(
        $project_id: ID!
        $member_id: ID! 
        )
        {
        deleteMemberOnProjectById(
            input: {
                project_id: $project_id,
                member_id: $member_id
            }
        ) 
        {
            name
            id
        }
    }
`;

export const EDIT_PROGRESS_PROJECT = gql`

    mutation progressProyect(
        $id: ID!
        $progress: Int!
        )
        {
        progressProyect(
            input: {
                id: $id,
                progress: $progress
            }
        ) 
        {
            name
            progress
        }
    }
`;

export const EDIT_DATES_PROJECT = gql`

    mutation updateDatesProjectById(
        $id: ID!
        $start_date: String!
        $end_date: String!
        )
        {
        updateDatesProjectById(
            input: {
                id: $id,
                start_date: $start_date,
                end_date: $end_date
            }
        ) 
        {
            name
        }
    }
`;
export const DELETE_PROJECT = gql`

    mutation deleteProjectById(
        $project_id: ID!
        )
        {
        deleteProjectById(
            input: {
                project_id: $project_id,
            }
        ) 
        {
            name
        }
    }
`;

export const NEW_USER = gql`

    mutation newUser(
        $id: String!
        $fullname: String!
        $email: String!
        $password: String!
        )
        {
        newUser(
            input: {
                id: $id,
                fullname: $fullname,
                email: $email,
                password: $password
            }
        ) 
        {
            fullname
        }
    }
`;