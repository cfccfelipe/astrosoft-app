import { gql } from '@apollo/client';

export const GET_ALL_PROYECTS = gql`
	query getAllProyects {
		getAllProyects {
			id
			name
			members {
				_id
				user_id {
					_id
					fullname
					email
				}
				user_role
			}
			progress
			state
			start_date
			end_date
			create_at

		}
	}
`;

export const GET_PROJECT_BY_ID = gql`
	query getProyectById($id: String!){
		getProyectById(id: $id){
			name
			}
		}
`;
export const GET_ALL_USERS = gql `
	query getAllUsers{
		getAllUsers{
			id
			_id
			fullname
			email
	}
}

`;







