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
        name: "Past Experience",
        slug: "past-experience",
      },
      {
        name: "Ongoing Experience",
        slug: "ongoing-experience",
      },
    ],
  },
  {
    name: "Projects",
    items: [
      {
        name: "Past Project",
        slug: "past-project",
      },
      {
        name: "Current Project",
        slug: "current-project",
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
