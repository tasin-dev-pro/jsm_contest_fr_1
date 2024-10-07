import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import { Contact, LogIn, LogOut, Menu, Search, ShoppingCart, User } from "lucide-react"

const Header = () => {
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
                <div className="bg-white border-b">
                    <div className="flex items-center justify-between p-4">
                        <a className="flex items-center" href="/">
                            <img src="/Vibhor.png" alt="Logo" className="w-8 h-8"/>
                            <div className="ml-4 flex items-center">
                                <span className="font-semibold">Lattestura</span>
                                <i className="fas fa-chevron-down ml-1 text-orange-500"></i>
                            </div>
                        </a>
                        <div className="max-md:hidden md:flex items-center space-x-6">
                            <div className="flex items-center gap-1">
                                <Contact />
                                <span>Contact</span>
                            </div>
                            {email && (<>
                            <a to="/" className="flex items-center gap-1" onClick={logout}><LogOut />Logout</a>
                            <a className="flex items-center gap-1">
                                <ShoppingCart />
                                <span>Cart</span>
                            </a> </>)}
                {!email && (<>
                    <Link to="/login" className="flex items-center gap-1"><User />Login</Link>
                    <Link to="/register" className="flex items-center gap-1" ><User />Register</Link>
                </>)}


                            <Link to="/foods" className="flex items-center gap-1">Foods</Link>
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
                                <div className="flex items-center">
                                    <i className="fas fa-briefcase mr-2"></i>
                                    <span>Swiggy Corporate</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-search mr-2"></i>
                                    <span>Search</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-percentage mr-2"></i>
                                    <span>Offers</span>
                                    <span className="text-orange-500 text-xs ml-1">NEW</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-question-circle mr-2"></i>
                                    <span>Help</span>
                                </div>
                                {!email && (
                                <Link className="flex items-center gap-1" href="/login">
                                <User />
                                <span>Sign-In</span>
                            </Link>
                            ) }
                            {email && (
                                <div className="flex items-center gap-1" onClick={logout}>
                                <User />
                                <span>Logout</span>
                            </div>
                            )}
                                <div className="flex items-center">
                                    <i className="fas fa-shopping-cart mr-2"></i>
                                    <span>Cart</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
  )
}

export default Header
