import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { UserContextProvider } from "./UserContext"
import Home from "./pages/Home"
import { Footer } from "./components/Footer"
import Foods from "./pages/Foods"
import ContactPage from "./pages/ContactPage"
import Restaurant from "./pages/Restaurant"
import Onboarding from "./pages/Onboarding"
import {  ProfileEditPage } from "./pages/ProfileEdit"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Cart from "./pages/Cart"
import loading from './animations/loading.json'


import gsap from "gsap"
import Lottie from "lottie-react"

const App = () => {
  const comp = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        duration: 4,
        delay: 0.6,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])
  useEffect(() => {
    // Simulate loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 4 seconds or when your data is ready
    }, 4000); // You can adjust this time based on your loading requirements

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [])

  if (isLoading) {
    return (
      <div
        id="intro-slider"
        className="max-h-screen bg-white fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center"
      >
        <Lottie animationData={loading} loop={true} className="w-[700px]" />
      </div>
    )
  }

  return (
    <BrowserRouter>
    <UserContextProvider>
    <Header />
    <div className="relative" ref={comp}>

    {/* Your app's routes */}
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/foods" element={<Foods />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/restaurants" element={<Restaurant/>}/>
        <Route path="/edit" element={<ProfileEditPage/>}/>

    </Routes>
    </div>
    <Footer />
    </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
