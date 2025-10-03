import { useState } from "react"
import { FaCamera } from "react-icons/fa"

const Profile = () => {
    const [bannerUrl,setBannerUrl] = useState("https://dummyimage.com/1500x400/000/fff")


    const [profileUrl,setProfileUrl] = useState("https://dummyimage.com/100x100/000/fff")

    const handleBannerChange = (event) => {
        const file = event.target.file[0]
        if (file){
            setBannerUrl(URL.createObjectURL(file))
        }
    }
  return (
    <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
            <img src={bannerUrl} alt="Banner" className="w-full h-60 object-cover" />
            <button className="absolute top-2 right-2 bg-gray-800 text-white rounder-full hover:bg-gray-600 ">
                <label htmlFor="banner-upload" className="cursor-pointer">
                    <FaCamera size={24} />
                </label>
            <input type="file" id="banner-upload"accept="image/*" className="hidden" onChange={handleBannerChange} />
            </button>
        </div>

        {/*LOGOOOOOOOOO*/}

    </div>
  )
}

export default Profile