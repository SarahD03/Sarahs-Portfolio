import { Link } from "react-router-dom";
const Nav = () => {



    return(
<div className="nav">
    <h4>Sarah Duperoux</h4>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/about-me'>About Me</Link>
    <Link to='/contact'>Contact Me</Link>
</div>
    )
}

export default Nav