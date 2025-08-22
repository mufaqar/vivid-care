interface Service {
  id: number;
  title: string;
  category: string,
  description: string;
  image: string;
  logo: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Water House",
    category: "Water Care Services",
    description: "Home Care Services, Whatever Your Family Needs, We're Here To Help",
    image: "/images/service1.png",
    logo: "/images/service_logo.png",
    link: "/services/water-care",
  },
  {
    id: 2,
    title: "Water House",
    category: "Compass Care Services",
    description: "Compassionate and reliable care for your loved ones.",
    image: "/images/service2.png",
    logo: "/images/service_logo.png",
    link: "/services/compass-care",
  },
  {
    id: 3,
    title: "Water House",
    category: "Bridgeway Care Services",
    description: "Providing comfort, accessibility, and a sense of community.",
    image: "/images/service3.png",
    logo: "/images/service_logo.png",
    link: "/services/bridgeway-care",
  },
  {
    id: 4,
    title: "Water House",
    category: "Norman Care Services",
    description: "Supporting families with quality home care assistance.",
    image: "/images/service4.png",
    logo: "/images/service_logo.png",
    link: "/services/norman-care",
  },
  {
    id: 5,
    title: "Water House",
    category: "Princess Care Services",
    description: "Trusted care solutions tailored to your needs.",
    image: "/images/service5.png",
    logo: "/images/service_logo.png",
    link: "/services/princess-care",
  },
  {
    id: 6,
    title: "Water House",
    category: "Limekin Care Services",
    description: "Dedicated to enhancing quality of life with expert care.",
    image: "/images/service6.png",
    logo: "/images/service_logo.png",
    link: "/services/limekin-care",
  },
];
