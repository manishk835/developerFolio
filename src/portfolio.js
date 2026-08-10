/* Personal Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* Illustration */
const illustration = {
  animated: true
};

/* Greeting Section */
const greeting = {
  username: "Manish",
  title: "Hi, I'm Manish",
  subTitle: emoji(
    "Full Stack Web Developer skilled in building modern web applications using HTML, CSS, JavaScript, React, Next.js, Node.js and MongoDB. Currently pursuing BCA from Manipal University Jaipur."
  ),
  resumeLink: "/developerFolio/resume-new.pdf",
  displayGreeting: true
};

/* Social Links */
const socialMediaLinks = {
  github: "https://github.com/manishk835",
  linkedin: "https://linkedin.com/in/manishk835",
  gmail: "mailto:manishkumar.dev08@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

/* Skills */
const skillsSection = {
  title: "What I Do",
  subTitle: "Full Stack Web Developer focused on modern web technologies",
  skills: [
    emoji(
      "⚡ Build responsive and modern web interfaces using HTML, CSS and JavaScript"
    ),
    emoji(
      "⚡ Develop scalable frontend applications using React and Next.js"
    ),
    emoji("⚡ Build secure backend APIs using Node.js and Express"),
    emoji("⚡ Design and integrate MongoDB databases with REST APIs")
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true
};

/* Education */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Manipal University Jaipur",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "2024 - Present",
      desc:
        "Currently pursuing BCA through distance learning while focusing on full stack web development.",
      descBullets: [
        "Learning Full Stack Web Development",
        "Building real world web applications and portfolio projects"
      ]
    }
  ]
};

/* Tech Stack */
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "65%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

/* Work Experience */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "MERN Stack Developer Intern",
      company: "JSB Global Infotech Pvt. Ltd.",
      companylogo: require("./assets/images/jsb.png"),
      date: "Jun 2025 – Nov 2025",
      desc:
        "Worked as a MERN Stack Developer Intern contributing to both frontend and backend development of a web platform.",
      descBullets: [
        "Developed responsive pages including News, Reviews, Videos, Mileage and Colours using reusable components.",
        "Integrated REST APIs to fetch and display dynamic car data.",
        "Implemented city and brand based filtering and city selector functionality.",
        "Improved UI, navigation and overall user experience of the platform.",
        "Implemented OTP based authentication for secure user login.",
        "Debugged and optimized code for better performance and maintainability."
      ]
    }
  ]
};

/* Open Source */
const openSource = {
  showGithubProfile: "true",
  display: true
};

/* Projects */
/* Projects */
const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that I have built",
  projects: [
    {
      projectName: "RK Marketplace",
      projectDesc:
        "A modern marketplace web application built with Next.js, focused on scalable product and seller experiences.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/manishk835/newRk"
        }
      ]
    },
    {
      projectName: "ToolPro India",
      projectDesc:
        "A web project developed for ToolPro India with a modern responsive interface.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/manishk835/toolpro-india"
        }
      ]
    },
    {
      projectName: "Portfolio Frontend",
      projectDesc:
        "A responsive frontend portfolio project showcasing modern web development skills.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/manishk835/portfolio-frontend"
        }
      ]
    }
  ],
  display: true
};
/* Achievements */
const achievementSection = {
  display: false
};

/* Blogs */
const blogSection = {
  display: false
};

/* Talks */
const talkSection = {
  display: false
};

/* Podcast */
const podcastSection = {
  display: false
};

/* Resume */
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

/* Contact */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you have a job opportunity or project collaboration feel free to contact me.",
  number: "8302958489",
  email_address: "mailto:manishkumar.dev08@gmail.com"
};

/* Twitter */
const twitterDetails = {
  userName: "",
  display: false
};

/* Hireable */
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
