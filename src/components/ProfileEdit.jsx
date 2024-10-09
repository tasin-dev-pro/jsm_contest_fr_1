import React, { useContext, useEffect, useState } from 'react';
import { PencilLine } from 'lucide-react';
import { UserContext } from '../UserContext';

export default function ProfileEdit() {
    const { userInfo, responseImg} = useContext(UserContext)
    const {usernameGlb, setUsernameGlb} = useContext(UserContext)
    const {bioGlb, setBioGlb} = useContext(UserContext)

    useEffect(() => {
        fetch(`https://jsm-contest.onrender.com/getProfile/${userInfo?.email}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            setUsernameGlb(data.username)
            setBioGlb(data.bio)
        })
    }, [userInfo?.email])
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-64 w-full bg-gray-900">
        {/* Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 sm:px-8 pb-4">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-4 border-white">
              <img
                src={responseImg?.secure_url}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <div className='gap-y-2 flex flex-col'>
            <h1 className="text-lg sm:text-2xl font-bold text-white">{usernameGlb}</h1>
            <h1 className="text-sm sm:text-lg text-white">{bioGlb}</h1>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button className="flex items-center gap-2 rounded-lg bg-pink-500 px-3 sm:px-4 py-2 text-sm sm:text-base text-white hover:bg-pink-600">
            <PencilLine size={16} />
            <span>Edit profile</span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap justify-between sm:justify-end gap-4 sm:gap-8 px-4 sm:px-8 py-4">
          <div className="w-1/3 sm:w-auto text-center">
            <span className="text-lg sm:text-xl font-bold">0</span>
            <p className="text-gray-600">Reviews</p>
          </div>
          <div className="w-1/3 sm:w-auto text-center">
            <span className="text-lg sm:text-xl font-bold">0</span>
            <p className="text-gray-600">Photos</p>
          </div>
          <div className="w-1/3 sm:w-auto text-center">
            <span className="text-lg sm:text-xl font-bold">0</span>
            <p className="text-gray-600">Followers</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-8">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 border-b border-gray-200">
            <button className="border-b-2 border-pink-500 py-2 sm:py-4 font-medium text-pink-500 w-full sm:w-auto">
              ACTIVITY
            </button>
            <button className="py-2 sm:py-4 font-medium text-gray-500 hover:text-gray-700 w-full sm:w-auto">
              Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
