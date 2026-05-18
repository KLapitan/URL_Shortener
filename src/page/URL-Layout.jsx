import Hero from "../components/hero"
import Footer from "../components/footer"

const links = [
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

<Hero/>
<Footer links={links}  socMedia={socialMedia}/>
</>
)
}
export default Layout