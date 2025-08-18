import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaStackOverflow,
} from "react-icons/fa";
import { SiCodepen, SiDevdotto, SiLeetcode, SiHashnode } from "react-icons/si";
import "../styles/hero-orbit.css";

export default function FloatingIcons() {
  // Scattered positions (percent of hero-stage)
  // - 2–3 near the subject: left ~26–28% and right ~72–74% (close but not on body)
  // - 2–3 slightly outside: left < 0% or > 100%
  const items = [
    // LEFT (6)
    { id: 1,  Icon: SiCodepen,       style: { top: "50%", left: "-3%" },  cls: "float-1",  href: "https://codepen.io",        label: "CodePen" },
    { id: 2,  Icon: SiDevdotto,      style: { top: "24%", left: "10%"  },  cls: "float-2",  href: "https://dev.to",            label: "Dev.to" },
    { id: 3,  Icon: FaStackOverflow, style: { top: "45%", left: "17%" },  cls: "float-3",  href: "https://stackoverflow.com", label: "Stack Overflow" }, // close to subject (left)
    { id: 4,  Icon: SiLeetcode,      style: { top: "62%", left: "25%" },  cls: "float-4",  href: "https://leetcode.com",      label: "LeetCode" },
    { id: 5,  Icon: SiHashnode,      style: { top: "80%", left: "13%" },  cls: "float-5",  href: "https://hashnode.com",      label: "Hashnode" }, // slightly outside left
    { id: 6,  Icon: FaBehance,       style: { top: "10%", left: "26%" },  cls: "float-6",  href: "https://behance.net",       label: "Behance" }, // close (lower)

    // RIGHT (6)
    { id: 7,  Icon: FaGithub,        style: { top: "12%",  left: "90%" },  cls: "float-7",  href: "https://github.com/darshn20", label: "GitHub" },
    { id: 8,  Icon: FaLinkedin,      style: { top: "22%", left: "75%" },  cls: "float-8",  href: "https://linkedin.com",        label: "LinkedIn" }, // close to subject (right)
    { id: 9,  Icon: FaTwitter,       style: { top: "42%", left: "86%" },  cls: "float-9",  href: "https://twitter.com",         label: "Twitter/X" },
    { id: 10, Icon: FaInstagram,     style: { top: "60%", left: "70%" },  cls: "float-10", href: "https://instagram.com",       label: "Instagram" },
    { id: 11, Icon: FaFacebookF,     style: { top: "66%", left: "90%"},  cls: "float-11", href: "https://facebook.com",        label: "Facebook" }, // slightly outside right
    { id: 12, Icon: FaDribbble,      style: { top: "78%", left: "74%" },  cls: "float-12", href: "https://dribbble.com",        label: "Dribbble" }, // close (lower)
  ];

  return (
    <>
      <div className="hero-blob" />
      {items.map(({ id, Icon, style, cls, href, label }) => (
        <div
          key={id}
          className="icon-wrap"
          style={{ ...style, transform: "translate(-50%, -50%)" }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-badge ${cls}`}
            aria-label={label}
            title={label}
          >
            <Icon size={22} />
          </a>
        </div>
      ))}
    </>
  );
}