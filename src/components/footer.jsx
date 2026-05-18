 const Footer = ({links,socMedia}) => {
 return (
 <footer className="h-auto">
    <section className="h-auto w-full bg-NGray950 flex flex-col justify-center items-center font-Poppins ">
        
          <picture className="border w-45 m-10" >
            <img src="/images/logo.svg" alt="logoShorlty"  className="invert brightness-0 w-full h-full"/>
          </picture>
        
        <ul className="flex flex-col gap-7 border mb-9 ">
          {links.map((link) => (
          <li key={link.id} className="text-white text-xl text-center font-bold ">{link.linkName}
          {link.sublinks && link.sublinks.length > 0 && (
          <ul className="flex flex-col gap-2 m-2 mt-7"> 
            {link.sublinks.map((item,i) => (
            <li key={i} className="text-NGray500 text-md font-normal">{item}</li>
            ))}
          </ul>
          
          )}
          
          </li>
          
          ))}
        
        </ul>


        <ul className="flex flex-row gap-10 mb-12">
        {socMedia.map((link) => (
        <li >
          <picture>
            <img src={link.src} alt={link.alt}  className="w-full h-full scale-150"/>
          </picture>
        </li>
        ))}
        </ul>

    </section>


 </footer>
 )
 
 }
 export default Footer;