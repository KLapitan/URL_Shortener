import Button from "./button";

const Ads = () => {
return (
<section className=" w-full bg-[url('/images/bg-boost-mobile.svg')]  sm:bg-[url('/images/bg-boost-desktop.svg')] h-60 bg-no-repeat bg-cover bg-center lg:bg-cover bg-PPurple950 font-Poppins flex flex-col justify-center items-center lg:gap-6 gap-3">
<h3 className="text-white text-2xl lg:text-4xl font-bold">Boost your links today</h3>
<Button className="text-white  py-3 p-10  lg:py-3 lg:p-11 rounded-full bg-PBlue400 font-bold ">Get Started</Button>

</section>


)
}
export default Ads;