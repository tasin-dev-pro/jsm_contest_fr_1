import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

function OnboardingPage() {
  const { responseImg, setResponseImg } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profilePicture) {
      console.error('No file selected');
      return;
    }

    const data = new FormData();
    data.append('file', profilePicture);
    data.append('upload_preset', "lattesturaimgs");
    data.append('cloud_name', "dhtvnoz9d");

    try {
      const result = await fetch('https://api.cloudinary.com/v1_1/dhtvnoz9d/image/upload', {
        method: 'POST',
        body: data
      }).then(response => response.json());

      console.log('Cloudinary response:', result);
      setResponseImg(result);  // Update the context state with the image URL
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
    }

    console.log('Form submitted:', { profilePicture, username, bio });
  };

  useEffect(() => {
    if (responseImg) {
      console.log("Updated responseImg:", responseImg);
    }
  }, [responseImg]);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Customize your Profile</h1>
      {responseImg && responseImg.secure_url && (
        <div className="mb-6">
          <img src={responseImg.secure_url} alt="Uploaded profile" className="max-w-xs mx-auto rounded-lg shadow-lg" />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="profile-picture"
            >
              Profile Picture
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="profile-picture"
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded resize-none py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OnboardingPage;
