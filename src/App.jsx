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
import { useEffect, useLayoutEffect, useRef } from "react"
import Cart from "./pages/Cart"


import gsap from "gsap"

const App = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {   
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        duration: 1.3,
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

  return (
    <BrowserRouter>
    <UserContextProvider>
    <Header />
    <div className="relative" ref={comp}>
    <div
        id="intro-slider"
        className="h-[100vh] p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          Order
        </h1>
        <h1 className="text-9xl" id="title-2">
          Get
        </h1>
        <h1 className="text-9xl" id="title-3">
          Eat
        </h1>
      </div>

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
