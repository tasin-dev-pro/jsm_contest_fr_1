import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { UserContextProvider } from "./UserContext"
import Home from "./pages/Home"
import { Footer } from "./components/Footer"
import Foods from "./pages/Foods"
import ContactPage from "./pages/ContactPage"
import Onboarding from "./pages/Onboarding"


function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
    <Header />
    {/* Your app's routes */}
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/foods" element={<Foods />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<ContactPage/>}/>

    </Routes>
    <Footer />
    </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
