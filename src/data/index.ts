import { Title, PersonalInfo, ProjectExample } from './types'

export const middleBlocksTitles: Title[] = [
  {
    id: '01',
    title: 'about_me',
    infoMenuTitle: 'About Me',
  },
  {
    id: '02',
    title: 'portfolio',
    infoMenuTitle: 'Portfolio',
  },
  {
    id: '03',
    title: 'resume',
    infoMenuTitle: 'Resume',
  },
  {
    id: '04',
    title: 'contacts',
    infoMenuTitle: 'Contacts',
  },
]

export const personalInfo: PersonalInfo = {
  name: 'Nikita',
  surname: 'Savkin',
  profession: 'Frontend Developer',
  links: [
    {
      id: 'email',
      url: 'mailto:no.colour.you.like@gmail.com',
      icon: './img/icons/email.svg',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/nikitasavkin',
      icon: './img/icons/linkedin.svg',
    },
    {
      id: 'github',
      url: 'https://github.com/no-colour-you-like',
      icon: './img/icons/github.svg',
    },
  ],
}

export const ProjectExampleInfo: ProjectExample[] = [
  {
    title: 'Happy Inc',
    imageUrl: './img/portfolio/hj.jpeg',
    description:
      'Online platform for research and increase of employee engagement, that helps organizations to study the satisfaction level and needs of their employees in real time.',
    techs: ['React', 'Vue', 'TypeScript', 'Sass'],
    mainUrl: 'https://happy-job.ru/',
    type: 'commercial',
  },
  {
    title: 'Keyauto',
    imageUrl: './img/portfolio/keyauto.jpeg',
    description:
      'Online shop for car dealer "KeyAuto". In 2021 company took 108th place in the rating of the 200 largest private companies in Russia according to Forbes.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://keyauto.ru/',
    type: 'commercial',
  },
  {
    title: 'Luidor',
    imageUrl: './img/portfolio/luidor.png',
    description:
      'An online store for a car dealer who occupies a strong position in the market for the purchase and sale of used cars.',
    techs: ['Vue', 'JavaScript', 'TailwindCSS'],
    mainUrl: 'https://luidor-expert.ru/',
    type: 'commercial',
  },
  {
    title: 'Plants E-commerce',
    imageUrl: './img/portfolio/plants.jpg',
    description:
      'This SPA represents the plant store. Here you can find out the assortment of the store, information about products, register an account and add products to the basket.',
    techs: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/No-colour-you-like/plants-e-commerce',
    mainUrl: 'https://no-colour-you-like.github.io/plants-e-commerce/',
    type: 'personal',
  },
  {
    title: 'GYM Sports',
    imageUrl: './img/portfolio/gymsports.jpg',
    description:
      'In this project I created a convenient website for a fitness club, where you can find out all the information about training, schedule and payment terms.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Gymsports',
    mainUrl: 'https://no-colour-you-like.github.io/Gymsports/',
    type: 'personal',
  },
  {
    title: 'Launcher Inc.',
    imageUrl: './img/portfolio/launcher-inc.jpg',
    description:
      'Project for Launcher Inc. , a rocket engine testing company. This multi-page site contains information about the company, its product and personnel.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Launcher',
    mainUrl: 'https://no-colour-you-like.github.io/Launcher',
    type: 'personal',
  },
  {
    title: 'Photographer Portfolio',
    imageUrl: './img/portfolio/photographer.jpg',
    description: 'An animated portfolio showcasing the different aspects of a professional photographer.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Photographer',
    mainUrl: 'https://no-colour-you-like.github.io/Photographer/',
    type: 'personal',
  },
  {
    title: 'Perfect Home',
    imageUrl: './img/portfolio/perfect-home.jpg',
    description: 'Single-page animated website providing information about the services of a rental company.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Perfect-home',
    mainUrl: 'https://no-colour-you-like.github.io/Perfect-home/',
    type: 'personal',
  },
  {
    title: 'Crypto Dashboard',
    imageUrl: './img/portfolio/crypto.jpg',
    description:
      'This application allows to track three types of cryptocurrencies in real time. It is also possible to use a currency converter and track the dynamics of the cryptocurrency.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Crypto',
    mainUrl: 'https://no-colour-you-like.github.io/Crypto/',
    type: 'personal',
  },
  {
    title: 'Wallet Dashboard',
    imageUrl: './img/portfolio/wallet.jpg',
    description:
      'This project helps to record expenses and income. Allows to add and remove transactions, track the type and date of expenses.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Wallet',
    mainUrl: 'https://no-colour-you-like.github.io/Wallet/',
    type: 'personal',
  },
  {
    title: 'Movies Dashboard',
    imageUrl: './img/portfolio/movies.jpg',
    description:
      'In this application I created a user-friendly navigation with popular movies lists. This app allows to filter films by genre and year, as well as sort them by main parameters.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Movies',
    mainUrl: 'https://no-colour-you-like.github.io/Movies/',
    type: 'personal',
  },
  {
    title: 'Cinema Dashboard',
    imageUrl: './img/portfolio/cinema.jpg',
    description:
      'This app allows to purchase cinema tickets. It provides you with possibility to choose a movie, cinema, time and seat.',
    techs: ['JavaScript', 'Sass'],
    githubUrl: 'https://github.com/No-colour-you-like/Cinema',
    mainUrl: 'https://no-colour-you-like.github.io/Cinema/',
    type: 'personal',
  },
]

