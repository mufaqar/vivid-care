import { gql } from "@apollo/client";

// ✅ GraphQL Query
export const GET_SUPPORTED = gql`
  query GET_Supported {
    page(id: "supportedliving", idType: URI) {
      id
      title
      supportedInfo {
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
        aboutSupported {
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
        activities {
          options {
            title
            description
            link {
              url
            }
            image {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
        cta {
          title
          description
          link {
            url
          }
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



// 🌐 Common Media Interface
export interface MediaNode {
  altText: string;
  mediaItemUrl: string;
}

export interface MediaItem {
  node: MediaNode;
}

// 🌐 Banner Section
export interface Video {
  url: string;
}

export interface VideoPoster {
  node: MediaNode;
}

export interface Banner {
  title: string;
  description: string;
  video?: Video;
  videoPoster?: VideoPoster;
}

// 🌐 About Supported Section
export interface AboutSupportedOption {
  title: string;
  description: string;
  icon?: {
    node: MediaNode;
  };
}

export interface AboutSupported {
  title: string;
  subTitle: string;
  description: string;
  options?: AboutSupportedOption[];
}

// 🌐 Care For Section
export interface CareForOption {
  title: string;
  description: string;
}

export interface CareFor {
  title: string;
  description: string;
  image?: {
    node: MediaNode;
  };
  options?: CareForOption[];
}

// 🌐 Activities Section
export interface ActivityOption {
  title: string;
  description: string;
  link?: {
    url: string;
  };
  image?: {
    node: MediaNode;
  };
}

export interface SupportedActivities {
  options?: ActivityOption[];
}

// 🌐 CTA Section
export interface CTA {
  title: string;
  description: string;
  link?: {
    url: string;
  };
  image?: {
    node: MediaNode;
  };
}

// 🌐 Supported Info Wrapper
export interface SupportedInfo {
  banner?: Banner;
  aboutSupported?: AboutSupported;
  careFor?: CareFor;
  activities?: SupportedActivities;
  cta?: CTA;
}

// 🌐 Page Wrapper
export interface SupportedPage {
  id: string;
  title: string;
  supportedInfo?: SupportedInfo;
}

// 🌐 Root Query Type
export interface GetSupportedQuery {
  page?: SupportedPage;
}
