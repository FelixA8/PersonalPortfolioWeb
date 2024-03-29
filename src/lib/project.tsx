export type CurrentProject = {
  name: string;
  link: string;
  image: string[];
  description: string;
};

export const listCurrentProject: CurrentProject[] = [
  {
    name: "NextJS Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae perferendis libero voluptate accusantium vero asperiores dolore doloribus, fugiat eveniet. Voluptas, voluptatum assumenda.",
    image: ["/project/portfolio-nextjs/1.png"],
    link: "https://github.com/FelixA8/",
  },
  {
    name: "Data Science Club Web",
    description:
      "ExpenseManager App is a user-friendly mobile application designed and made by Flutter Framework to help individuals and businesses efficiently track and manage their expenses. With its intuitive interface, users can easily log their daily transactions, edit and delete each transaction and check the stats of the total transactions.\nThe application is created using Flutter framework, where it responsible for all logics and interfaces in the app. As a sole developer, all of the features, design and development were created by one person. Many challenges has been faced, especially on saving data locally, which is solved using shared preferences.",
    image: ["/project/expense-manager/1.png"],
    link: "https://github.com/FelixA8/",
  },
  {
    name: "Willify",
    description:
      "Willify is a dynamic responsive website crafted using fundamental web technologies: vanilla HTML, CSS, and JavaScript. With five web pages encompassing the home, songs, registration, about us, and song details. Willify also implements the standard web principles, ensuring a clean and user-friendly interface. This project is dedicated to elevate my proficiency in web development, particularly in the aspect of web design. The project's pinnacle challenge lies in conceptualizing and structuring the website. This phase requires extensive research into web design principles and their practical implementation, also searching for references of other web pages.",
    image: ["/project/willify/1.png"],
    link: "https://github.com/FelixA8/",
  },
];

export const listPastProject: CurrentProject[] = [
  {
    name: "Portfolio With Vanilla HTML, CSS, JS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae perferendis libero voluptate accusantium vero asperiores dolore doloribus, fugiat eveniet. Voluptas, voluptatum assumenda.",
    image: ["/project/portfolio-htmlcssjs/1.png"],
    link: "https://github.com/FelixA8/My-Web-Portofolio/tree/master",
  },
  {
    name: "InnoNest Shopping App",
    description:
      "InnoNest is a furniture online shopping app that is powered using Flutter and Firebase. User can login using their normal email/ password or using external authentication using Google sign in. In the app, user can scroll into various furniture that are sold in the app, purchasing the product using a simple cart system and check their purchase history. User also can edit their username or address. InnoNest also has an augmented reality feature powered by Google ARCore that is implemented in every product. With this feature, user can preview the selected product in their current room with a camera. User able preview the product in a 3D Model preview in their device. As the project lead, I split the responsibilities for every team member, assigning tasks between designing, development and key presenter. The development of the app is also my responsibilities as an app developer.\nThis project is dedicated for SoCS Hackathon 2023, where our team managed to reach the grand finale after competing with over more than 30 other teams. ",
    image: ["/project/innonest/1.png"],
    link: "https://github.com/FelixA8/InnoNest",
  },
  {
    name: "Varchandise",
    description:
      "Varchandise stands as an innovative online shopping platform dedicated to action figures, created using frameworks and other languages including Flutter, Node.js, and MySQL. Flutter is responsible for the creation of the front-end interface, while Node.js forms the backbone of all backend operations, all seamlessly integrated with MySQL as the database. Featuring dual interfaces catering to both users and administrator, Users has the interface to browse and purchase their favorite action figures, while administrators efficiently manage products within the store. As the project lead, I split the responsibilities for every team member, assigning tasks between designing and development. In my leadership capacity, I actively contributed to the design process and collaborated closely with both front-end and back-end developers to ensure the project's success.\nDespite encountering challenges, such as in retrieving the admin token key securely stored within the .env file, our team persevered. Through many research and a deep understanding of REST API token requests, we successfully navigated this obstacle, demonstrating our adaptability and problem-solving prowess.",
    image: ["/project/varchandise/1.png"],
    link: "https://github.com/FelixA8/Varchandise",
  },
  {
    name: "Expense Manager",
    description:
      "ExpenseManager App is a user-friendly mobile application designed and made by Flutter Framework to help individuals and businesses efficiently track and manage their expenses. With its intuitive interface, users can easily log their daily transactions, edit and delete each transaction and check the stats of the total transactions.\nThe application is created using Flutter framework, where it responsible for all logics and interfaces in the app. As a sole developer, all of the features, design and development were created by one person. Many challenges has been faced, especially on saving data locally, which is solved using shared preferences.",
    image: ["/project/expense-manager/1.png"],
    link: "https://github.com/FelixA8/ExpenseManager",
  },
];
