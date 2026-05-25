import Nav from "../components/nav"
import Hero from "../components/hero"
import Footer from "../components/footer"

const flinks = [
{
  id:0,
  linkName:"Features",
  sublinks:["Link Shortening" , "Branded Links" , "Analytics"]


},
{
  id:1,
  linkName:"Resources",
  sublinks:["Blog" , "Developers" , "Support"]


},
{
  id:2,
  linkName:"Company",
  sublinks:["About" , "Our Team" , "Careers","Contact"]
}]


const nLinks = [

{id:0,name:"Features"},
{id:1,name:"Pricing"},
{id:2,name:"Resources"}

]

const socialMedia = [
{
  id:0,
  src:"/images/icon-facebook.svg",
  alt:"facebook",
},
{
  id:1,
  src:"/images/icon-twitter.svg",
  alt:"twitter",
},
{
  id:2,
  src:"/images/icon-pinterest.svg",
  alt:"pinterest",
},
{
  id:3,
  src:"/images/icon-instagram.svg",
  alt:"instagram",
}

]

const Layout = () => {
return(
<>
<Nav links={nLinks}  socMedia={socialMedia}/>
<Hero/>
<Footer links={flinks}  socMedia={socialMedia}/>
</>
)
}
export default Layout