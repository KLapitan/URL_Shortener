const Services = () => {


return(
<section className="h-350  w-full  bg-NGray400/30 font-Poppins sm:h-150 lg:h-200  lg:flex lg:flex-col lg:justify-center lg:items-center  lg:gap-4">
      <h2 className="text-3xl font-bold text-center lg:text-4xl">Advanced Statistics</h2>
      <p className="text-lg text-center w-auto p-4 text-NGray500 mb-15 lg:w-xl lg:place-self-center-safe">  Track how your links are performing across the web with our advanced statistics dashboard.</p>

        {/* brand , detailed ,customaizable */}
        <div className="h-auto  max-w-6xl  lg:place-self-center  flex flex-col  md:flex-row justify-center items-center  lg:w-full">
            {/* brand */}
            <div className="h-76 w-86 bg-white rounded-lg  lg:p-2 lg:w-96 ">
            
            {/* image-logo */}
            <div className="border w-21 h-21 -mt-10 ml-32 rounded-full  bg-NGray900 flex items-center justify-center p-3 lg:ml-10 lg:transition-all lg:duration-300 lg:ease-in">
                <picture>
                <img src="/images/icon-brand-recognition.svg" alt="brand-recognition " className="w-10 h-10 place-self-center" />
                </picture>
              </div>
                 <h3 className="text-center  text-2xl font-bold mt-10 lg:text-left lg:ml-5">Brand Recognition</h3>
                  <p className="text-center text-lg p-5  tracking-tight text-NGray500 overflow-hidden h-40 lg:text-left"> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
        
          {/* connector */}
          <div className=" w-2 h-20 place-self-center bg-PBlue400 sm:w-20 sm:h-2 "></div>
       
           {/*Detailed Reords  */}
       <div className="h-76 w-86 bg-white rounded-lg lg:mt-15 lg:p-2 lg:w-96">
            
            {/* image-logo */}
            <div  className="border w-21 h-21 -mt-10 ml-32 rounded-full  bg-NGray900 flex items-center justify-center p-3 lg:ml-10 lg:transition-all lg:duration-300 lg:ease-in ">
                <picture>
                <img src="/images/icon-detailed-records.svg" alt="detailed-records " className="w-10 h-10 place-self-center" />
                </picture>
              </div>
                 <h3 className="text-center  text-2xl font-bold mt-10 lg:text-left lg:ml-5 ">Detailed Records</h3>
                  <p className="text-center text-lg p-5  tracking-tight text-NGray500 overflow-hidden h-40 lg:text-left"> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
                 {/* connector */}
          <div className=" w-2 h-20 place-self-center bg-PBlue400  md:w-20 md:h-2  "></div>

          {/* Fully Customizable */}
          <div className="h-76 w-86 bg-white rounded-lg lg:mt-36 lg:p-2 lg:w-96 ">
            
            {/* image-logo */}
            <div  className="border w-21 h-21 -mt-10 ml-32 rounded-full  bg-NGray900 flex items-center justify-center p-3 lg:ml-10 lg:transition-all lg:duration-300 lg:ease-in ">
                <picture>
                <img src="/images/icon-fully-customizable.svg" alt="fully-customizable " className="w-10 h-10 place-self-center" />
                </picture>
              </div>
                 <h3 className="text-center  text-2xl font-bold mt-10 lg:text-left lg:ml-5">Fully Customizable </h3>
                  <p className="text-center text-lg p-5  tracking-tight text-NGray500 overflow-hidden h-40 lg:text-left  ">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement..</p>
            </div>


      </div>
        



</section>
)
}
export default Services;