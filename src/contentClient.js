import { images } from './constants/images';

//? This is my dummy client that I chose to work with instead
//? of the Sanity CMS used in the video.
export const client = {
  email: 'contact@test.test',
  mobile: '+1 (123) 456-789',
  navigationItems: [
    'home',
    'about',
    'work',
    'skills',
    'testimonials',
    'contact',
  ],
  exampleSkills: [images.flutter, images.node, images.python],
  abouts: [
    {
      title: 'Web Development',
      description: 'I am a good web developer',
      imgUrl: images.about01,
    },
    {
      title: 'Web Design',
      description: 'I am a good web designer',
      imgUrl: images.about02,
    },
    {
      title: 'UI/UX',
      description: 'I am a good user',
      imgUrl: images.about03,
    },
    {
      title: 'Web Animations',
      description: 'I am a good animationist',
      imgUrl: images.about04,
    },
  ],
  workCategories: ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'],
  works: [
    {
      title: 'Modern UI/UX Website',
      description: 'A modern UI/UX portfolio website',
      projectLink: '#',
      codeLink: 'https://github.com/johanstech/test-portfolio-0',
      imgUrl: images.about03,
      tags: ['UI/UX', 'All'],
    },
    {
      title: 'Sweet Restaurant Website',
      description: 'A modern restaurant website',
      projectLink: '#',
      codeLink: '#',
      imgUrl: images.about04,
      tags: ['UI/UX', 'All'],
    },
    {
      title: 'Cool Mobile App',
      description: 'Tinder Clone built in Flutter',
      projectLink: '#',
      codeLink: '#',
      imgUrl: images.about02,
      tags: ['Mobile App', 'All'],
    },
  ],
  skills: [
    {
      name: 'React',
      bgColor: '#edf2f8',
      icon: images.react,
    },
    {
      name: 'Node.js',
      bgColor: '#edf2f8',
      icon: images.node,
    },
    {
      name: 'Flutter',
      bgColor: '#edf2f8',
      icon: images.flutter,
    },
    {
      name: 'Git',
      bgColor: '#edf2f8',
      icon: images.git,
    },
    {
      name: 'Figma',
      bgColor: '#edf2f8',
      icon: images.figma,
    },
  ],
  experiences: [
    {
      year: '2020',
      works: [
        {
          name: 'Frontend Developer',
          company: 'Google',
          desc: 'I worked as a frontend developer at Google',
        },
        {
          name: 'Blockchain Developer',
          company: 'Facebook',
          desc: 'I worked with Solidity',
        },
      ],
    },
    {
      year: '2021',
      works: [
        {
          name: 'Fullstack Developer',
          company: 'Apple',
          desc: 'I worked as a fullstack developer at Apple',
        },
      ],
    },
  ],
  testimonials: [
    {
      name: 'Abraham',
      company: 'Google',
      feedback:
        "Great job, would recommend! Lights up the entire workplace, can't imagine someone else I'd rather work with.",
      imgUrl: images.html,
    },
    {
      name: 'Sarah',
      company: 'Apple',
      feedback:
        "The best there ever was! We've never had another talent as skilled and easy to work with here at Apple before or after.",
      imgUrl: images.css,
    },
  ],
  brands: [
    {
      id: '0',
      name: 'Spotify',
      imgUrl: images.spotify,
    },
    {
      id: '1',
      name: 'New Balance',
      imgUrl: images.nb,
    },
    {
      id: '2',
      name: 'Skype',
      imgUrl: images.skype,
    },
    {
      id: '3',
      name: 'Bolt',
      imgUrl: images.bolt,
    },
  ],
};
