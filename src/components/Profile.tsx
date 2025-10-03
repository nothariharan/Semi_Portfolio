import { useState } from "react"
import { FaCamera } from "react-icons/fa"

const Profile = () => {
    const [bannerUrl,setBannerUrl] = useState("https://dummyimage.com/1500x400/000/fff")


    const [profileUrl,setProfileUrl] = useState("https://dummyimage.com/100x100/000/fff")

    const handleBannerChange = (event:any) => {
        const file = event.target.files[0]
        if (file){
            setBannerUrl(URL.createObjectURL(file))
        }
    }
    const handleProfileChange  = (event:any) => {
        const file = event.target.files[0]
        if (file){
            setProfileUrl(URL.createObjectURL(file))
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
        <div className="flex items-center ml-4 mt-[2rem]">
            <img src={profileUrl} alt="LOGO" className="w-40 h-40 object-cover rounded-full border-white relative" />
            <button className="absolute ml-[4rem] mt-[9rem] bg-gray-800 text-white rounded-full hover:bg-gray-400">
                <label htmlFor="profile-upload" className="cursor-pointer">
                    <FaCamera size={32}/>
                </label>
                <input type="file" id="profile-upload"accept="image/*" className="hidden" onChange={handleProfileChange} />
            </button> 

        {/*Channel Details*/}
        <div className="ml-7 mt-1">
            <h1 className="text-3xl font-bold">Hariharan</h1>
            <p>holy sigma</p>
            <p className="mt-2 ">nah I'm more than sigma, I'm an ohio alpha sigma rizziler. my mewing streak never ends and i edge all day to skibidi toilet WHILE MEWING i also rizz up all the skibidi gyatts in ohio so you know im not edging you when i say that im that sigma.</p>
            <button className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-amber-400"> Buy Me 67 Coffees</button>
        </div>

        </div>

    </div>
  )
}

export default Profile