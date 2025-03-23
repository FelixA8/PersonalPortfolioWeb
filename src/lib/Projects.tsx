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

export const listProject: Project[] = [

]

export const dummyProject: Project[] = [
  {
    name: "Buzivest",
    description:
      "This application is designed to provide support for small to medium sellers (MSMEs) in accessing the set of funds needed to develop their business. In addition, this application opens up wider investment opportunities for all levels of society, thereby enabling more inclusive participation in the world of investment. In this way, this application aims to reduce inequality in the world of capital markets, creating a fairer and more equitable economic environment for all parties involved.",
    image: [
      "/project/buzivest/1.png",
      "/project/buzivest/2.png",
    ],
    sourceLink: "https://github.com/BuziFest/BuziFestFrontEnd",
    publishLink: "https://drive.google.com/file/d/1M_y8ohV0AUnwhfh9UPQx3NTbU2IUcuuU/view?usp=sharing",
    duration: "March 2024 - July 2024",
    framework: ["Kotlin", "Firebase"],
    slug: "buzivest",
  },
  {
    name: "NextJS Portfolio",
    description:
      "Welcome to my portfolio website, powered by Next.js! Explore a showcase of my work, achievements, and skills in one seamless digital experience. Crafted with Next.js, a powerful React framework, this portfolio combines the flexibility of React components with the performance optimization of server-side rendering. The result? A lightning-fast website that delivers a smooth user experience across all devices. Browse through my projects, ranging from web applications and mobile apps to UI/UX designs and more. Each project is meticulously presented, highlighting key features, technologies used, and my role in the development process. Whether you're a potential employer, collaborator, or simply curious about my work, you'll find detailed insights into my capabilities and expertise. With Next.js's built-in support for static site generation and server-side rendering, this portfolio ensures optimal performance and SEO-friendliness. Rest assured that your experience is not only visually engaging but also easily discoverable by search engines. But this portfolio isn't just about showcasing past accomplishments; it's also a reflection of my ongoing journey in the world of technology. Stay tuned for updates as I continue to explore new technologies, tackle exciting challenges, and push the boundaries of innovation.",
    image: [
      "/project/portfolio-nextjs/1.png",
      "/project/portfolio-nextjs/2.png",
      "/project/portfolio-nextjs/3.png",
    ],
    sourceLink: "https://github.com/FelixA8/PersonalPortfolioWeb",
    publishLink: "https://felixanderson.vercel.app/",
    duration: "March 2024 - April 2024",
    framework: ["NextJS", "Tailwind CSS", "Typescript", "React Framework"],
    slug: "nextjsportfolio",
  },
  {
    name: "Portfolio With Vanilla HTML, CSS, JS",
    description:
      "A website portfolio that includes my background, experience, skills, projects and achievements. This portfolio website is created using vanilla HTML, CSS and JavaScript. As a student, this project purpose aims to let other people able to acknowledge my individual traits, while also developing my web development skills. Most of the project phase has it’s own unique challenge. Since this is my first web project using vanilla HTML, CSS and JavaScript, a lot of research and tutorials and required to be able to create the website.",
    image: [
      "/project/portfolio-htmlcssjs/1.png",
      "/project/portfolio-htmlcssjs/2.png",
      "/project/portfolio-htmlcssjs/3.png",
    ],
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
    publishLink:
      "https://drive.google.com/file/d/1_ieqa5YFrcAemKTvvi07ENO0iUzM_kK4/view?usp=sharing",
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
    publishLink:
      "https://drive.google.com/file/d/1nF47tjEmhasebpwZ2MJBA4n3CqHVO_qr/view?usp=drive_link",
    duration: "July 2023 - August 2023",
    framework: ["Flutter Framework", "Dart"],
    slug: "expense-manager",
  },
];
