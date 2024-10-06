import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { UserContextProvider } from "./UserContext"


function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
    <Header />
    {/* Your app's routes */}
    <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
