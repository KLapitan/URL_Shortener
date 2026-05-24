 const Footer = ({links,socMedia}) => {
 return (
 <footer className="h-auto">
    <section className="h-auto w-full bg-NGray950 flex flex-col justify-center items-center px-6 py-12 font-Poppins lg:flex-row lg:items-start lg:justify-evenly lg:gap-50 2xl:gap-0 ">
        
          <picture className="border w-45  " >
            <img src="/images/logo.svg" alt="logoShorlty"  className="invert brightness-0 w-full h-full"/>
          </picture>
        
        <ul className="flex flex-col gap-10 items-center lg:flex-row lg:items-start mt-10 lg:mt-0">
          {links.map((link) => (
          <li key={link.id}  className="text-white text-xl font-bold text-center lg:text-left">{link.linkName}
          {link.sublinks && link.sublinks.length > 0 && (

          <ul className="flex flex-col gap-2 mt-6"> 
            {link.sublinks.map((item,i) => (
            <li key={i} className="text-NGray500 text-md font-normal lg:text-left " >{item}</li>
            ))}
          </ul>
          
          )}
          
          </li>
          
          ))}
        
        </ul>


        <ul className="flex gap-8 mt-10 lg:mt-0">
        {socMedia.map((link) => (
        <li >
          <picture>
            <img src={link.src} alt={link.alt}  className="scale-125"/>
          </picture>
        </li>
        ))}
        </ul>

    </section>


 </footer>
 )
 
 }
 export default Footer;