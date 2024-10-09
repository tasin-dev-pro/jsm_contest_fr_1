import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

function OnboardingPage() {
  const { responseImg, setResponseImg, userInfo, usernameGlb, bioGlb } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false); // Added to show a loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading
    setLoading(true);

    if (!profilePicture) {
      console.error('No file selected');
      setLoading(false);
      return;
    }

    try {
      // Upload image to Cloudinary
      const data = new FormData();
      data.append('file', profilePicture);
      data.append('upload_preset', 'profiles');
      data.append('cloud_name', 'deugdt4r1');

      const cloudinaryResult = await fetch('https://api.cloudinary.com/v1_1/deugdt4r1/image/upload', {
        method: 'POST',
        body: data,
      }).then(response => response.json());

      console.log('Cloudinary response:', cloudinaryResult);

      // Update the profile in the backend
      const updateResponse = await fetch(`http://localhost:3001/updateUser/${userInfo?.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          bio: bio,
          profilePic: cloudinaryResult.url, // Cloudinary image URL
        }),
      }).then(res => res.json());

      console.log('Profile updated:', updateResponse);

      // Show success alert after both steps are successful
      alert('Profile updated successfully!');

      // Set the image in the context
      setResponseImg(cloudinaryResult);
    } catch (error) {
      console.error('Error uploading or updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  useEffect(() => {
    if (responseImg) {
      console.log('Updated responseImg:', responseImg);
    }
  }, [responseImg]);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Customize your Profile</h1>
      {responseImg && (
        <div className="mb-6">
          <img src={responseImg.url} alt="Uploaded profile" className="max-w-xs mx-auto rounded-lg shadow-lg" />
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
              defaultValue={usernameGlb}
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
              defaultValue={bioGlb}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default OnboardingPage;
