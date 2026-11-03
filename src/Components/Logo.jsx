import { NavLink } from "react-router-dom"

function Logo() {
    return (
        <header className="bg-black text-white flex justify-between p-6 m-6 rounded-2xl ">
            <h1>LOGO</h1>
            <nav className="flex gap-10 list-none">
                <li> <NavLink to="/aboutus">About us</NavLink> </li>
                <li> <NavLink to="/portfolio">Portfolio</NavLink></li>
                <li> <NavLink to="/services">Services</NavLink></li>
                <li className="border-amber-50 bg-lime-300 text-black rounded-2xl "> <NavLink to="/contactus">Contact us</NavLink> </li>
            </nav>



        </header>
    )
}

export default Logo