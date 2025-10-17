interface Service {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  logo: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "water-care",
    title: "Water House",
    category: "Water Care Services",
    description:
      "Home Care Services, Whatever Your Family Needs, We're Here To Help",
    image: "/images/service1.png",
    logo: "/images/service_logo.png",
    link: "/water-care",
  },
  {
    id: 2,
    slug: "compass-care",
    title: "Compass Care",
    category: "Compass Care Services",
    description:
      "Compassionate and reliable care for your loved ones.",
    image: "/images/service2.png",
    logo: "/images/service_logo.png",
    link: "/compass-care",
  },
  {
    id: 3,
    slug: "bridgeway-care",
    title: "Bridgeway Care",
    category: "Bridgeway Care Services",
    description:
      "Providing comfort, accessibility, and a sense of community.",
    image: "/images/service3.png",
    logo: "/images/service_logo.png",
    link: "/bridgeway-care",
  },
  {
    id: 4,
    slug: "norman-care",
    title: "Norman Care",
    category: "Norman Care Services",
    description:
      "Supporting families with quality home care assistance.",
    image: "/images/service4.png",
    logo: "/images/service_logo.png",
    link: "/norman-care",
  },
  {
    id: 5,
    slug: "princess-care",
    title: "Princess Care",
    category: "Princess Care Services",
    description:
      "Trusted care solutions tailored to your needs.",
    image: "/images/service5.png",
    logo: "/images/service_logo.png",
    link: "/princess-care",
  },
  {
    id: 6,
    slug: "limekin-care",
    title: "Limekin Care",
    category: "Limekin Care Services",
    description:
      "Dedicated to enhancing quality of life with expert care.",
    image: "/images/service6.png",
    logo: "/images/service_logo.png",
    link: "/limekin-care",
  },
];
