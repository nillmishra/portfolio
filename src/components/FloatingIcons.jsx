import { FaGithub, FaLinkedin, FaInstagram, FaDribbble, FaFacebookF } from "react-icons/fa";
import { SiCodepen, SiStackoverflow, SiTwitter } from "react-icons/si";
import "../styles/hero-orbit.css";

export default function FloatingIcons() {
  const items = [
    { id: 1, Icon: FaGithub,       style: { top: "8%",    left: "8%"    }, cls: "float-1", href: "https://github.com/darshn20" },
    { id: 2, Icon: SiCodepen,      style: { top: "22%",   left: "18%"   }, cls: "float-2", href: "https://codepen.io" },
    { id: 3, Icon: FaFacebookF,    style: { top: "10%",   right: "10%"  }, cls: "float-3", href: "https://facebook.com" },
    { id: 4, Icon: FaLinkedin,     style: { top: "30%",   right: "6%"   }, cls: "float-4", href: "https://linkedin.com" },
    { id: 5, Icon: FaInstagram,    style: { bottom: "20%", right: "14%" }, cls: "float-5", href: "https://instagram.com" },
    { id: 6, Icon: FaDribbble,     style: { bottom: "10%", left: "15%"  }, cls: "float-6", href: "https://dribbble.com" },
    { id: 7, Icon: SiStackoverflow,style: { bottom: "22%", left: "5%"   }, cls: "float-7", href: "https://stackoverflow.com" },
    { id: 8, Icon: SiTwitter,      style: { top: "48%",   left: "2%"    }, cls: "float-8", href: "https://twitter.com" },
  ];

  return (
    <>
      <div className="hero-blob" />
      {items.map(({ id, Icon, style, cls, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`icon-badge ${cls}`}
          style={style}
          aria-label="floating-social"
        >
          <Icon size={22} />
        </a>
      ))}
    </>
  );
}