import { Link } from "react-router-dom";

const NavBar=()=>{
    return(<div>
        <nav>
 <Link to='/'>Home</Link> <br/>                  
<Link to='/Search'>Search Pokemon</Link> 

        </nav>

    </div>)
}
export default NavBar;