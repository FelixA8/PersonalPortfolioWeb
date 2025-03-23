export type Event = {
  name: string;
  date: string;
  role: String;
  location: string;
};

export const experiences: {
  experienceDate: string;
  experienceRole: string;
  experienceName: string;
  experienceCommit: number;
  event: Event[];
}[] = [
    {
      experienceDate: "Febuary 2025 - Present",
      experienceRole: "iOS Programmer Intern",
      experienceName: "Blibli",
      experienceCommit: 0,
      event: [

      ],
    },
    {
      experienceDate: "September 2024 - Present",
      experienceRole: "Tech Division",
      experienceName: "Economic Space",
      experienceCommit: 0,
      event: [

      ],
    },
    {
      experienceDate: "April 2024 - Febuary 2025",
      experienceRole: "Member",
      experienceName: "Ureeka",
      experienceCommit: 0,
      event: [

      ],
    },
    {
      experienceDate: "Febuary 2024 - Febuary 2025",
      experienceRole: "Mentor",
      experienceName: "School of Computer Science",
      experienceCommit: 0,
      event: [

      ],
    },
    {
      experienceDate: "Febuary 2024 - Febuary 2025",
      experienceRole: "Head Treasurer",
      experienceName: "Data Science Club 2024/2025",
      experienceCommit: 4,
      event: [
        {
          name: "Data Science Short Course - Stanford University",
          date: "September 2024",
          role: "Treasurer",
          location: "BINUS University",
        },
        {
          name: "LDKCP Gen-2 Data Science Club",
          date: "July 2024",
          role: "Leader",
          location: "BINUS University",
        },
        {
          name: "Outventure 2024",
          date: "June 2024",
          role: "Supervisor",
          location: "BINUS University",
        },
        {
          name: "DSC Cascade 2024",
          date: "June 2024",
          role: "Supervisor",
          location: "BINUS University",
        },
      ],
    },
    {
      experienceDate: "July 2023 - February 2024",
      experienceRole: "Assistant Treasurer",
      experienceName: "Data Science Club 2023/2024",
      experienceCommit: 4,
      event: [
        {
          name: "LDKA-2 Data Science Club",
          date: "January 2024",
          role: "Treasurer",
          location: "BINUS University",
        },
        {
          name: "PKM Data Science Club",
          date: "November 2023",
          role: "Volunteer",
          location: "SMA Tarsisius II",
        },
        {
          name: "Welcoming Party Data Science Club 2024/2025",
          date: "October 2023",
          role: "Treasurer",
          location: "BINUS Kijang",
        },
        {
          name: 'Seminar: "New Era of Data Science, Generative AI in 5.0 Industry"',
          date: "September 2023",
          role: "Event Organizer",
          location: "Auditorium BINUS University",
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
          name: "DV Hope 2023",
          date: "December 2023",
          role: "Committee",
          location: "Binus University",
        },
        {
          name: "Buddhist Camp 2023",
          date: "July 2023",
          role: "Committee",
          location: "Bumi Perkemahan Mandalawangi Cibodas",
        },
        {
          name: "Waisak Puja 2567 B.E./2025",
          date: "May 2023",
          role: "Volunteer",
          location: "Auditorium Binus Anggrek",
        },
      ],
    },
  ];