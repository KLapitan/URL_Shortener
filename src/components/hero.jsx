import UrlInput from "./input";
import Services from "./services";
import Button from "./button";
const Hero = () => {

return(

<main className="h-auto">
    <section className="h-auto" >
      {/* mid - large view flex row reverse */}
      <div className="flex flex-col sm:flex-row-reverse    sm:h-90 lg:h-126 2xl:h-130">

        {/* image container */}
          <div className=" max-w-2xl  h-80   overflow-hidden  sm:h-full   2xl:w-2xl   ">
              <picture>
                <img src="/images/illustration-working.svg" alt="herosectionlogo"  className=" w-full h-full  object-cover object-left ml-7 lg:object-contain lg:overflow-hidden lg:ml-20 lg:-mt-3 lg:scale-120 xl:scale-100  2xl:scale-112 2xl:ml-10 " />
              </picture>
            
          </div>
            <div className="max-w-2xl lg:mx-1    xl:w-xl font-Poppins sm:p-2 flex flex-col items-center  gap-4  sm:items-start  sm:justify-center  lg:p-2 lg:w-152   2xl:w-2xl   ">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-left 2md:text-xl lg:text-6xl lg:text-left xl:-ml-2 2xl:text-7xl 2xl:-ml-3">More than just shorter links</h2>

                <p className="text-center text-NGray500 w-72 sm:text-left lg:w-140 lg:text-lg lg:text-left xl:-ml-2 2xl:-ml-3">Build your brand’s recognition and get detailed insights on how your links are performing.</p>

                <Button className="text-white bg-PBlue400 font-bold text-xl  py-4 rounded-full w-46 h-full sm:h-15 lg:h-12 lg:py-2 lg:w-42 lg:text-sm  xl:-ml-2 2xl:-ml-3">Get Started</Button>
            </div>
          </div>


    </section>

      <UrlInput/>
      <Services/>
      

</main>
)

}
export default Hero;



// bg-[url('/images/illustration-working.svg')] border h-140  bg-no-repeat bg-[length:140%] bg-left scale-100