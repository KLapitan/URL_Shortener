import UrlInput from "./input";
import Button from "./button";
const Hero = () => {

return(

<main className="h-auto">
    <section className="h-auto  border-2 border-green-300" >

        {/* image container */}
          <div className="w-full  h-80   overflow-hidden ">
          
            <picture>
              <img src="/images/illustration-working.svg" alt="herosectionlogo"  className=" p-1 w-full h-full  object-cover object-left ml-7"/>
            </picture>
          
          </div>
            <div className="w-full font-Poppins p-4 flex flex-col items-center gap-4 border">
                <h2 className="text-center text-4xl font-bold tracking-tight">More than just shorter links</h2>

                <p className=" border text-center text-NGray500 w-72">Build your brand’s recognition and get detailed insights on how your links are performing.</p>

                <Button classname="text-white bg-PBlue400 font-bold text-xl  py-4 rounded-full w-46 h-full">Get Started</Button>
            </div>



    </section>

      <UrlInput/>

</main>
)

}
export default Hero;



// bg-[url('/images/illustration-working.svg')] border h-140  bg-no-repeat bg-[length:140%] bg-left scale-100