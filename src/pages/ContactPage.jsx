import Lottie from 'lottie-react';
import  { useState } from 'react';
import mail from "../animations/mail.json"

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example using Axios to send data to your API
    console.log({ email, query });
    // Reset form after submission
    setEmail('');
    setQuery('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

       <section className="relative w-full py-20 px-3 mb-24 mt-24 bg-red-500 flex items-center justify-center flex-col ">
        <h1 className="text-3xl font-extrabold text-white">About Lattestura</h1>
        <p  className="z-20 text-xl font-semibold text-white max-w-[800px] text-center mt-4">Lattestura is a resturant who provides online services and gave the user best experience in food</p>
        <img src="/burger-3d1.png" alt="" width={200} className="absolute bottom-10 -left-10"/>
        <img src="/delivery-3d.png" alt="" width={300} className="absolute  bottom-10 right-10"/>
    </section>
    <div className='flex items-center justify-center gap-32 '>

    <div className="w-[30%] max-md:w-full mb-6 md:mb-0">
        <Lottie animationData={mail} loop={true} />
        </div>
      <div className="bg-white shadow-xl border rounded-lg p-8 max-w-md w-full ">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
              Your Query
            </label>
            <textarea
              id="query"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              rows="4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
