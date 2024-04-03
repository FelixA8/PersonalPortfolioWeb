export type Project = {
  name: string;
  sourceLink: string;
  publishLink: string;
  image: string[];
  duration: string;
  framework: string[];
  slug: string;
  description: string;
};

export const listCurrentProject: Project[] = [
  {
    name: "NextJS Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae perferendis libero voluptate accusantium vero asperiores dolore doloribus, fugiat eveniet. Voluptas, voluptatum assumenda.",
    image: ["/project/portfolio-nextjs/1.png", "/project/portfolio-nextjs/2.png", "/project/portfolio-nextjs/3.png"],
    sourceLink: "https://github.com/FelixA8/PersonalPortfolioWeb",
    publishLink: "https://felix-personal-portfolio.vercel.app/",
    duration: "March 2024 - Present",
    framework: ["NextJS", "Tailwind CSS", "Typescript", "React Framework"],
    slug: "nextjsportfolio",
  },
  {
    name: "Data Science Club Web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi dolor culpa deleniti, non excepturi consequatur repudiandae molestiae, debitis optio porro fuga dolores quae dignissimos laudantium. Vitae nihil sint omnis sed ipsa illum natus earum fuga ipsum pariatur, voluptas cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi dolor culpa deleniti, non excepturi consequatur repudiandae molestiae, debitis optio porro fuga dolores quae dignissimos laudantium. Vitae nihil sint omnis sed ipsa illum natus earum fuga ipsum pariatur, voluptas cum?",
    image: ["/project/dsc-web/1.png"],
    sourceLink: "",
    publishLink: "",
    duration: "Feb 2024 - Present",
    framework: ["NextJS", "Tailwind CSS", "Typescript", "React Framework"],
    slug: "dscweb",
  },
  {
    name: "Willify",
    description:
      "Willify is a dynamic responsive website crafted using fundamental web technologies: vanilla HTML, CSS, and JavaScript. With five web pages encompassing the home, songs, registration, about us, and song details. Willify also implements the standard web principles, ensuring a clean and user-friendly interface. This project is dedicated to elevate my proficiency in web development, particularly in the aspect of web design. The project's pinnacle challenge lies in conceptualizing and structuring the website. This phase requires extensive research into web design principles and their practical implementation, also searching for references of other web pages.",
    image: ["/project/willify/1.png", "/project/willify/2.png", "/project/willify/3.png"],
    sourceLink: "",
    publishLink: "",
    duration: "February 2024 - Present",
    framework: ["HTML", "CSS", "JavaScript"],
    slug: "willify",
  },
];

export const listPastProject: Project[] = [
  {
    name: "Portfolio With Vanilla HTML, CSS, JS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae perferendis libero voluptate accusantium vero asperiores dolore doloribus, fugiat eveniet. Voluptas, voluptatum assumenda.",
    image: ["/project/portfolio-htmlcssjs/1.png", "/project/portfolio-htmlcssjs/2.png", "/project/portfolio-htmlcssjs/3.png"],
    sourceLink: "https://github.com/FelixA8/My-Web-Portofolio/tree/master",
    publishLink: "https://felixandersonpersonal.netlify.app",
    duration: "December 2023 - January 2024",
    framework: ["HTML", "CSS", "JavaScript"],
    slug: "portfoliohtmlcssjs",
  },
  {
    name: "InnoNest Shopping App",
    description:
      "InnoNest is a furniture online shopping app that is powered using Flutter and Firebase. User can login using their normal email/ password or using external authentication using Google sign in. In the app, user can scroll into various furniture that are sold in the app, purchasing the product using a simple cart system and check their purchase history. User also can edit their username or address. InnoNest also has an augmented reality feature powered by Google ARCore that is implemented in every product. With this feature, user can preview the selected product in their current room with a camera. User able preview the product in a 3D Model preview in their device. As the project lead, I split the responsibilities for every team member, assigning tasks between designing, development and key presenter. The development of the app is also my responsibilities as an app developer.\nThis project is dedicated for SoCS Hackathon 2023, where our team managed to reach the grand finale after competing with over more than 30 other teams. ",
    image: ["/project/innonest/1.png", "/project/innonest/2.png"],
    sourceLink: "https://github.com/FelixA8/InnoNest",
    publishLink: "https://drive.google.com/file/d/1_ieqa5YFrcAemKTvvi07ENO0iUzM_kK4/view?usp=sharing",
    duration: "July 2023 - October 2023",
    framework: ["Flutter Framework", "Dart", "Firebase"],
    slug: "innonest",
  },
  {
    name: "Varchandise",
    description:
      "Varchandise stands as an innovative online shopping platform dedicated to action figures, created using frameworks and other languages including Flutter, Node.js, and MySQL. Flutter is responsible for the creation of the front-end interface, while Node.js forms the backbone of all backend operations, all seamlessly integrated with MySQL as the database. Featuring dual interfaces catering to both users and administrator, Users has the interface to browse and purchase their favorite action figures, while administrators efficiently manage products within the store. As the project lead, I split the responsibilities for every team member, assigning tasks between designing and development. In my leadership capacity, I actively contributed to the design process and collaborated closely with both front-end and back-end developers to ensure the project's success.\nDespite encountering challenges, such as in retrieving the admin token key securely stored within the .env file, our team persevered. Through many research and a deep understanding of REST API token requests, we successfully navigated this obstacle, demonstrating our adaptability and problem-solving prowess.",
    image: ["/project/varchandise/1.png"],
    sourceLink: "https://github.com/FelixA8/Varchandise",
    publishLink: "",
    duration: "September 2023 - December 2023",
    framework: ["Flutter Framework", "NodeJS", "MySQL"],
    slug: "varchandise",
  },
  {
    name: "Expense Manager",
    description:
      "ExpenseManager App is a user-friendly mobile application designed and made by Flutter Framework to help individuals and businesses efficiently track and manage their expenses. With its intuitive interface, users can easily log their daily transactions, edit and delete each transaction and check the stats of the total transactions.\nThe application is created using Flutter framework, where it responsible for all logics and interfaces in the app. As a sole developer, all of the features, design and development were created by one person. Many challenges has been faced, especially on saving data locally, which is solved using shared preferences.",
    image: ["/project/expense-manager/1.png"],
    sourceLink: "https://github.com/FelixA8/ExpenseManager",
    publishLink: "https://drive.google.com/file/d/1nF47tjEmhasebpwZ2MJBA4n3CqHVO_qr/view?usp=drive_link",
    duration: "July 2023 - August 2023",
    framework: ["Flutter Framework", "Dart"],
    slug: "expense-manager",
  },
];
