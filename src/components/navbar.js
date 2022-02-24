import { Link } from "react-router-dom";

const NavBar=()=>{
    return(<div>
        <nav>
 <Link to='/'>Home</Link> <br/>                  
<Link to='/Fav'>Favorite Pokemon</Link> 

        </nav>

    </div>)
}
export default NavBar;