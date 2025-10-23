import { gql } from "@apollo/client";

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
    }
  }
}
`;

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

export interface DomiciliaryInfo {
  banner: Banner;
}

export interface DomiciliaryPage {
  id: string;
  title: string;
  domiciliaryInfo: DomiciliaryInfo;
}

export interface GetDomiciliaryQuery {
  page: DomiciliaryPage;
}


