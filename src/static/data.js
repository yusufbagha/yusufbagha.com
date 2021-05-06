/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  static data for yusufbagha.com
    - If you're interested in using this for your own website, 
      you can start by editing the variables in this page

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { Link } from 'react-router-dom'
import Resume from './Yusuf.Bagha.Resume.2021.pdf'
import { faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons'


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  general 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const linkedinUrl = "https://linkedin.com/in/yusufbagha"
export const githubUrl = "https://github.com/yusufbagha"
export const email = "yusuf@yusufbagha.com"
export const calendlyUrl = "https://calendly.com/yusufbagha"

// Your Initials
export const initials = 'YB'

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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Header 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Banner 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const topBanner = {
  heading: 'Plant a tree and join the fight against deforestation #OneTreePlanted',
  url: 'https://onetreeplanted.org/products/plant-trees?variant=31367539589182'
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  home 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const homeHeadings = ['Hi, my name is Yusuf Bagha.', 'I build scalable web applications to match growing customer demand for your company.']
export const homeParagraphs = ['I’m a full stack software engineer based out of New York. I have experience developing scalable, maintainable, and secure Web applications. From concept and architectural implementation, to frontend development, backend development, and devops']

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  experience 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


export const workHistory = [
  {
    company: 'Insider Intelligence',
    position: 'Software Engineer',
    startDate: 'May 2021',
    endDate: 'Present',
    descriptions: []
  },
  {
    company: 'Pymetrics',
    position: 'Software Engineer',
    startDate: 'Feb 2019',
    endDate: 'July 2020',
    descriptions: [
      'Engineered lightweight, efficient, and scalable network speed test to check if user meets minimum requirements',
      'Studied Django change logs and manually modified 10K+ lines of code to incrementally update from v1.7 to v2.1',
      'Accomplished GDPR compliance by making PII downloadable, and deleting user data upon account termination',
      'Investigated production bugs reported by clients on detective duty and manually processed user gameplay data',
      'Developed and executed migration plan to remove unnecessary data for 2 million users after testing in staging',
      'Designed and implemented secure video upload to S3 directly from the frontend. 50K videos uploaded to date',
      'Increased application scalability by developing custom load testing script and identifying API inefficiencies',
      'Developed flexible and performant endpoints for data driven insight visualization using raw user trait data'
    ]
  },
  {
    company: 'UDog',
    position: 'Engineering Manager',
    startDate: 'Aug 2018',
    endDate: 'Jan 2019',
    descriptions: [
      'Reduced unnecessary spending by engineering a Node microservice that logs and reports walker activity in Mongo',
      'Expedited dog walker hiring by developing internal automation software for human resources to match growth',
      'Faced critical server failure during first week and manually restored services without customer or revenue loss',
      'Refactored application structure and increased consumer spending by implementing future dog walk bookings',
      'Recovered application source code after accidental data loss and swiftly restored Android app to Play Store'
    ]
  },
  {
    company: 'Sandbox Innovations',
    position: 'Full Stack Software Developer',
    startDate: 'May 2018',
    endDate: 'Aug 2018',
    descriptions: [
      'Engineered custom administrative panel with varying functionalities for teachers and principals',
      'Developed assignment based online homework platform with automated checks and reporting',
      'Managed engineering team and kept product development on track with business pivots',
      'Built and integrated a real time Node chat application into existing e-learning platform'
    ]
  },
  {
    company: 'Fresh Digital Group',
    position: 'Software Developer Intern',
    startDate: 'Feb 2018',
    endDate: 'Feb 2018',
    descriptions: [
      'Researched technical viability and developed prototypes for Alexa and Google Assistant flight skills',
      'Collaborated with senior engineer to improve performance by migrating website from WP to React',
      'Accelerated application development cycles by switching to cross platform voice framework Jovo',
      'Debugged featured Alexa skill with Amazon’s head voice engineer and deployed realtime fixes',

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
      'Utilized a mobile first approach to develop an app interface that automatically adapts to different devices',
      'Deployed realtime code fixes for app breaking bugs discovered by users without service interruption',
      'Engineered application architecture that anonymized server-client communication using Express',
      'Vertically scaled Node application to handle 7000 users and debugged Mongo bottlenecks',
    ]
  },
  {
    company: 'SpaceTrades',
    position: 'Cofounder / Frontend Software Developer',
    startDate: 'Sept 2015',
    endDate: 'May 2015',
    descriptions: [
      'Pushed real time updates from server to client with asynchronous JavaScript and restful design',
      'Requested REST endpoints and programmed DOM manipulations based on server response',
      'Developed custom user interface that employs flexible layout and reactive templating',
    ]
  },
  {
    company: 'TrackPointMedia',
    position: 'Front End Developer Intern',
    startDate: 'June 2014',
    endDate: 'July 2014',
    descriptions: [
      'Implemented custom styles on top of prefabricated theme and wrote JavaScript to create animations',
      'Worked with founders to design and develop a mobile friendly promotional website in WordPress',
      'Modified PHP source code to add analytical functionalities and disable unwanted plugin behavior',
    ]
  },
]

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  about 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const loopText = ['Hej, Halløj', 'Bonjour', 'Shikamoo', 'Guten Tag', 'Hola', 'Namaskar', 'Anyoung haseyo', 'Privet', 'Ahlan', 'Merhaba', 'Cześć, Witaj', 'Yassas', 'Nǐ hǎo']
export const aboutHeading = "I'm Yusuf"
export const aboutParagraphs = [`I'm a full stack Python &amp; JavaScript engineer from New York. I started programming in 2013 and since then I've founded my own company. Worked as an engineering manager at <a href="https://www.prowalktoday.com/" target="_blank">UDog</a>, and most recently as a full stack software engineer at <a href="http://pymetrics.ai" target="_blank">pymetrics</a>. You can learn about my full work history by clicking <a href="/experience">here</a>.`, "Technologies I've worked with recently: React, Django, Node, Mongo, PostgreSQL"]



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  consulting 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const consultingHeadings = ['Software Engineering Consulting']
export const consultingParagraphs = [`Bagha LLC works with clients of all shapes and sizes and across a number of industries, from finance and healthcare to the New York Mets. Whatever challenge your business faces, Bagha LLC has a solution for you. Whether you’re dealing with growing technical debt or are having difficulty scaling your product, please feel free to <a href="/contact">reach out</a> with a brief description of your current predicament and it will be my pleasure to assist you.`]
export const clients = [
  {
    company: 'ShuffleThink',
    project: '',
    url: 'http://shufflethink.com',
    year: '2021',
  },
  {
    company: 'Jeffrey Modell Foundation',
    project: '',
    url: 'http://info4pi.org',
    year: '2020',
  },
  {
    company: 'Rose Digital',
    project: 'SNY.TV',
    url: 'https://www.sny.tv/',
    year: '2020',
  },
  {
    company: 'LegitMark',
    project: 'Resell Reviews',
    url: 'https://legitmark.com/',
    year: '2019',
  },
  {
    company: 'Layla Capital',
    project: '',
    url: 'https://www.laylacapital.com/',
    year: '2018',
  },
]

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  projects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const projectsHeadings = ['Tapsalot']
export const projectsParagraphs = [`I built this massive multiplayer game disguised as a web application with Node and React back in 2019. With over <b style="font-weight:600;">415K</b> network requests since its release, this app has seen a ton of traffic and its fair share of hackers. I was fortunate enough to give a talk titled <span>"I built the world's dummest Meteor app"</span> at <a href="https://www.meetup.com/ApolloMeteorNYC/" target="_blank">ApolloMeteorNYC</a>. I could try to tell you about the game, but you'll have a better experience if you explore on your own. More fun if you play with a friend. Checkout the source code <a href="https://github.com/yusufbagha/tapsalot" target="_blank">here</a>.`]
export const projectIframeUrl = "http://54.209.191.220/"

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  contact 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const contactHeadings = ['Please Get In Touch']
export const contactParagraphs = ["I'm actively looking to add new clients and am excited to hear from you and your colleagues!", "Let's setup a time to chat and I can tell you more in depth about my prior experiences and what technologies I'm most excited about!", "Please feel free to pick my brain obout any challenges your organization is facing. I really enjoy connecting with new people."]
export const contacts = [
  {
    icon: faCalendar,
    url: calendlyUrl,
    text: calendlyUrl,
  },
  {
    icon: faEnvelope,
    url: `mailto:${email}`,
    text: email,
  },
  {
    icon: faLinkedinIn,
    url: linkedinUrl,
    text: linkedinUrl,
  },
  {
    icon: faGithub,
    url: githubUrl,
    text: githubUrl,
  },
]

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Footer 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const footerButton = {
  text: '2020 Bagha LLC - Built with React',
  target: '_blank',
  url: 'https://github.com/yusufbagha/yusufbagha.com'
}
