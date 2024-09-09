import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Topbar() {
  const { user ,dispatch} = useContext(Context); 
  const PF="http://localhost:5000/images/"
  const handleLogout=()=>{
     dispatch({type:"LOGOUT"});
  }
  
  return (

    <div className='top'>
        <div className="topLeft">
         <div className="CRE8X"><p className="CRE">🅲🆁🅴8🆇</p></div> 
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistItem">
                <Link className="link" to="/">HOME</Link>
                </li>
                
                <li className="toplistItem">
                <Link className="link" to="/ideas">
                 IDEAS
                 <ul className="subList">
                 <li>
                 <Link className="link" to="/adv">Adventure</Link>
                 </li>   
                 <li>
                 <Link className="link" to="/art">Art and Culture</Link>
                 </li> 
                 <li>
                 <Link className="link" to="/festival">Festival and Events</Link>
                 </li> 
                 <li>
                 <Link className="link" to="/food">Food and Wine</Link>
                 </li> 
                 <li>
                 <Link className="link" to="/road">Roadtrips</Link>
                 </li>     
              </ul>
                </Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/Write">
              WRITE
          </Link> 
                </li>
                {user && <li className="toplistItem" onClick={handleLogout}>LOGOUT</li>}
            </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/Settings">
            <img className="topimg"src={"https://media.istockphoto.com/id/1389361465/photo/profile-portrait-of-smiling-black-man-in-studio.jpg?s=2048x2048&w=is&k=20&c=WqRLK2DUZTHPukdyvZMGbLrHoFV7uy5fSkkRSH5NL8A="} alt="" />
              </Link>
          
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
            <Link className="link" to="/login">
              LOGIN
          </Link>         
            </li>
            <li className="toplistItem">
            <Link className="link" to="/Register">
              REGISTER
          </Link>           
            </li>
          </ul>
        )}
        

      </div>

   </div>
  )
}
