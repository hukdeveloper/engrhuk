import {
  AccessTime,
  AutoStories,
  EmojiObjects,
  Engineering,
  GroupWork,
  PsychologyAlt,
} from "@mui/icons-material";

export const mainData = {
  personel: [
    {
      title: "Name",
      value: "Haris Umar",
      isStripped: true,
    },
    {
      title: "Father Name",
      value: "Muhammad Umar",
      isStripped: false,
    },
    {
      title: "Email",
      value: "haris29268@gmail.com",
      isStripped: true,
    },
    {
      title: "Age",
      value: "24",
      isStripped: false,
    },
    {
      title: "Gender",
      value: "Male",
      isStripped: true,
    },
    {
      title: "Phone",
      value: "+92-347-8481231",
      isStripped: false,
    },
    {
      title: "Country",
      value: "Pakistan",
      isStripped: true,
    },
    {
      title: "Address",
      value:
        "Village & P/O Bahadur Khel, Tehseel B.D Shah, District Karak, KPK",
      isStripped: false,
    },
  ],
  work: [
    {
      position: "IT Manager",
      employer: "Shaheen & Sons",
      desc: "A Multisector company that include construction, mining, hoteling and health.",
      startDate: "2-01-2024",
      endDate: "Current",
      url: "https://www.shaheenandsons.com.pk/",
    },
    {
      position: "Web Developer",
      employer: "Quality Enhacement Cell",
      desc: "In Quality Enhacement Cell of Karkoram International University to develop and manage an evaluation and performance dashboard.",
      startDate: "10-11-2023",
      endDate: "Current",
      url: "https://www.kiu.edu.pk/",
    },
    {
      position: "Software Developer",
      employer: "Karakoram International University",
      desc: "Financial Aid Office - Scholarships data management.",
      startDate: "08-24-2022",
      endDate: "09-13-2023",
      url: "https://qec.kiu.edu.pk/",
    },
  ],
  education: [
    {
      title: "BS Software Engineering",
      institue: "Karakoram International University",
      from: "2019",
      to: "Current",
      address: "Gilgit",
      country: "Pakistan",
      image: "/assets/resume/graduate.png",
    },
    {
      title: "Intermediate",
      institue: "Meritorious Central College",
      from: "2016",
      to: "2017",
      address: "Peshawar",
      country: "Pakistan",
      image: "/assets/resume/college.png",
    },
    {
      title: "Matriculation",
      institue: "Chokara Science School & College Chokara",
      from: "2015",
      to: "2016",
      address: "Karak",
      country: "Pakistan",
      image: "/assets/resume/school.png",
    },
  ],
  skills: [
    {
      title: "Nextjs",
    },
    {
      title: "React",
    },
    {
      title: "Mongodb",
    },
    {
      title: "Node",
    },
    {
      title: "Material UI",
    },
    {
      title: "Prime React",
    },
    {
      title: "MySQL",
    },
    {
      title: "Java",
    },
    {
      title: "Sanity",
    },
    {
      title: "JavaFx",
    },
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "JavaScript",
    },
    {
      title: "Netbeans",
    },
    {
      title: "Eclipse",
    },
    {
      title: "Git & Github",
    },
  ],
  orgSkills: [
    {
      title: "Leaderships",
      icon: <GroupWork />,
    },
    {
      title: "Management",
      icon: <AccessTime />,
    },
    {
      title: "Creative",
      icon: <EmojiObjects />,
    },
    {
      title: "Team Work",
      icon: <Engineering />,
    },
    {
      title: "Quick Learner",
      icon: <AutoStories />,
    },
    {
      title: "Problem Solver",
      icon: <PsychologyAlt />,
    },
  ],
  specializations: [
    {
      title: "Software Engineering",
      institue: "The Hong Kong University of Science and Technology",
      issuedBy: "Coursera",
      link: "https://coursera.org/share/195fb4c6c61bba77b84a5d0c2e5cb6e7",
      licendID: "195fb4c6c61bba77b84a5d0c2e5cb6e7",
      date: "Jan, 2023",

      image: "/assets/resume/hkus.png",
    },
    {
      title: "Become a Software Developer",
      institue: "LinkedIn Learning",
      issuedBy: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/c9f2ef941e3aff989b89bba4efcd473a495bfa7d5378c7f5a0feb0f6d0ecfe14",
      licendID: "c9f2ef941e3aff989b89bba4ef.....",
      date: "Mar, 2022",
      image: "/assets/resume/linkedIn.jpeg",
    },

    {
      title: "Master-In-Demands Professional Soft Skills",
      institue: "LinkedIn Learning",
      issuedBy: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/e74cd8fa175910b5981b54db6404d497483e60e1cdc65157d19c323c77b99539?trk=backfilled_certificate",
      licendID: "e74cd8fa175910b5981b54d.....",
      date: "Dec, 2021",

      image: "/assets/resume/linkedIn.jpeg",
    },
    {
      title: "Object Oriented Programming in Java",
      institue: "University of California San Diego & Duke University",
      issuedBy: "Coursera",
      link: "https://coursera.org/share/ab801da8c569ee846ad357461de42e70",
      licendID: "ab801da8c569ee846ad357461de42e70",
      date: "Aug, 2021",
      image: "/assets/resume/duke.png",
    },
  ],
};
