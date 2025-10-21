import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query GetFrontPage {
    page(id: "home", idType: URI) {
      homeInfo {
        serviceSection {
          title
          content
        }
      }
    }
  }
`;