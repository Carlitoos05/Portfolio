import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Carlitoos05" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/carlos-nicolae-995794364" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/carlos_dn14" },
  { icon: <FaTwitter />, path: "https://x.com/carlos_nic87340" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
