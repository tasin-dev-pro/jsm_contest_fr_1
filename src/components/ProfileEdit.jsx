import React, { useContext, useEffect, useState } from 'react';
import { PencilLine } from 'lucide-react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

export default function ProfileEdit() {
    const { userInfo, responseImg} = useContext(UserContext)
    const {usernameGlb, setUsernameGlb} = useContext(UserContext)
    const {bioGlb, setBioGlb} = useContext(UserContext)
    const {setResponseImg} = useContext(UserContext)
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
                src={responseImg}
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
          <Link to="/onboarding" className="flex items-center gap-2 rounded-lg bg-pink-500 px-3 sm:px-4 py-2 text-sm sm:text-base text-white hover:bg-pink-600">
            <PencilLine size={16} />
            <span>Edit profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
