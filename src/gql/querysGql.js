import { gql } from "@apollo/client";


export const GET_ALL_PROYECTS = gql`
query getAllProyects {
    getAllProyects {
      id
      name
      members {
        user_id {
          fullname
          email
        }
      }
    }
  }
`;

