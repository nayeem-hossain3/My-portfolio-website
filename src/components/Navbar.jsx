import { useState } from "react";


const Navbar = () => {
    const [active, setActive] = useState("home");
    return (
        <div id="app" className="p-5 bg-[#0C0614] text-white fixed top-0 left-0 right-0 z-10 shadow-[0_4px_20px_rgba(193,50,251,0.15)] ">
            <nav className="flex justify-between items-center"> 
                <h1 className="text-2xl font-bold">Md Nayeem Hossain</h1>
                <ul className="flex justify-end ">
                    <li onClick={()=> setActive ("home")} className={`m-2 p-3 rounded-2xl cursor-pointer ${ active === "home" ? "bg-[#C132FB]" : "hover:bg-[#C132FB]"}`} ><a href="#hero">Home</a></li>
                    <li onClick={()=> setActive ("about")} className={`m-2 p-3 rounded-2xl cursor-pointer ${ active === "about" ? "bg-[#C132FB]" : "hover:bg-[#C132FB]"}`}><a href="#about">About</a></li>
                    <li onClick={()=> setActive ("projects")} className={`m-2 p-3 rounded-2xl cursor-pointer ${ active === "projects" ? "bg-[#C132FB]" : "hover:bg-[#C132FB]"}`}><a href="#projects">Projects</a></li>
                    <li onClick={()=> setActive ("services")} className={`m-2 p-3 rounded-2xl cursor-pointer ${ active === "services" ? "bg-[#C132FB]" : "hover:bg-[#C132FB]"}`}><a href="#services">Services</a></li>
                    <li onClick={()=> setActive ("contact")} className={`m-2 p-3 rounded-2xl cursor-pointer ${ active === "contact" ? "bg-[#C132FB]" : "hover:bg-[#C132FB]"}`}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;