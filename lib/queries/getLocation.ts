import { gql } from "@apollo/client";

// GraphQL Query
export const GET_LOCATION_BY_SLUG = gql`
 query GetLocationBySlug($slug: ID!) {
  location(id: $slug, idType: URI) {
      title
      excerpt
      featuredImage {
     node {
        altText
        mediaItemUrl
      }
    }
      locationInfo {
        welcomeContent {
          title
          subtitle
          description
          image {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        locationservices {
          title
          description
          services {
            title
            description
            image {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
        serviceQuality {
          title
          description
          image {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        serviceBenefit {
          title
          description
          image {
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

// TypeScript Interfaces
export interface ImageNode {
  node: {
    altText: string | null;
    mediaItemUrl: string;
  };
}

export interface Service {
  title: string;
  description: string;
  image: ImageNode | null;
}

export interface LocationServices {
  title: string;
  description: string;
  services: Service[];
}

export interface LocationInfoSection {
  title: string;
  description: string;
  image: ImageNode | null;
}

export interface WelcomeContent {
  title: string;
  subtitle: string;
  description: string;
  image: ImageNode | null;
}

export interface LocationInfo {
  welcomeContent: WelcomeContent;
  locationservices: LocationServices;
  serviceQuality: LocationInfoSection;
  serviceBenefit: LocationInfoSection;
}

// Rename Location to LocationData to avoid conflict
export interface LocationData {
  title: string;
  locationInfo: LocationInfo;
}

export interface GetLocationBySlugData {
  location: LocationData | null;
}

export interface GetLocationBySlugVars {
  slug: string;
}
