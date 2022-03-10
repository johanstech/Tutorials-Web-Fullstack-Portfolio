import { images } from './constants/images';

export const client = {
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
      imageUrl: images.about03,
      tags: ['UI/UX', 'All'],
    },
    {
      title: 'Sweet Restaurant Website',
      description: 'A modern restaurant website',
      projectLink: '#',
      codeLink: '#',
      imageUrl: images.about04,
      tags: ['UI/UX', 'All'],
    },
    {
      title: 'Cool Mobile App',
      description: 'Tinder Clone built in Flutter',
      projectLink: '#',
      codeLink: '#',
      imageUrl: images.about02,
      tags: ['Mobile App', 'All'],
    },
  ],
};
