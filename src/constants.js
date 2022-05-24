import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

// Carousel Avatars
import user1 from "./Images/user1.png";
import user2 from "./Images/user2.png";
// import user3 from "./Images/user3.png";
// import user4 from "./Images/user4.png";
import user5f from "./Images/user5f.png";
import user6m from "./Images/user6m.png";
import user7m from "./Images/user7m.png";
import user8m from "./Images/user8m.png";
import user9m from "./Images/user9m.png";

// Page Content

export const AboutPage = {
  aboutSection: {
    paragraph1:
      "ElyX Auctions are the best way to buy and sell classic, collector, and enthusiast vehicles.",
    paragraph2:
      "ElyX’s knowledgeable community of more than 450,000 users and over 200,000 registered bidders vets each listing so potential buyers can bid with confidence.",
  },
  historySection: {
    paragraph1:
      "Bring a Trailer co-founder Randy Nonnenberg has been hunting through classifieds for rare, interesting, and just plain cool cars since before he could even drive them. In 2007, after years of recommending listings to his buddies, friend and co-founder Gentry Underwood urged Randy to share his knowledge on a site of their own.",
    paragraph2:
      "They chose the name in reference to the familiar shorthand in classified listings urging buyers to “bring a trailer!” for non-op vehicles like race cars that weren’t street legal or mechanic’s specials. The site highlighted a large range from projects to rare collector cars.",
    paragraph3:
      "Randy and Gentry began focusing on ElyX full time in 2010, making the site a destination for the most relevant mix of enthusiast vehicles for sale among the Wild West of internet classifieds.",
    paragraph4:
      "After years of connecting enthusiasts with the coolest classifieds out there, we created ElyX Exclusives to allow our community to sell directly on the site. Users sent in their vehicles for us to write exclusive listings and offer them to ElyX readers. The interest was huge and sellers were often overwhelmed by the vast number of interested buyers. The success of BaT Exclusives encouraged the team to launch BaT Auctions.",
    paragraph5:
      "ElyX Auctions offer greater transparency, more comprehensive listings, and fairer fees over traditional platforms. We curate from a wide range of makes, models, and vehicle types—we want to see as much variety as our audience does!",
    paragraph6:
      "ElyX has become its own self-sustaining ecosystem where users submit their vehicles for exclusive auctions. ElyX’s curation mirrors our original eclectic taste: off roaders sit next to track cars, domestics next to foreign, parts next to prjects. We’ve even auctioned re-creations, kits, and boats!",
  },
};

// Testemonials (Reviews)

export const footerDescription =
  "BaT Auctions are the best way to buy and sell classic, collector, and enthusiast vehicles.";

export const carouselElements = [
  {
    image: user8m,
    name: "Anonymous",
    testimonial:
      "Great site.  Easy to navigate, register, and submit for auction.",
    rating: 5,
  },
  {
    image: user5f,
    name: "Anonymous",
    testimonial:
      "Love it. I was able to submit for an auction in no time. By registering, I was able to track my listing as well. The product sold and I got notified accordingly. And the entire process from start to finish went smoothly for me. Thank you.",
    rating: 5,
  },
  {
    image: user9m,
    name: "Anonymous",
    testimonial:
      "I’ve been looking for an auctioneering site like this.  Easy to follow, buy, and sell products. I’ve had much success with Elyx. Thank you for providing me with such an excellent auctioneering platform.",
    rating: 5,
  },
  {
    image: user6m,
    name: "Anonymous",
    testimonial:
      "Thank you Elyx for offering me the opportunity to sell my product. Best wishes for the future.",
    rating: 5,
  },
  {
    image: user1,
    name: "Anonymous",
    testimonial:
      "I needed to quickly sell a product.  Elyx was exactly what I was looking for. An interactive site with a straightforward process to sell my product. In no time was I able to submit, got an offer from the winner, and sell the product. I will definitely recommend Elyx to all my family and friends.",
    rating: 5,
  },
  {
    image: user2,
    name: "Anonymous",
    testimonial:
      "Excellent experience. The winning bidder for the product  could not complete the process for unforeseen circumstances. Thanks to Elyx, the runner-up got in touch with me and I happily sold the product to him. Highly recommended site for all your auctioneering needs.",
    rating: 5,
  },
  {
    image: user7m,
    name: "Anonymous",
    testimonial: "Great auctioneering site",
    rating: 5,
  },
];

// Footer Content

export const socialIcons = [
  {
    id: "1",
    name: "Facebook",
    component: <Facebook />,
    link: "https://www.facebook.com/elyxauction",
  },
  {
    id: "2",
    name: "Instagram",
    component: <Instagram />,
    link: "https://www.instagram.com/elyxauction",
  },
  {
    id: "3",
    name: "Twitter",
    component: <Twitter />,
    link: "https://twitter.com/elyxauction",
  },
  {
    id: "4",
    name: "YouTube",
    component: <YouTube />,
    link: "https://www.youtube.com/elyxauction",
  },
];

export const footerNavigation = [
  {
    id: "1",
    name: "Home",
    to: "/",
  },
  {
    id: "2",
    name: "Auctions",
    to: "/auctions",
  },
  {
    id: "3",
    name: "About",
    to: "/about",
  },
  {
    id: "4",
    name: "Submit for auction",
    to: "/submit_for_auction",
  },
];

export const contantInfo = [
  {
    id: "1",
    name: "example@example.com",
    href: "mailto:example@example.com",
    icon: <Email color="primary" fontSize="small" />,
  },
  {
    id: "2",
    name: "+47 33 30 05 40",
    href: "tel:+47 33 30 05 40",
    icon: <Phone color="primary" fontSize="small" />,
  },
  {
    id: "3",
    name: "Auksjonen.no AS, Døvleveien 23 3170 Sem",
    href: "#",
    icon: <LocationOn color="primary" fontSize="small" />,
  },
];
