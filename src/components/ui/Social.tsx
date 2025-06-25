import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const defaultSocials = [
  { icon: <FaGithub/>, path: "https://github.com/aliza-moin18" },
  { icon: <FaLinkedinIn style={{ color: "#0A66C2"}} />, path: "https://www.linkedin.com/in/aliza-moin-b975a6276/" },
];

const Social = ({ containerStyles = "", iconStyles = "", socials = defaultSocials }) => {
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