export const resume = {
  hardSkills: [
    {
      title: 'Languages',
      info: 'JavaScript, TypeScript, HTML, CSS/Sass',
    },
    {
      title: 'Technologies',
      info: 'React.js, Redux, Vue.js, Vuex, Webpack, TailwindCSS',
    },
    {
      title: 'Other',
      info: 'NPM, Git, Docker, Responsive design, Performance optimization',
    },
  ],
  education: [
    {
      title: 'React - The Complete Guide Course',
      source: 'Maximilian Schwarzmüller',
      year: '2020',
    },
    {
      title: 'The Complete JavaScript Course',
      source: 'Jonas Schmedtmann',
      year: '2019',
    },
    {
      title: 'Bachelor of Management',
      source: 'Moscow State University of Mechanical Engineering',
      year: '2016',
    },
  ],
  softSkills: ['Critical thinking', 'Adaptability and flexibility', 'Teamwork', 'Problem Solving'],
  experience: [
    {
      title: 'Front-end Developer | Happy Inc',
      gap: 'April 2022 - Present',
      mainDuty: 'Worked with applications in a single powerful online survey platform using React and Vue.',
      otherDuties: [
        "Architected 2 new personal reports for the company's clients, developed and redesigned platform components for compatibility with previous reports",
        'Engineered and maintained new major features for online survey application',
        'Developed new functions for the admin panel in order to flexibly configure the online survey application and the report panel',
        'Interacted productively with the designer, manager and backend developers to improve the quality of the whole system and create the most user friendly interface',
      ],
    },
    {
      title: 'Front-end Developer | Autodrive Agency',
      gap: 'March 2021 - April 2022',
      mainDuty: 'Developed e-commerce projects for car dealers and other businesses as a frontend engineer.',
      otherDuties: [
        'Developed 3 high-quality online stores from scratch using Vue 3, VueX, Vue Router, TailwindCSS with support for mobile and desktop versions of applications',
        'Implemented admin panels for online stores',
        'Investigated, evaluated and debugged application issues across time',
        'Improved the productivity and availability of projects using Google Lighthouse on 15%',
        'Introduced and enforced a consistent coding style across the applications using ESLint and Prettier',
        'Eliminated dead code thereby making it more readable for all team',
      ],
    },
    {
      title: 'Freelance Web Developer',
      gap: 'September 2019 - March 2021',
      mainDuty: "Developed and maintained code for clients' websites primarily using HTML, CSS (Sass) and JavaScript.",
      otherDuties: [
        'Implemented a "mobile-first" approach to creating new projects which increased the development speed by 20%',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Wrote modern, performant, and robust code for a diverse array of client',
      ],
    },
  ],
}

export const techs = [
  {
    title: 'JavaScript',
    iconUrl: './img/techs/js.svg',
    color: 'rgb(247, 223, 28)',
    shadow: '0 0 20px rgb(247, 223, 28)',
  },
  {
    title: 'TypeScript',
    iconUrl: './img/techs/typescript.svg',
    color: 'rgb(0, 122, 204)',
    shadow: '0 0 20px rgb(0, 122, 204)',
  },
  {
    title: 'React',
    iconUrl: './img/techs/react.svg',
    color: 'rgb(97, 218, 251)',
    shadow: '0 0 20px rgb(97, 218, 251)',
  },
  {
    title: 'Vue',
    iconUrl: './img/techs/vue.svg',
    color: 'rgb(63, 184, 131)',
    shadow: '0 0 20px rgb(63, 184, 131)',
  },
  {
    title: 'HTML5',
    iconUrl: './img/techs/html.svg',
    color: 'rgb(238, 101, 42)',
    shadow: '0 0 20px rgb(238, 101, 42)',
  },
  {
    title: 'CSS3',
    iconUrl: './img/techs/css.svg',
    color: 'rgb(38, 81, 229)',
    shadow: '0 0 20px rgb(38, 81, 229)',
  },
  {
    title: 'Sass',
    iconUrl: './img/techs/sass.svg',
    color: 'rgb(204, 102, 153)',
    shadow: '0 0 20px rgb(204, 102, 153)',
  },
  {
    title: 'TailwindCSS',
    iconUrl: './img/techs/tailwind.svg',
    color: 'rgb(5, 182, 213)',
    shadow: '0 0 20px rgb(5, 182, 213)',
  },
  {
    title: 'Git',
    iconUrl: './img/techs/git.svg',
    color: 'rgb(240, 60, 45)',
    shadow: '0 0 20px rgb(240, 60, 45)',
  },
  {
    title: 'ES Lint',
    iconUrl: './img/techs/eslint.svg',
    color: 'rgb(74, 50, 195)',
    shadow: '0 0 20px rgb(74, 50, 195)',
  },
  {
    title: 'Prettier',
    iconUrl: './img/techs/prettier.svg',
    color: 'rgb(85, 179, 180)',
    shadow: '0 0 20px rgb(85, 179, 180)',
  },
  {
    title: 'Figma',
    iconUrl: './img/techs/figma.svg',
    color: 'rgb(161, 89, 255)',
    shadow: '0 0 20px rgb(161, 89, 255)',
  },
]

export const aboutMe = {
  textBlocks: [
    "Hi! I specialise in creating unique web applications. I strive to create visually compelling, user-friendly applications with high-quality and well-designed code. I'm well-organized person, problem solver and responsible coder.",
    'I always care about what I create, keep learning new things and challenge myself. I enjoy gaining experience in the field of web development and discovering something new for myself.',
  ],
  techsTitle: "Here are a few technologies I've been working with:",
}
