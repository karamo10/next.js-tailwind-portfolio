const projects = [
  {
    id: 1,
    title: 'Mobile App Development',
    description:
      'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    image_url: '/projects/blog-1.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 2,
    title: 'Landing Page Development',
    description:
      'Promotional landing page for a fitness website Summer Campaign. Form development included.',
    image_url: '/projects/blog2.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description:
      'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    image_url: '/projects/blog3.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 4,
    title: 'E-Commerce Development',
    description:
      'Ecommerce website offering access to the latest and greatest gadgets and accessories.',
    image_url: '/projects/blog4.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    description:
      'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    image_url: '/projects/blog-1.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 6,
    title: 'Landing Page Development',
    description:
      'Promotional landing page for a fitness website Summer Campaign. Form development included.',
    image_url: '/projects/blog2.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 7,
    title: 'Mobile App Development',
    description:
      'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    image_url: '/projects/blog3.svg',
    button_label: 'See Details',
    button_url: '/',
  },
  {
    id: 8,
    title: 'E-Commerce Development',
    description:
      'Ecommerce website offering access to the latest and greatest gadgets and accessories.',
    image_url: '/projects/blog4.svg',
    button_label: 'See Details',
    button_url: '/',
  },
];

const clients = [
  {
    id: 1,
    image_url: '/clients/logo-coinbase.svg',
    title: "Coinbase Security & Wallet Interface Revamp",
    slug: "coinbase",
    client: "Coinbase",
    date: "2024-08-10",
    summary: "We worked with Coinbase to improve user trust and crypto wallet interaction by focusing on secure design patterns and intuitive UI",
    tags: ["Crypto", "Security", "UI/UX"],
    content: "In August 2024, Coinbase became one of our premier fintech clients. Our primary objective was to enhance the security and usability of their wallet interface. We implemented two-factor interaction flows, intuitive QR scan transfers, and simplified transaction histories. The redesign led to a 15% increase in wallet usage and a notable drop in user error reports."

  },
  {
    id: 2,
    image_url: '/clients/logo-spotify.svg',
    title: "Spotify UI Enhancement & Dark Mode Rollout",
    slug: "spotify",
    client: "Spotify",
    date: "2024-07-01",
    summary: "Dark mode, lighter components, and better discoverability were key in our latest Spotify product design engagement.",
    tags: ["Dashboard", "Logistics", "Enterprise"],
    content: "Amazon approached us in June 2024 to streamline their internal logistics dashboard. With millions of SKUs and delivery routes, we prioritized performance and clarity. Our team built a reusable component system in React and integrated real-time metrics with socket updates."
  },
  {
    id: 3,
    image_url: '/clients/logo-pinterest.svg',
    title: "Pinterest Creator Tools Launch",
    slug: "pinterest",
    client: "Pinterest",
    date: "2024-05-19",
    summary: "From ideation to implementation, we supported Pinterest in launching a new suite of tools for content creators.",
    tags: ["Creator Tools", "Web Dev", "Design System"],
    content: "In May 2024, we collaborated with Pinterest on a major product launch. The new Creator Tools feature allowed users to schedule, brand, and analyze pins. Our focus was performance, modular design, and a seamless onboarding experience."
  },
  {
    id: 4,
    image_url: '/clients/logo-google.svg',
    title: "Google Becomes a Trusted Client",
    slug: "google",
    client: "Google",
    date: "2024-03-14",
    summary: "We partnered with Google to enhance their UI design system and accessibility features across several internal tools.",
    tags: ["UI/UX", "Accessibility", "Tech Giant"],
    content: "In March 2024, Google joined our client portfolio. Our team collaborated on refining Google's internal UI system, ensuring ADA compliance and implementing new Figma design tokens across departments. This project marked a turning point in our growth as an inclusive design-focused agency."
  },
  {
    id: 5,
    image_url: '/clients/logo-amazon.svg',
    title: "Amazon's Logistics Dashboard Revamp",
    slug: "amazon",
    client: "Amazon",
    date: "2024-06-02",
    summary: "We redesigned Amazon's internal logistics dashboard for better usability, data visualization, and mobile responsiveness.",
    tags: ["Dashboard", "Logistics", "Enterprise"],
    content: "Amazon approached us in June 2024 to streamline their internal logistics dashboard. With millions of SKUs and delivery routes, we prioritized performance and clarity. Our team built a reusable component system in React and integrated real-time metrics with socket updates."
  },
  {
    id: 6,
    image_url: '/clients/logo-netflix.svg',
    title: "Netflix Original Campaign Microsites",
    slug: "netflix",
    client: "Netflix",
    date: "2024-04-23",
    summary: "We developed immersive microsites for several Netflix Originals, enhancing user engagement and retention.",
    tags: ["Campaign", "Microsite", "Streaming"],
    content: "Netflix brought us on board to create microsites for their new Original series. Each site featured animated intros, embedded trailers, and interactive cast bios. The microsites drove a 20% increase in viewer conversion from web to app."
  },
];

const skills = [
  {
    id: 1,
    title: 'Frontend Web Development',
    description:
      'Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.',
    icon_image: 'TableCellsIcon',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      'I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.',
    icon_name: 'FingerPrintIcon',
  },
  {
    id: 3,
    title: 'Technology Stack',
    description:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
    icon_image: 'SwatchIcon',
  },
  {
    id: 4,
    title: 'Web Optimization',
    description:
      'Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.',
    icon_name: 'HashtagIcon',
  },
  {
    id: 5,
    title: 'User-Centric Design',
    description:
      'My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.',
    icon_name: 'EyeIcon',
  },
  {
    id: 6,
    title: 'Testing and Quality Assurance',
    description:
      'I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.',
    icon_name: 'DocumentTextIcon',
  },
];

const avatars = [
  {
    index: 1,
    image_url: '/avatars/avatar1.jpg',
  },
  {
    index: 2,
    image_url: '/avatars/avatar2.jpg',
  },
  {
    index: 3,
    image_url: '/avatars/avatar3.jpg',
  },
];

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'user',
    email: 'user@gmail.com',
    password: '123456'
  }
]
export { projects, clients, skills, avatars, users };
