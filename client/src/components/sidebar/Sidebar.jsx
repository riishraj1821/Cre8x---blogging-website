import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const[cats,setCats]=useState([]);
    useEffect(()=>{
         const getCats=async()=>{
            const res= await axios.get("/categories")
            setCats(res.data)
         }
         getCats()
    },[])
    return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">About ME</span>
                <img src="https://empressthemes.com/wp-content/uploads/2017/12/how-large-to-size-images-for-my-blog-posts.jpg" alt="" />
                <p className="ptag">Welcome to CRE8X,   <p>"Explore the secrets of the universe with our latest blog post on mind-bending black holes, where space-time warps and light can't escape. Dive into the mysterious depths of these cosmic enigmas and uncover the wonders of the cosmos. Discover the unknown with us today!"</p>
</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">Trending</span>
            <ul className="sidebarlist">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`}className="link"><li className="sidebarlistitem">{c.name}</li></Link>

                ))}
                

            </ul>
        </div>
        {/* <div className="sidebaritem">
            <span className="sidebartitle">Follow Us</span>
            
        </div> */}
    </div>
  )
}
