import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

  const links = [
    {
      href: "https://x.com/n0thar1",
      label: "Twitter",
      icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
    },
    {
      href: "https://github.com/nothariharan",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6 text-gray-900" />,
    },
    {
      href: "https://www.instagram.com/certified_hari/",
      label: "Instagram",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
    },
  ];
const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact