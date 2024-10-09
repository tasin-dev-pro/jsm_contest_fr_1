import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import { Contact, Ham, LogIn, LogOut, Menu, Pizza, Search, ShoppingCart, User } from "lucide-react"

const Header = () => {
    const {responseImg} = useContext(UserContext)
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('https://jsm-contest.onrender.com/profile', {
            credentials: 'include',
        }).then(res => {
            res.json().then(userInfo => {
                setUserInfo(userInfo.email)
            })
        })
    }, [])

    function logout () {
        fetch('https://jsm-contest.onrender.com/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null)
    }
    const email = userInfo?.email;


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
            return (
                <div className="bg-white border-b sticky top-0 z-50">
                    <div className="flex items-center justify-between p-4">
                        <Link className="flex items-center" to="/">
                            <img src="/Vibhor.png" alt="Logo" className="w-8 h-8"/>
                            <div className="ml-4 flex items-center">
                                <span className="font-semibold">Lattestura</span>
                                <i className="fas fa-chevron-down ml-1 text-orange-500"></i>
                            </div>
                        </Link>
                        <div className="max-md:hidden md:flex items-center space-x-6">
                            <Link to="/contact" className="flex items-center gap-1">
                                <Contact />
                                <span>Contact</span>
                            </Link >

                {!email && (<>
                    <Link to="/login" className="flex items-center gap-1"><User />Login</Link>
                    <Link to="/register" className="flex items-center gap-1" ><User />Register</Link>
                </>)}
                            <Link to="/foods" className="flex items-center gap-1"><Pizza />Foods</Link>
                            <Link to="/restaurants" className="flex items-center gap-1"><Ham />Restaurants</Link>
                            {email && (<>
                            <Link to="/" className="flex items-center gap-1" onClick={logout}><LogOut />Logout</Link>
                            <Link to="/onboarding" className="flex items-center gap-1" >Profile</Link>
                            <Link className="flex items-center gap-1">
                                <ShoppingCart />
                                <span>Cart</span>
                                </Link>
                                {responseImg && responseImg.secure_url && (
        <Link className="w-8" to="/edit">
          <img src={responseImg.secure_url} alt="Uploaded profile" className="rounded-full  w-full object-cover" />
        </Link>
      )}
                            </>)}
                        </div>
                        <div className="md:hidden max-md:flex items-center">
                            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                                <Menu />
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="flex flex-col items-start p-4 space-y-4">
                            <Link to="/contact" className="flex items-center gap-1">
                                <Contact />
                                <span>Contact</span>
                            </Link >
                            {!email && (<>
                    <Link to="/login" className="flex items-center gap-1"><User />Login</Link>
                    <Link to="/register" className="flex items-center gap-1" ><User />Register</Link>
                </>)}
                <Link to="/foods" className="flex items-center gap-1"><Pizza />Foods</Link>
                            <Link to="/restaurants" className="flex items-center gap-1"><Ham />Restaurants</Link>
                            {email && (<>
                            <Link to="/" className="flex items-center gap-1" onClick={logout}><LogOut />Logout</Link>
                            <Link to="/onboarding" className="flex items-center gap-1" >Profile</Link>
                            <Link className="flex items-center gap-1">
                                <ShoppingCart />
                                <span>Cart</span>
                                </Link>
                                {responseImg && responseImg.secure_url && (
        <Link className="w-8" to="/edit">
          <img src={responseImg.secure_url} alt="Uploaded profile" className="rounded-full  w-full object-cover" />
        </Link>
      )}
                            </>)}
                            </div>
                        </div>
                    )}
                </div>
  )
}

export default Header
