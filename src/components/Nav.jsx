import { Link } from "react-router-dom";
const Nav = () => {



    return(
<div>
    <h1>Sarah Duperoux</h1>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/about-me'>About Me</Link>
    <Link to='/contact-me'>Contact Me</Link>
</div>
    )
}

export default Nav