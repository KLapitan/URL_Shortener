import Button from "./button"
const UrlInput = () => {
return(
<section className="h-75 relative z-20">
<div className=" h-35 w-full bg-white z-30 ">


{/* input */}
<div className="absolute min-w-auto sm:w-full sm:left-0 border h-38 bg-NGray900 z-70 top-15 left-5 p-4 rounded-lg flex flex-col gap-4 font-Poppins bg-[url('/images/bg-shorten-mobile.svg')] bg-[length:80%] bg-top-right bg-no-repeat">
<input type="text" placeholder="Shorten a link here.."  className="bg-white w-full h-12 rounded-md px-4"/>
<Button classname="bg-PBlue400 w-full h-12 rounded-md text-white font-bold ">Shorten it!</Button>
</div>

</div>


<div className="h-35 w-full bg-NGray500/30 z-30"></div>


</section>


)




}
export default UrlInput