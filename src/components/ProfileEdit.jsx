import React, { useContext } from 'react';
import { PencilLine } from 'lucide-react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

export default function ProfileEdit() {
  const { responseImg, usernameGlb, bioGlb } = useContext(UserContext);

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-[40vh] sm:h-[50vh] bg-cover bg-center bg-gray-800">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

        {/* Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 pb-8">
          {/* Profile Info */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* Profile Image */}
            <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 border-white">
              <img
                src={responseImg} // fallback if no image
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name and Bio */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{usernameGlb || "User Name"}</h1>
              <p className="text-base sm:text-lg text-gray-300 mt-2">{bioGlb || "Write something about yourself..."}</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Link
            to="/onboarding"
            className="mt-6 sm:mt-0 flex items-center gap-2 rounded-lg bg-pink-500 px-6 py-3 text-sm sm:text-base text-white hover:bg-pink-600 transition duration-300 ease-in-out"
          >
            <PencilLine size={20} />
            <span>Edit Profile</span>
          </Link>
        </div>
      </div>

      {/* Additional Profile Info */}
      <div className="px-6 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600">
            {bioGlb || "This is your bio section. Share more details about your skills, interests, and experiences here. You can edit this information by clicking the 'Edit Profile' button above."}
          </p>
        </div>
      </div>
    </div>
  );
}
