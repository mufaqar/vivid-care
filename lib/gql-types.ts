// --------------------
// TypeScript Interfaces
// --------------------

// Generic GraphQL helper for nullable fields
export type Maybe<T> = T | null | undefined;

// Author
export interface Author {
  node: {
    name: string;
  };
}

// Featured Image
export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
  };
}

// Category node type
export interface CategoryNode {
  name: string;
  slug: string;
}

// Category edge type
export interface CategoryEdge {
  node: CategoryNode;
}

// Categories connection type (GraphQL style)
export interface CategoriesConnection {
  edges: CategoryEdge[];
}

export interface ICategoryNode {
  slug: string;
  name: string;
}

export interface ICategoriesResponse {
  categories: {
    nodes: ICategoryNode[];
  };
}

export interface GetPostsByCategorySlugQuery {
  category?: {
    id: string;
    name: string;
    slug: string;
    posts?: {
      nodes?: Post[] | null;
    } | null;
  } | null;
}


export interface PostByCategory {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  featuredImage?: MediaItem | null;
}

export interface GetPostByCategoryResponse {
  category?: {
    name: string;

    posts?: {
      nodes?: PostByCategory[];
    } | null;
  } | null;
}

// --------------------
// Main Post Interface
// --------------------
export interface Post {
  id: string;
  title: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  date?: string;
  featuredImage?: FeaturedImage;
  author?: Author;
  categories?: CategoriesConnection;
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
  };
}

export interface Author {
  node: {
    name: string;
  };
}

// --------------------
// Root Query Type
// --------------------
export interface GetPostsQuery {
  posts?: {
    nodes?: Maybe<Array<Maybe<Post>>>;
  };
}

// --------------------
// FAQ Query Types
// --------------------
export interface Faq {
  title: string;
  content: string;
}

export interface GetFaqByCatQuery {
  faqType?: {
    faqs?: {
      nodes?: Maybe<Array<Maybe<Faq>>>;
    };
  };
}

export interface GetFaqs {
  faqs?: {
    nodes?: Maybe<Array<Maybe<Faq>>>;
  };
}

// types/home.ts
export interface HomeInfoSection {
  title?: string;
  subTitle?: string;
}

export interface HomeInfoProductRange {
  title?: string;

  subTitle?: string;
  categoryInfo?:
    | {
        title?: string;
        link?: string;
        desc?: string;
        image?: { node?: { mediaItemUrl?: string } };
      }[]
    | null;
}

export interface HomeInfoAdvanteges extends HomeInfoSection {
  options?:
    | {
        title?: string;
        description?: string;
        icon?: { node?: { mediaItemUrl?: string } };
      }[]
    | null;
}

export interface HomeWhyChooseUs extends HomeInfoSection {
  whyCards?:
    | {
        title?: string;
        description?: string;
        icon?: {
          node?: {
            mediaItemUrl?: string;
          };
        };
      }[]
    | null;
}

export interface HomeInfoCustomersInnovate {
  title?: string;
  description?: string;
  customerName?: string;
  customerFeeback?: string;
}



export interface GetHomeQuery {
  page?: {
    title?: string;
    homeInfo?: HomeInfo;
  };
}

// src/types/auth.ts

export interface LoginInput {
  username: string;
  password: string;
}

export interface LoginUser {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  login: {
    authToken: string;
    refreshToken: string;
    user: LoginUser;
  };
}

// ✅ TypeScript types
export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  registerUser: {
    user: {
      id: string;
      username: string;
      email: string;
    };
  };
}
// Services Type Interface
export interface FeaturedImageNode {
  sourceUrl: string;
  altText?: string;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface ServiceInfo {
  logo?: MediaItem;
  serviceAbout?: {
   serviceDetail?: string;
  };
}
export interface Service {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: MediaItem | null;
  serviceInfo?: ServiceInfo | null;
}

export interface GetServiceBySlugQuery {
  service: Service | null;
}

export interface ServicesTypes {
  services: {
    nodes: Service[];
  };
}
// ReviewInfo Type Interface
export interface ReviewInfo {
  rating?: number; // optional in case it's missing
}

export interface Review {
  title: string;
  content: string;
  reviewInfo?: ReviewInfo; // nested inside each review
}

export interface ReviewsData {
  reviews: {
    nodes: Review[];
  };
}
// Home Page Type Interfaces

export interface MediaItem {
  node?: {
    mediaItemUrl?: string;
    altText?: string;
  };
}

// ✅ Slider Section
export interface SlideInfo {
  title?: string;
  description?: string;
  video?: string;
}

export interface SliderInfo {
  slideInfo?: SlideInfo[];
}

// ✅ Why Choose Section
export interface WhyChooseOption {
  title?: string;
  description?: string;
  icon?: MediaItem;
}

export interface WhyChoose {
  image?: MediaItem;
  options?: WhyChooseOption[];
}

// ✅ Service Section
export interface ServiceSection {
  title?: string;
  content?: string;
}

// ✅ Root Home Info slider
export interface HomeInfo {
  sliderInfo?: SliderInfo;
  serviceSection?: ServiceSection;
  whyChoose?: WhyChoose;
}

// ✅ Final Home Page Data
export interface HomePageData {
  page?: {
    homeInfo?: HomeInfo;
  };
}