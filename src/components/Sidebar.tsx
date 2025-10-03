import { FaHome, FaSearch, FaUser } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1a1c1e] text-white">
        <ul className="flex flex-col justify-between items-center h-full">
            <div className="top">
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaHome className="mr-2 mb-3 mt-3" size={20}/>
                    </div>
                </li><li className="mb-2">
                    <div className="flex items-center">
                        <FaUser className="mr-2 mb-3 mt-3" size={20}/>
                    </div>
                </li><li className="mb-2">
                    <div className="flex items-center">
                        <FaSearch className="mr-2 mb-3 mt-3" size={20}/>
                    </div>
                </li>
            </div>

            <div className="bottom">
                <li>
                    <IoMdSettings size={20} />
                    <FaUser className="mt-5 mb-5" size={20} />
                </li>
            </div>
        </ul>
    </aside>
  )
}

export default Sidebar