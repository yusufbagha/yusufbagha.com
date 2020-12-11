import Resume from './YusufBagha.Resume.pdf'

// App Constants File


// Your Initials
export const initials = 'YB'

// Banner Heading And URL
export const topBanner = {
  heading: 'Actively Interviewing #OpenToWork',
  url: 'https://www.linkedin.com/posts/yusufbagha_opentowork-covid19layoffs-softwaredeveloper-activity-6721957203298816000-Z_sx'
}

// Header Navigation Links
export const navLinks = [
  {
    name: 'Experience',
    url: 'experience'
  },
  {
    name: 'About',
    url: 'about'
  },
  {
    name: 'Consulting',
    url: 'consulting'
  },
  {
    name: 'Projects',
    url: 'projects'
  },
  {
    name: 'Contact',
    url: 'contact'
  },
]

// Header Resume Button
export const enableHeaderResume = true
export const headerResumeButton = {
  text: 'Resume',
  target: '_blank',
  url: Resume
}

// Github And LinkedIn URLS
export const linkedinUrl = "https://linkedin.com/in/yusufbagha"
export const githubUrl = "https://github.com/yusufbagha"

// Home Headings
export const homeHeading1 = 'Hi, my name is Yusuf Bagha.'
export const homeHeading2 = 'I enjoy building scalable web apps.'

// Home Intro
export const homeIntro = 'I’m a full stack software engineer based out of New York with experience developing scalable, maintainable, and secure Web applications. From concept and architectural design, to frontend development, backend development, and devops'

// Home Buttons
export const contactButton = {
  text: 'Get In Touch',
  target: '',
  url: '/contact'
}
export const resumeButton = {
  text: 'Resume/CV',
  target: '_blank',
  url: Resume
}

//
export const loopText = ["print('Hello')", 'Bonjour', 'Hola', 'Ciao', 'Merhaba', 'Ni Hao', 'Jambo']


//Footer link
export const footerButton = {
  text: '2020 Bagha LLC - Built with React + Express',
  target: '_blank',
  url: 'https://github.com/yusufbagha/yusufbagha'
}


// Experience
export const workHistory = [
  {
    company: 'Pymetrics',
    position: 'Software Engineer',
    startDate: 'Feb 2019',
    endDate: 'July 2020',
    descriptions: [
      'Designed and implemented secure video upload to S3 directly from the frontend. 50K videos uploaded to date',
      'Studied Django change logs and manually modified 10K+ lines of code to incrementally update from v1.7 to v2.1',
      'Engineered lightweight, efficient, and scalable network speed test to check if user meets minimum requirements',
      'Increased application scalability by developing custom load testing script and identifying api inefficiencies',
    ]
  },
  {
    company: 'UDog',
    position: 'Engineering Manager',
    startDate: 'Aug 2018',
    endDate: 'Jan 2019',
    descriptions: [
      'Reduced unnecessary spending by engineering a Node microservice that logs walker activity in Mongo',
      'Recovered application source code after data loss and restored Android app to Play Store',
      'Faced critical server failure during first week and restored services without revenue loss',
      'Expedited dog walker hiring by developing internal automation software for human resources',
      'Refactored application structure and implemented future bookings to increase customer spending',
    ]
  },
  {
    company: 'Sandbox Innovations',
    position: 'Full Stack Software Developer',
    startDate: 'June 2018',
    endDate: 'Aug 2018',
    descriptions: [
      'Engineered administrative panel with varying functionalities for teachers, principals, and district heads',
      'Built and implemented a realtime Node chat application and into existing e-learning platform',
      'Managed engineering team and kept product development on track with business pivots',
      'Developed assignment based online homework platform with automated checks and reporting',
    ]
  },
  {
    company: 'Fresh Digital Group',
    position: 'Software Developer Intern',
    startDate: 'Feb 2018',
    endDate: 'Feb 2018',
    descriptions: [
      'Debugged featured Alexa skill with Amazon’s head voice engineer and deployed realtime fixes',
      'Collaborated with senior engineer to improve performance by migrating website from WP to React',
      'Researched technical viability and developed prototypes for Alexa and Google Assistant flight skills',
      'Accelerated application development cycles by switching to cross platform voice framework Jovo',
    ]
  },
  {
    company: 'Sandbox Innovations',
    position: 'Software Developer Intern',
    startDate: 'July 2017',
    endDate: 'Sept 2017',
    descriptions: []
  },
  {
    company: 'SConfess',
    position: 'Cofounder / Full Stack Software Developer',
    startDate: 'May 2016',
    endDate: 'July 2016',
    descriptions: [
      'Engineered application architecture that anonymized server-client communication using Express',
      'Vertically scaled Node application to handle 7000 users and debugged Mongo bottlenecks',
      'Utilized a mobile first approach to develop an app interface that automatically adapts to different devices',
      'Deployed realtime code fixes for app breaking bugs discovered by users without service interruption',
    ]
  },
  {
    company: 'SpaceTraces',
    position: 'Cofounder / Frontend Software Developer',
    startDate: 'Sept 2015',
    endDate: 'May 2015',
    descriptions: [
      'Pushed real time updates from server to client with asynchronous JavaScript and restful design',
      'Developed custom user interface that employs flexible layout and reactive templating',
      'Requested REST endpoints and programmed DOM manipulations based on server response',
    ]
  },
  {
    company: 'Front End Developer Intern',
    position: 'Cofounder / Full Stack Software Developer',
    startDate: 'June 2014',
    endDate: 'July 2014',
    descriptions: [
      'Worked with founders to design and develop a mobile friendly promotional website in WordPress',
      'Implemented custom styles on top of prefabricated theme and wrote JavaScript to create animations',
      'Modified PHP source code to add analytical functionalities and disable unwanted plugin behavior',
    ]
  },
]


