import { 
  RiYoutubeFill, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiFacebookFill, 
  RiInstagramFill, 
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
      path: 'https://www.youtube.com/',
      icon: <RiYoutubeFill />,
  },
  {
      path: 'https://www.linkedin.com/',
      icon: <RiLinkedinFill />,
  },
  {
      path: 'https://www.instagram.com/',
      icon: <RiInstagramFill />,
  },
  {
      path: 'https://github.com/',
      icon: <RiGithubFill />,
  },
  {
      path: 'https://www.facebook.com/',
      icon: <RiFacebookFill />,
  }
];

const Socials = ({ containerStyles, iconsStyles }) => {
return (
  <div className={containerStyles}>
    {icons.map((icon, index) => {
      return (
        <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
          <div className={iconsStyles}>
            {icon.icon}
          </div>
        </Link>
      );
    })}
  </div>
);
};

export default Socials;
