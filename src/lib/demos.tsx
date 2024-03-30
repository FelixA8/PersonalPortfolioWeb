export type Item = {
  name: string;
  slug: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Experience',
    items: [
      {
        name: 'Education Background',
        slug: 'education-background',
      },
      {
        name: 'Past Experience',
        slug: 'past-experience',
      },
      {
        name: 'Ongoing Experience',
        slug: 'ongoing-experience',
      },
    ],
  },
  {
    name: 'Projects',
    items: [
      {
        name: 'Past Project',
        slug: 'past-project',
      },
      {
        name: 'Current Project',
        slug: 'current-project',
      },
    ],
  },
  {
    name: 'Skills',
    items: [
      {
        name: 'Web Development',
        slug: 'web-development',
      },
      {
        name: 'Android Development ',
        slug: 'android-development',
      },
      {
        name: 'UI/UX Design',
        slug: 'next-js',
      }
    ],
  },
  {
    name: 'Contact',
    items: [
      {
        name: 'GitHub',
        slug: 'github',
      },
      {
        name: 'Gmail',
        slug: 'gmail',
      },
      {
        name: 'LinkedIn',
        slug: 'linkedin',
      },
    ],
  },
];
