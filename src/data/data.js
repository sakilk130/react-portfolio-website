import { GitHub, LinkedIn } from '@material-ui/icons';

export const heroInfo = {
  name: 'Sakil Khan',
  image: '/images/myImage.jpeg',
  title: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Software Engineer',
    'React Developer',
    'Node.js Developer',
  ],
  contacts: [
    {
      id: 1,
      name: 'GitHub',
      icon: GitHub,
      username: 'sakilk130',
      link: 'https://github.com/sakilk130',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedIn,
      username: 'sakil-khan-076926145',
      link: 'https://www.linkedin.com/in/sakil-khan-076926145/',
    },
  ],
};

export const resumes = [
  {
    id: 1,
    year: 'March 2022 - Present',
    role: 'Software Engineer',
    companyName: 'Sheba Technologies Ltd.',
    companyUrl: 'https://www.shebatech.com.bd//',
    description:
      'Sheba Technologies Limited (STL) is part of the Sheba Group conglomerate which has been in Tech business for almost quarter of a century. STL is fully committed to bring world class technologically advanced Business Process Automation by delivering architecturally superior Software solution, Off-the-Shelf customizable Software, Artificial Intelligence and Machine Learning to our esteemed clients who are also our long-term strategic partners.',
  },
  {
    id: 1,
    year: 'January 2021 - February 2022',
    role: 'Software Engineer',
    companyName: 'PAP International Ltd.',
    companyUrl: 'http://papint.asia/',
    description:
      'PAP International is a Technology development and Business solution provider that covers all areas of the Industries.The company is now fully setup and operating in Bangladesh as an extension of the parent company in UK.',
  },
];

export const educations = [
  {
    id: 1,
    year: 'January 2017 - August 2021',
    universityName: 'American International University-Bangladesh (AIUB)',
    department: 'Bachelor of Science in Computer Science & Engineering',
    description: '',
  },
  {
    id: 2,
    year: 'April 2014 - December 2016',
    universityName: 'Shahmukhdum College, Rajshahi',
    department: 'Higher Secondary School Certificate',
    description: '',
  },
  {
    id: 3,
    year: 'January 2009 - December 2013',
    universityName: 'Asian School & College, Nachole',
    department: 'Secondary School Certificate',
    description: '',
  },
];

export const projects = [
  {
    id: 1,
    image: '/images/todoAppReactWithFirebase.png',
    name: 'Todo App',
    description: `This is a simple Todo app. You can store your todo list. Also you can Add, Edit,\
     Delete and View. As front end I used JavaScript library called 'React'. For designing I used\
     'Material-UI'. And Realtime Database or Cloud Firestore I used 'Firebase'. That's why the app is \
     so faster and robust.`,
    tools: ['javascript', 'react', 'firebase'],
    live: 'https://react-firebase-todo-app-d37d1.web.app/',
    source: 'https://github.com/sakilk130/react-firebase-todo-app',
  },
  {
    id: 2,
    image: '/images/reactWeatherApp.png',
    name: 'Weather App',
    description: `This is a Weather app. Where you can search a city and see current weather temperature, \
    wind speed etc. As front end I used JavaScript library called 'React'. I used 'OpenWeather' APIs For request \
    data and  display data.`,
    tools: ['javascript', 'react'],
    live: 'https://react-weather-app-v1.netlify.app/',
    source: 'https://github.com/sakilk130/react-weather-app',
  },
  {
    id: 3,
    image: '/images/portfolioUsingReact.png',
    name: 'My Portfolio Website',
    description: `This is my Portfolio Website. Also this is a part of projects. Where people can see some information \
    about me. There are 6 pages like Home, Resume, Portfolio, Contacts, Skills and Educations. For this project i \
    used 'React' for front end and 'Material-UI'.`,
    tools: ['javascript', 'react'],
    live: 'https://sakilkhan.netlify.app/',
    source: 'https://github.com/sakilk130/react-portfolio-website',
  },
];
