export type Event = {
  name: string;
  date: string;
  location: string;
};

export const pastExperiences: {
  experienceDate: string;
  experienceRole: string;
  experienceName: string;
  experienceCommit: number;
  event: Event[];
}[] = [
  {
    experienceDate: "February 2023 - February 2024",
    experienceRole: "Activist",
    experienceName: "Data Science Club 2023/2024",
    experienceCommit: 4,
    event: [
      {
        name: 'Seminar: "New Era of Data Science, Generative AI in 5.0 Industry"',
        date: "September 2023",
        location: "Auditorium Binus Anggrek",
      },
      {
        name: "Welcoming Party Data Science Club 2024/2025",
        date: "September 2023",
        location: "Auditorium Binus Anggrek",
      },
      {
        name: "PKM Data Science Club",
        date: "September 2023",
        location: "Auditorium Binus Anggrek",
      },
      {
        name: "LDKA-2 Data Science Club",
        date: "January 2024",
        location: "Binus Syahdan",
      },
    ],
  },
  {
    experienceDate: "February 2023 - February 2024",
    experienceRole: "Activist",
    experienceName: "Keluarga Mahasiswa Buddhist Dhammavaddhana",
    experienceCommit: 3,
    event: [
      {
        name: "Waisak Puja 2567 B.E./2025",
        date: "May 2023",
        location: "Auditorium Binus Anggrek",
      },
      {
        name: "Buddhist Camp 2023",
        date: "July 2023",
        location: "Bumi Perkemahan Mandalawangi Cibodas",
      },
      {
        name: "DV Hope 2023",
        date: "December 2023",
        location: "Binus University",
      },
    ],
  },
];

export const ongoingExperiences: {
  experienceDate: string;
  experienceRole: string;
  experienceName: string;
  experienceCommit: number;
  experienceDescription: string;
  event: Event[];
}[] = [
  {
    experienceDate: "February 2024 - Present",
    experienceRole: "Head Treasurer",
    experienceName: "Data Science Club 2024/2025",
    experienceCommit: 0,
    experienceDescription:
      "As a treasurer of Data Science Club, my duty and responsibility is to Report financial statements of the organization, Leading and managing people, creating decisions.",
    event: [],
  },
  {
    experienceDate: "February 2024 - Present",
    experienceRole: "Mentor",
    experienceName: "Binus University",
    experienceCommit: 0,
    experienceDescription:
      "As a mentor, I help student to Teaching students who are struggling to maintain their grades, Create learning resources and Implementing effective teaching strategies",
    event: [],
  },
];
