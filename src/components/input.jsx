import { useState } from "react"
import Button from "./button"

const UrlInput = () => {

// adding url to be shorten
  const [url,setUrl]=useState("")

// output that will be given to us byapi
  const [shortenURL,setShortenURL]=useState("")

  const [loading,setLoading]=useState(false)


const UrlShortener  = async (url) => {
try {

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
    method:"POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
    url,
    })
    
    })

    const data = await response.json()
      console.log("API DATA")
   
  //  checking if the data itself return undefined or nothing
    if(!data.result_url){
       throw new Error("No shortened URL returned");
    }

    // based on the given object respones given on cleanuri api docs
    return data.result_url;
  



} catch (error) {
    console.error("Error in requesting", error)
        return "";
   
} 
}

const handleShortIt = async ()   => {
 const shorten = await UrlShortener(url)
 setShortenURL(shorten)

}

// console.log(url)
// console.log(shortenURL)

  return (
    <section >

      {/* top white section */}
      <div className="bg-white flex justify-center px-4 h-25 relative border w-full">

      <div className="max-w-6xl w-full h-80 border absolute top-0 flex flex-col">

        {/* input container */}
        <div
          className="
            w-full max-w-6xl
            -mb-20
            rounded-xl
            
            bg-PPurple950
            bg-[url('/images/bg-shorten-mobile.svg')]
            lg:bg-[url('/images/bg-shorten-desktop.svg')]
            bg-no-repeat
            bg-top-right
            bg-size-[100%]
            p-6
            lg:p-16
            2xl:p-12
            flex flex-col
            lg:flex-row
            lg:items-center
            gap-6
            
          "
        >

          <input
            type="text"
            placeholder="Shorten a link here..."
            className="
              lg:flex-1
              h-14
              rounded-lg
              px-6
              lg:h-14
              lg:px-8
              outline-none
              bg-white
            "
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <Button className="bg-PBlue400 h-14 px-2 lg:px-10 lg:h-14 rounded-lg text-white font-bold whitespace-nowrap" onClick={() => handleShortIt(url)}>
            Shorten It!
          </Button>

        </div>
      </div>
      <div className="mt-40 flex justify-end items-end bg-PBlue400 h-20">
        {/* section for the given url to shown  */}
      <p className="text-lg ">{shortenURL || "No shortened URL yet"}</p>
      </div>

      </div>

      {/* bottom gray section */}
      <div className="h-32 bg-NGray400/30"></div>

    </section>
  )
}

export default UrlInput