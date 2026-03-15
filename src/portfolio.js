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
    "BCA student from Manipal University Jaipur and a Full Stack Web Developer focused on building modern web applications using JavaScript, React, Next.js and Node.js."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

/* Social Links */

const socialMediaLinks = {
  github: "https://github.com/manishk835",
  linkedin: "",
  gmail: "manishkumar.dev08@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

/* Skills */

const skillsSection = {
  title: "What I Do",
  subTitle: "Full Stack Web Developer",

  skills: [
    emoji("⚡ Build responsive web interfaces using HTML, CSS and JavaScript"),
    emoji("⚡ Develop modern web applications using React and Next.js"),
    emoji("⚡ Build backend APIs using Node.js and Express"),
    emoji("⚡ Work with MongoDB databases and REST APIs")
  ],

  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" }
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
      desc: "Currently pursuing BCA through distance learning while focusing on web development.",
      descBullets: [
        "Learning Full Stack Web Development",
        "Building real world web projects"
      ]
    }
  ]
};

/* Tech Stack */

const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
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
      role: "Web Developer Intern",
      company: "Your Internship Company",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "6 Month Internship",
      desc: "Worked on building and improving web applications using modern web technologies.",
      descBullets: [
        "Developed responsive UI using HTML, CSS and JavaScript",
        "Worked with React.js components and frontend features",
        "Collaborated on backend APIs using Node.js"
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

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that I have built",

  projects: [
    {
      projectName: "Ecommerce Website",
      projectDesc:
        "Full stack ecommerce web application with authentication and product management.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/manishk835"
        }
      ]
    },
    {
      projectName: "Authentication System",
      projectDesc:
        "Secure login and registration system using Node.js, JWT and MongoDB.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/manishk835"
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
  title: emoji("Contact Me"),
  subtitle: "If you have an opportunity or project feel free to contact me.",
  number: "8302958489",
  email_address: "manishkumar.dev08@gmail.com"
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
