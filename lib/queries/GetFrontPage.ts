import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query GetFrontPage {
    page(id: "home", idType: URI) {
        homeInfo {
          sliderInfo {
            slideInfo {
              title
              description
              video
            }
          }
          serviceSection {
            title
            content
          }
          whyChoose {
            image {
              node {
                mediaItemUrl
            }
          }
          options {
            title
            description
            icon {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;