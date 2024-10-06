
const CTA = () => {
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-10 py-24 mx-auto flex sm:flex-nowrap flex-wrap items-center">
    <div className="lg:w-[45vw] md:w-[30vw] h-[500px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
        <img src="https://imgs.search.brave.com/FtNL3g-kD4BDlV649_b-0FEfBF0AOydEepxDYEa6vjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/Nzk1NDA4Ny9waG90/by9yZXN0YXVyYW50/LWludGVyaW9yLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1T/SEV6QVZmeGJXWW9r/cS1neEE5Q1pyZ2ZM/aFFJdEIxcC1zbnlH/UnpaUy1BPQ" alt="ecommerce" className="object-cover object-center w-full h-full block"/>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">put some shit here</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">send</button>
      <p className="text-xs text-gray-500 mt-3">yoo yoo! youre nerd m_f.why are you reading all of this fuc_ing THings</p>
    </div>
  </div>
</section>
  )
}

export default CTA
