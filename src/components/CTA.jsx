
const CTA = () => {
  return (
    <section className="relative w-full py-20 px-3 mt-24 bg-red-500 flex items-center justify-center flex-col -z-[1]">
        <h1 className="text-3xl font-extrabold text-white">About Lattestura</h1>
        <p  className="text-xl font-semibold text-white max-w-[800px] text-center mt-4">Lattestura is a resturant who provides online services and gave the user best experience in food</p>
        <img src="/burger-3d1.png" alt="" width={200} className="absolute bottom-10 -left-10"/>
        <img src="/delivery-3d.png" alt="" width={300} className="absolute -z-[2] bottom-10 right-10"/>
    </section>
  )
}

export default CTA
