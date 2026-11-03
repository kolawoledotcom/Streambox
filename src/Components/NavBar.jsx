import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <header className="flex items-center justify-between py-5 px-7 text-white bg-gray-800">
            <div className="flex items-center gap-0.5">
                <MdOutlineCheckBoxOutlineBlank className="text-amber-300" />
                <h2>Streambox.</h2>


            </div>
            <nav>
                <ul className="flex items-center gap-7.5">
                    <li> <NavLink to= "/series" className={({isActive}) => {isActive ? "text-white" : "text-gray-400"}}>Series</NavLink> </li>
                    <li> <NavLink to= "/movies" className={({isActive}) => {isActive ? "text-white" : "text-gray-400"}}> Movies</NavLink> </li>
                    <li> <NavLink to= "/music" className={({isActive}) => {isActive ? "text-white" : "text-gray-400"}}> Music</NavLink> </li>
                    <li> <NavLink to= "/sports" className={({isActive}) => {isActive ? "text-white" : "text-gray-400"}}>Sports</NavLink> </li>
                    <li> <NavLink to= "/gaming" className={({isActive}) => {isActive ? "text-white" : "text-gray-400"}}>Gaming</NavLink> </li>

                    
                </ul>
            </nav>
            <div className="flex items-center gap-3.5">
                <div className="bg-gray-500 p-2 rounded-2xl">
                    <IoSearchOutline />
                </div>
                <div className="bg-gray-500 p-2 rounded-2xl">
                    <TiThMenu />
                </div>
                <img src="Batman.jpeg" alt="" className="w-7 h-7 rounded-2xl border-2 border-amber-300" />
            </div>






        </header>


    )
}
export default NavBar