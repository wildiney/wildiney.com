import {
  AiOutlineBehance,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { ButtonPortfolio } from "../../Components/ButtonPortfolio";

interface ISocialMedia {
  icon: JSX.Element;
  link: string;
  site: string;
}

const socialMedia: ISocialMedia[] = [
  {
    icon: <AiOutlineBehance />,
    site: "Behance",
    link: "https://www.behance.net/wildiney",
  },
  {
    icon: <AiOutlineYoutube />,
    site: "YouTube",
    link: "https://www.youtube.com/watch?v=5aU_i7rOnlA&list=PLEFS0XFJyys1QVGZ7WL23hCtWcLj4NV2y",
  },
  {
    icon: <AiOutlineLinkedin />,
    site: "LinkedIn",
    link: "https://linkedin.com/in/wildiney",
  },
  {
    icon: <AiOutlineWhatsApp />,
    site: "WhatsApp",
    link: "https://wa.me/5511981591082",
  },
  {
    icon: <AiOutlineMail />,
    site: "E-mail",
    link: "mailto:wildiney@gmail.com",
  },
];
export default function LinkTree() {
  return (
    <div className="content w-5 mx-auto p-10">
      <h1>Wildiney Fernando Pimentel</h1>
      <h2>
        <span>Designer & Developer</span>
      </h2>
      {socialMedia.map((button, index) => {
        return (
          <ButtonPortfolio
            key={index}
            icon={button.icon}
            site={button.site}
            link={button.link}
          />
        );
      })}
    </div>
  );
}
