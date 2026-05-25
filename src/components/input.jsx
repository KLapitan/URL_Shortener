import Button from "./button"

const UrlInput = () => {
  return (
    <section className="relative">

      {/* top white section */}
      <div className="bg-white flex justify-center px-4 h-25">

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
          />

          <Button className="bg-PBlue400 h-14 px-2 lg:px-10 lg:h-14 rounded-lg text-white font-bold whitespace-nowrap">
            Shorten It!
          </Button>

        </div>
      </div>

      {/* bottom gray section */}
      <div className="h-32 bg-NGray400/30"></div>

    </section>
  )
}

export default UrlInput