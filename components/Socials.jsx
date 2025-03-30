import Link from "next/link";

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";

const socials = [

  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/campbell.landscaping/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link   href={item.path}
          key={index}
          className={`${iconStyles}`}
          target="_blank"
          rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
