import Button from "./button";
import NavModal from "../modal/link_modal";
import { useState } from "react";

const Nav = ({links}) => {

const [isOpen,setIsOpen] =useState(false)


useState(() => {
    const handleEscape = (event) => {
      if(event.key === "Escape"){
        setIsOpen(false)
      }
    
    }

    window.addEventListener("keydown", handleEscape)  

    return () => window.removeEventListener("keydown", handleEscape)

},[])


const openModal = () => { setIsOpen(prev => !prev)};
return(
<nav className="w-full  flex justify-center  ">
  <section className="max-w-6xl w-full  h-30 flex flex-row justify-between  p-1 ">

            {/* leftside   */}
          <div className="flex md:w-auto w-full justify-between md:justify-normal items-center md:gap-12 p-1">

      <div className="w-40 h-10 ">
            <picture>
              <img
                src="/images/logo.svg"
                alt="shortly"
                className="w-full h-full object-contain"
              />
            </picture>
          </div>

          <div className="relative md:hidden">
          <picture>
            <img src={`${isOpen? "/images/icon-close.svg":"/images/icon-hamburger.svg"}`}  alt={`${isOpen ? "close-button":"hamburger-menu"}`}
             onClick={openModal}/>
          </picture>

            {
            isOpen && <NavModal links={links}/>
          }
          </div>
        
            <ul className="hidden md:flex  gap-8 font-Poppins font-bold  ">
            {links.map((link) =>  (
            <li key={link.id} className="text-lg text-NGray500">{link.name}</li>
            ))}
            </ul>
        </div>

  <div className="hidden md:flex gap-12 items-center font-Poppins">
      <Button className="text-NGray500 font-bold">Login</Button>
      <Button className=" bg-PBlue400 rounded-full  w-32 h-12   border text-lg text-white">Sign up</Button>
  </div>


  </section>

</nav>
)
}
export default Nav;