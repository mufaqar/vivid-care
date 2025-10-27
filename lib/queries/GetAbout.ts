import { gql } from "@apollo/client";

// ✅ GraphQL Query
export const GET_DOMICILIARY = gql`
  query GET_domiciliary {
    page(id: "domcare", idType: URI) {
      id
      title
      domiciliaryInfo {
        banner {
          title
          description
          video {
            url
          }
          videoPoster {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        aboutDomcare {
          title
          subTitle
          description
          options {
            title
            description
            icon {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
        careFor {
          title
          description
          image {
            node {
              altText
              mediaItemUrl
            }
          }
          options {
            title
            description
          }
        }
      }
    }
  }
`;

// ✅ Interfaces
export interface MediaNode {
  altText: string;
  mediaItemUrl: string;
}

export interface VideoPoster {
  node: MediaNode;
}

export interface Video {
  url: string;
}

export interface Banner {
  title: string;
  description: string;
  video: Video;
  videoPoster: VideoPoster;
}

export interface AboutOption {
  title: string;
  description: string;
  icon: { node: MediaNode };
}

export interface AboutDomcare {
  title: string;
  subTitle: string;
  description: string;
  options: AboutOption[];
}

// ✅ New CareFor Section Interfaces
export interface CareForOption {
  title: string;
  description: string;
}

export interface CareFor {
  title: string;
  description: string;
  image: { node: MediaNode };
  options: CareForOption[];
}

export interface DomiciliaryInfo {
  banner?: Banner;
  aboutDomcare?: AboutDomcare;
  careFor?: CareFor;
}

export interface DomiciliaryPage {
  id: string;
  title: string;
  domiciliaryInfo: DomiciliaryInfo;
}

export interface GetDomiciliaryQuery {
  page?: DomiciliaryPage;
}
