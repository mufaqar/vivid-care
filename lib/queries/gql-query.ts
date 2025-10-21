import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        title
        content
      }
    }
  }
`;

export const GET_SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10) {
    posts(first: $first) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories(first: 10) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_FAQS = gql`
  query GetFaqs {
      faqs {
        nodes {
          title
          content
        }
      
    }
  }
`;

export const GET_FAQ_BY_CAT = gql`
  query GET_FAQ_BY_CAT($id: ID!) {
    faqType(id: $id, idType: SLUG) {
      faqs {
        nodes {
          title
          content
          date
        }
      }
    }
  }
`;


