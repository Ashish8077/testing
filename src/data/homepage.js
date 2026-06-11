import { Handshake, HeadphonesIcon, Users } from "lucide-react";
import forCustomers from "../assets/images/for-customers.jpg";
import ourExpertise from "../assets/images/our-expertise.jpg";
import ourServices from "../assets/images/our-services.jpg";
import asgPartners from "../assets/images/portfolio/asg-pattern.webp"
import bigmanAcademy from "../assets/images/portfolio/bigmanban.webp"
import mannaniya from "../assets/images/portfolio/mann.webp"
import zingDrops from "../assets/images/portfolio/zingd.webp"
import itse from "../assets/images/portfolio/ITSE.webp"
import kiteStarGrocery from "../assets/images/portfolio/kiteg.webp"
import featuredImage from "../assets/images/latestInsight/featuredImage.jpg"
import latestInsight1 from "../assets/images/latestInsight/latestInsight1.jpg"
import latestInsight2 from "../assets/images/latestInsight/latestInsight2.jpeg"
import latestInsight3 from "../assets/images/latestInsight/latestInsight3.jpeg"
import latestInsight4 from "../assets/images/latestInsight/latestInsight4.jpeg"


export const SLIDES = [
  {
    id: 1,
    label: "Winning Digital Marketing Strategy",
    heading: "Take Your Brand Further with",
    highlight: "Expert Digital Marketing",
    sub: "Transforming your online presence, driving growth, and delivering real results through data-driven strategies.",
    cta: {
      label: "Get Started",
      to: "/contact",
    },
    ctaGhost: {
      label: "Our Services",
      to: "/services",
    },
  },
  {
    id: 2,
    label: "Marketing Must Drive The Results",
    heading: "We Build Campaigns That",
    highlight: "Convert & Grow",
    sub: "Drive business growth with creativity, analytics, and a strategy built around your goals.",
    cta: {
      label: "See Our Work",
      to: "/work",
    },
    ctaGhost: {
      label: "Learn More",
      to: "/about",
    },
  },
  {
    id: 3,
    label: "Ready to Grow Your Business?",
    heading: "Crafting Digital Experiences That",
    highlight: "Elevate Brands",
    sub: "From stunning web design to cohesive brand identities — we build the digital face of your business.",
    cta: {
      label: "View Portfolio",
      to: "/work",
    },
    ctaGhost: {
      label: "Contact Us",
      to: "/contact",
    },
  },
];

export const CARDS = [
  {
    badge: "Our Services",
    title: "How We Can Help?",
    description:
      "From SEO to paid ads, we offer end-to-end digital solutions tailored to your business goals.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    to: "/services",
    cta: "View All Services",
  },
  {
    badge: "Our Expertise",
    title: "Why Choose Webmatic?",
    description:
      "Award-winning strategies backed by data, creativity, and a team that treats your brand like their own.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
    to: "/about",
    cta: "What Makes Us Special",
  },
  {
    badge: "Success Stories",
    title: "Bring Innovative Thinking",
    description:
      "See how we've helped brands grow their online presence and achieve measurable, lasting results.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop",
    to: "/work",
    cta: "View Success Stories",
  },
];

export const SERVICES = [
  {
    title: "Brand Marketing",
    description:
      "Focuses on conducting in-depth research on your customers, your competitors, and your search engine landscape.",
    cta: "Talk Brand Strategy",
  },
  {
    title: "Web Development",
    description:
      "Future-proof your website against the ever evolving online world with a well orchestrated web strategy.",
    cta: "Talk Web Development",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost.",
    cta: "Talk Digital Marketing",
  },
  {
    title: "App Development",
    description:
      "App development involves designing, coding, testing, and deploying applications for mobile or web platforms to solve user problems.",
    cta: "Talk App Development",
  },
  {
    title: "Content Writing",
    description:
      "Content writing involves crafting engaging, informative, and SEO-friendly text to inform, entertain, or persuade a target audience online.",
    cta: "Talk Content Writing",
  },
  {
    title: "Game App Development",
    description:
      "Game app development involves designing, coding, testing, and launching interactive games for mobile or web platforms to engage users.",
    cta: "Talk Game App Development",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "Web Development",
    title: "ASG Partners",
    description:
      "ASG & PARTNERS is a full-service law firm with offices in New Delhi.",
    image: asgPartners,
  },
  {
    id: 2,
    category: "Web Development",
    title: "Bigmans Academy",
    description:
      "A Bigmans Academy is a unit of Bigmans Consultant & Marketing Pvt. Ltd.",
    image: bigmanAcademy,
  },
  {
    id: 3,
    category: "E-Commerce",
    title: "Mannaniya",
    description:
      "Maananiya.com is an online e-commerce platform offering a wide range of products.",
    image: mannaniya,
  },
  {
    id: 4,
    category: "E-Commerce",
    title: "Zing Drops",
    description:
      "You can easily make it your own adding your graphics.",
    image: zingDrops,
  },
  {
    id: 5,
    category: "Web Development",
    title: "ITSE",
    description:
      "The International Talent Search Examination (ITSE) is a prestigious assessment.",
    image: itse,
  },
  {
    id: 6,
    category: "E-Commerce",
    title: "Kite Star Grocery",
    description:
      "Easily make it your own thanks to the smart layer.",
    image: kiteStarGrocery,
  },
];


