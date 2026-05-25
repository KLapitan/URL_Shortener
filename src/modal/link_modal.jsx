import Button from "../components/button"
const NavModal = ({links}) => {


return (
<div className="bg-PPurple950 w-86 h-auto absolute top-10 right-1 p-2 rounded-lg flex flex-col justify-center items-center">

<ul className="w-full h-50   flex flex-col font-Poppins text-white text-2xl justify-center items-center gap-7 ">
{links.map((link) => (
<li key={link.id}>{link.name}</li>
))}
</ul>

<div className="w-72  border-white border"></div>

<div className="font-Poppins flex flex-col gap-2 mb-4">
<Button className="text-white text-2xl py-4 px-24   ">Login</Button>
<Button className="text-white text-2xl  bg-PBlue400 py-4 px-24 rounded-full hover:bg-PBlue400/20">Sign up</Button>

</div>

</div>


)
}
export default NavModal