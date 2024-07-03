import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://classplusapp.com/growth/wp-content/uploads/2023/07/Blog-image-Jan_How-to-use-Round-Robin-Teaching-Strategy_How-to-teach-yoga-online-scaled.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/hannalam/YogaCollabHub',
    title: 'YogaCollabHub',
    text: 'This is a Django based web app that help yogi explore, learn, and grow on their yoga journey. The platform have four key features: Technology Integration, Knowledge Sharing, Collaboration Opportunities and Community Engagement.',
  },
  {
    id: nanoid(),
    img: 'https://private-user-images.githubusercontent.com/63362052/300541831-dfe1a7fe-eaef-4997-9089-404c45b4b156.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwMzA4NDcsIm5iZiI6MTcyMDAzMDU0NywicGF0aCI6Ii82MzM2MjA1Mi8zMDA1NDE4MzEtZGZlMWE3ZmUtZWFlZi00OTk3LTkwODktNDA0YzQ1YjRiMTU2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAzVDE4MTU0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdlZmYzNzk4ZjFhODAyMDBiZDQyNDUzNTExNmUzZjc0YmNkZWRiYTRkZTc2Y2RjM2YxNTgxYTI3OTI1YThjZGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.SHhM_3gwT3hbmKZTH31OhdOl-mnXTI7mbHHP3vAINLM',
    url: 'hhttps://app.netlify.com/sites/galaxia-web/overview',
    github: 'https://github.com/hannalam/Galaxia-website',
    title: 'Galaxia-website',
    text: 'A simple HTML, CSS, JavaScript website. A project that provide information about the theme park.',
  },
  {
    id: nanoid(),
    img: 'https://private-user-images.githubusercontent.com/63362052/300546594-474f1bca-910a-4032-90ab-0a7b93569eb5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwMzA3ODMsIm5iZiI6MTcyMDAzMDQ4MywicGF0aCI6Ii82MzM2MjA1Mi8zMDA1NDY1OTQtNDc0ZjFiY2EtOTEwYS00MDMyLTkwYWItMGE3YjkzNTY5ZWI1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAzVDE4MTQ0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2NzEwMzVmN2I2ZTk5N2RjOTM1MGU0ZDc1YzVjMjEwNjMwYjg2MWQ3OTY3MmE1OGE1NWQyOWFmYjhmMGY4MjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ma5KZ4_JC22xS1FH4VzXpES7ExkVCpMfRQbnHkdVSAk',
    url: 'https://yoga-newsletter-website.netlify.app/',
    github: 'https://github.com/hannalam/Yoga-newsletter-website',
    title: 'yoga newsletter',
    text: 'In this website, you can find the information about yoga poses and learn some yoga flow in the online class.',
  },
];
