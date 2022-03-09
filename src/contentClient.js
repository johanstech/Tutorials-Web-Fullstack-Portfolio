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
};
