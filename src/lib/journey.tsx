export type Journey = {
  thumbnailTitle: string;
  thumbnailPicture: any;
  description: string;
  slug: string;
  timelineSection: {
    title: string;
    description: string;
    logo: any;
  }[];
};

export const listJourneys: {
  journey: Journey;
}[] = [
  {
    journey: {
      thumbnailTitle: "Web Development",
      thumbnailPicture: "Web Logo",
      description: "This is my Journey on web development. Long way to go :)",
      slug: "web-dev",
      timelineSection: [
        {
          title: "Vannila HTML, CSS, JavaScript",
          description:
            "Basic programming language that should be learned when developing a website. Personally I learn it through Youtube sessions and online courses. As a result, no more googling on how to center a div :D.",
          logo: "Web Logo",
        },
        {
          title: "React JS",
          description:
            "As a web developer, React JS is one of the best framework for creating front end websites more efficient. Personally, React JS is the more challenging part of my Journey, it is hard to learn, hard to master. This portfolio is creating using React Framework and took months of preparation.",
          logo: "React Logo",
        },
        {
          title: "Tailwind CSS",
          description:
            "Is a utility-first CSS framework that shortens your css code by creating it inline directly into the element that will be styled. This saves a lot of times and lines of code if you are working on a big website project.",
          logo: "Tailwind Logo",
        },
        {
          title: "NextJS",
          description:
            "Powered by React library, NextJS took routing and navigating to a whole easier level, creates a better peformance for the website (except when production stage) and bringing backend codes into front end level at ease.",
          logo: "NextJS Logo",
        },
        {
          title: "TypeScript",
          description:
            "Tired of finding errors that is related to syntax and changing pages to find the correct variable names? Again powered by React, Typescript catches mistakes in the code and pass it as an readable error that can be detected easily. Typescript is a must go when creating a very big scalable project that has many types of data.",
          logo: "TypeScript Logo",
        },
      ],
    },
  },
  {
    journey: {
      thumbnailTitle: "Mobile Development",
      thumbnailPicture: "Android Logo",
      description:
        "This is my Journey on mobile development. Also, a way to go :)",
      slug: "mobile-dev",
      timelineSection: [
        {
          title: "Flutter Framework",
          description:
            "A framework built by google that integrates for Android and iOS without creating a seperate code for each environment. Learn it in the third semester and personally, it is one of the best easy to learn, hard to master framework for mobile development.",
          logo: "Flutter Logo",
        },
        {
          title: "Kotlin//Android Studio",
          description:
            "As an alternative of Java. Kotlin serves a more simple syntax and usually, used for mobile development. Designing the UI is easy (as we can drag and drop the component), but other aspect is OOP related which is challenging. It has an advantages which is more customizable that Flutter, but the code is not compatible for iOS, hence you will need more code to write.",
          logo: "Kotlin Logo",
        },
      ],
    },
  },
  {
    journey: {
      thumbnailTitle: "Back End Development",
      thumbnailPicture: "NodeJS Logo",
      description:
        "Learning front end is not complete when there is not backend in there. Unless it is combined 😊.",
      slug: "backend-dev",
      timelineSection: [
        {
          title: "NodeJS",
          description:
            "NodeJS, is used for server-side programming, where data from API Request and client side can be connected through a third party software.",
          logo: "NodeJS Logo",
        },
        {
          title: "MySQL",
          description:
            "Databases are essential for all kinds of software applications and transactions. For instance, login feature, web search, item purchase are all stored in a database. Handling and be in SQL is a must, since all applications eventually will store a data.",
          logo: "MySQL Logo",
        },
      ],
    },
  },
  {
    journey: {
      thumbnailTitle: "Other",
      thumbnailPicture: "GitHub Logo",
      description: "Other things that is great to be learn",
      slug: "other",
      timelineSection: [
        {
          title: "GitHub",
          description:
            "Save and store your code online, create a checkpoint if anything ever happens to your code. Simple and useful :D",
          logo: "GitHub Logo",
        },
        {
          title: "Vercel",
          description:
            "Deploy your React websites in Vercel, one of the best hosting platform and it's free!",
          logo: "Vercel Logo",
        },
      ],
    },
  },
];
