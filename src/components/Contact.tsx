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
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Summon Me</h2>
        <div className="flex items-center">
            {links.map((link) => (
            <a href={link.href} key = {link.label} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-shadow-gray-800 hover:text-gray-600 mr-[2rem]">{link.icon} <span className="text-lg">{link.label}</span></a>
            ))}
        </div>
    </section>
  )
}

export default Contact