export const blogPosts = [
  {
    image: latestInsight1,
    title: "How to Start Your Android App Development Journey in Canada",
    date: "March 3, 2025",
  },
  {
    image: latestInsight2,
    title: "How Does Social Media Help Grow Your Business?",
    date: "February 13, 2025",
  },
  {
    image: latestInsight3,
    title: "How Can Google Ads Help Your Business Grow?",
    date: "February 12, 2025",
  },
  {
    image: latestInsight4,
    title: "Why Is Social Media Important for Your Business?",
    date: "January 28, 2025",
  },
];

export const reasons = [
  {
    icon: Handshake,
    title: "Customers First",
    description:
      "Webmatic Technology starts by fully understanding your business objectives. Every strategy we create is designed with your goals at the forefront, ensuring we drive the results that matter most to you.",
    cta: "Find Out More",
  },
  {
    icon: Users,
    title: "Exceptional Team",
    description:
      "With our best in-house agency know-how, we can boast of having enterprise-level experience with a talented in-house team that definitely brings to the table when it comes to innovative digital marketing solutions.",
    cta: "Meet The Team",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable Support",
    description:
      "We make communication easy. Our support is available 24/7; our average response time is simply ludicrous, so you're sure to have help when you might need it.",
    cta: "Talk to Customer Support",
  },
];

export const testimonials = [
  {
    title: "Creative and Flawless Execution",
    description:
      "Creative and flawless execution with a sense of urgency and focus on results is how I'd describe the Webmatic team.",
    author: "MRS. LINDA - GROUP HEAD OF DIGITAL COMMUNICATIONS",
    image: "/images/testimonial-1.webp",
  },
  {
    title: "Webmatic has Been Invaluable",
    description:
      "Webmatic has been invaluable. They understand our brand and have given my ideas new life in a social media obsessed world.",
    author: "PAM HURLEY - PRESIDENT HURLEY WRITE INC.",
    image: "/images/testimonial-2.webp",
  },
];


export const cards = [
  {
    eyebrow: "Our Services",
    title: "How We Can Help",
    body: "From web development to full-scale digital campaigns — we build things that perform, not just impress.",
    cta: "View All Services",
    accent: "#F5A623",
    image: ourServices
    ,
    imgAlt: "Team working on a growth chart",
  },
  {
    eyebrow: "Our Expertise",
    title: "Why Choose Webmatic",
    body: "Years of cross-industry experience means we've already solved the problem you're about to describe.",
    cta: "What Makes Us Special",
    accent: "#3D5A80",
    image: ourExpertise,
    imgAlt: "Colleagues collaborating",
  },
  {
    eyebrow: "For Customers",
    title: "Bring Innovative Thinking",
    body: "We work alongside your team — not above it. Fresh perspective, zero disruption, measurable results.",
    cta: "View Success Stories",
    accent: "#1A7A4A",
    image: forCustomers,
    imgAlt: "Excited group celebrating",
  },
];


export const featured = {
  image: featuredImage,
  title: "What Do You Need to Start iOS App Development?",
  excerpt:
    "Getting started with iOS app development might seem challenging at first, but with the right tools, knowledge, and mindset — you can build something great.",
  author: "admin",
  date: "March 20, 2025",
};
