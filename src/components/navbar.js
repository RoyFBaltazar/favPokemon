import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <nav style={navStyle}>
 <Link to='/' style={{color: '#3c5aa6'}}>Home</Link> <br/>
 <Link to='/Battle' style={{color: '#3c5aa6'}}>Battle</Link> <br/>                
<Link to='/Search' style={{color: '#3c5aa6'}}>Search Pokemon</Link> 

        </nav>

   )
   
}
const navStyle={
    display: 'flex',
    justifyContent: 'space-around',
    height: '50px',
    
}
export default NavBar;