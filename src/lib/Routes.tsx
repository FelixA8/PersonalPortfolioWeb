export type Item = {
  name: string;
  slug: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: "Experience",
    items: [
      {
        name: "Education Background",
        slug: "education-background",
      },
      {
        name: "Experience",
        slug: "experience",
      },
      {
        name: "Projects",
        slug: "projects",
      },
    ],
  },
  {
    name: "Others",
    items: [
      {
        name: "Certification",
        slug: "certification",
      },
      {
        name: "Web Profile",
        slug: "web-profile",
      },
      {
        name: "Journey",
        slug: "learning-journey",
      },
    ],
  },
  {
    name: "Contact",
    items: [
      {
        name: "Send Message",
        slug: "send-message",
      },
    ],
  },
];
