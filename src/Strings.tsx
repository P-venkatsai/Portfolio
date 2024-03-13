export type ExperienceDetailType = {
  title: string;
  subHeading1?: string;
  subHeading2?: string;
  duration?: string;
  description?: string;
  skills?: string[];
  image?: string;
  notHighlightDiv?: boolean;
  company?: string;
  redirect?: string;
  info?: string;
};

export const NAME: string = "Venkat Sai Putagumpalla";
export const POSITION: string = "Graduate Student at UF";
export const SHORT_SUMMARY: string =
  "UF student, adept in software engineering, skilled in Java, Python, and cloud tech.";

export const GITHUB_ICON: string =
  "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";
export const LINKEDIN_ICON: string =
  "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";
export const LEETCODE_ICON: string =
  "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z";
export const INSTAGRAM_ICON: string =
  "M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34";
export const REDIRECT_ICON: string =
  "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z";
export const ABOUT_ME: string[] = [
  `As a Master of Science student in Computer Science at the University of Florida, I am passionate about creating innovative solutions that leverage cutting-edge technologies and address real-world problems. My academic interests include distributed systems, web development, and data science.`,
  `Prior to UF, I was a Systems Engineer at Tata Consultancy Services. I integrated masking techniques into the Dataplus platform and implemented service logs with Apache Log4j for troubleshooting. I've also created projects like a distributed Twitter Clone engine for 10,000 users and a movie reviews website using The Movie Database (TMDB) API.`,
  `With my technical skills, including Java, JavaScript, TypeScript, SharePoint, SpringBoot, and more, I am eager to take on new challenges and opportunities that will allow me to apply my knowledge and creativity to impactful projects. I am also a team player, a lifelong learner, and a motivated problem-solver. Beyond my work and studies, I enjoy gaming, cycling, and music.`,
];

export const EXPERIENCE_DETAILS: ExperienceDetailType[] = [
  {
    title: "Systems Engineer",
    company: "T.C.S",
    duration: "DEC 2021 - AUG 2022",
    redirect:
      "https://www.tcs.com/what-we-do/products-platforms/tcs-mastercraft/solution/mastercraft-dataplus-data-privacy-solution",
    description:
      "After successfully completing my initial 6-month tenure, I was promoted to Systems Engineer. In this role, I was responsible for managing and maintaining the entire masking aspect of Dataplus. Through my efforts, I successfully implemented several features from earlier versions of the software into the latest version, resulting in significant improvements to its functionality.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "Angular",
      "Spring Boot",
      "Maven",
      "Jenkins",
      "Python",
      "SharePoint",
      "XML",
    ],
  },
  {
    title: "Assistant Systems Engineer",
    company: "T.C.S",
    duration: "JUN - DEC 2021",
    redirect:
      "https://www.tcs.com/what-we-do/products-platforms/tcs-mastercraft/solution/mastercraft-dataplus-data-privacy-solution",
    description:
      "As an entry-level employee at TCS, my initial three months were dedicated to learning and understanding the concepts and applications of Dataplus and the process of data masking. In the following three months, I was able to apply this knowledge by actively working on and contributing to the development of new features for Dataplus.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "Angular",
      "Spring Boot",
      "Maven",
      "Jenkins",
      "Python",
      "SharePoint",
      "XML",
      "Tortoise SVN",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Versatile Mobitech",
    duration: "Sep 2020 - May 2021",
    redirect: "https://www.versatilemobitech.com/",
    description:
      "Achieved a 27% boost in conversion rates by simplifying checkout processes and implementing real-time inventory management. Reduced workload by 30% through automated invoicing with node-schedule and ensured timely payments via SMTP email reminders.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "React",
      "Node.js",
      "GitHub",
      "MongoDB",
    ],
  },
];

export const RESUME_LINK: ExperienceDetailType[] = [
  {
    title: "View Full Resume",
    notHighlightDiv: true,
    redirect:
      "/Portfolio/blob/main/src/images/VenkatSai_Putagumpalla_resume.pdf",
  },
];

export const PROJECTS_DETAILS: ExperienceDetailType[] = [
  {
    title: "Twitter Clone Engine",
    image: "/Portfolio/blob/main/src/images/twitterClone.jpg",
    description:
      "Leveraged Erlang and Zipf Distribution in a Distributed System framework to build a scalable Twitter Clone engine, achieving a 25% boost in tweet delivery speed via server-side optimizations and caching, supporting 10k concurrent users with full features and real-time interactions.",
    redirect: "https://github.com/P-venkatsai/Twitter_Clone",
  },
  {
    title: "Movie Reviews Website",
    image: "/Portfolio/blob/main/src/images/movieReviews.jpg",
    description:
      "Built a dynamic Web App integrating with The Movie Database (TMDB) via API using JavaScript, BootStrap 5, and Node.js, enhancing UX through robust authentication and optimizing website performance by 40% with caching and 50% faster page loads via lazy loading.",
    redirect: "https://projectmoviess.netlify.app",
  },
  {
    title: "Gator Taxi",
    image: "/Portfolio/blob/main/src/images/gatorTaxi.jpg",
    description:
      "Engineered ride-request system for Gator Taxi, managing 2000+ riders, implementing Red-Black Tree and custom min-heap for optimized ride selection. Integrated both data structures achieving O(log n) time complexity for CRUD operations.",
    redirect: "https://github.com/P-venkatsai/GatorTaxi",
  },
];
