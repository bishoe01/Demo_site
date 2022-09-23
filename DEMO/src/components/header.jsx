import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.scss";
function Header(props) {
    const navigate = useNavigate();
    const [clickItem, setClickItem] = useState("home");
    
    return (
        <section className='navbar'>
            <img className='navbar__logo' src="https://drx-media.s3.ap-northeast-2.amazonaws.com/image/icon/icon-no-padding.png" alt="logoImg" />
            <div className='navbar__items'>
                <Link to="/" className='navbar__item' onClick={(e) => setClickItem(e.target.innerHTML)}
                style={{
                    borderBottom: clickItem === "HOME" ? "3px solid #5A8DFF" : "",
                    fontWeight : clickItem === "HOME" ? "bold" : ""
                }}>HOME</Link>
                <Link to="/teams" className='navbar__item' onClick={(e) => setClickItem(e.target.innerHTML)}
                style={{
                    borderBottom: clickItem === "TEAMS" ? "3px solid #5A8DFF" : "",
                    fontWeight : clickItem === "TEAMS" ? "bold" : ""
                }}>TEAMS</Link>
                <Link to="/partners" className='navbar__item' onClick={(e) => setClickItem(e.target.innerHTML)}
                style={{
                    borderBottom: clickItem === "PARTNERS" ? "3px solid #5A8DFF" : "",
                    fontWeight : clickItem === "PARTNERS" ? "bold" : ""
                }}
                >PARTNERS</Link>
                <Link to="/schedule" className='navbar__item' onClick={(e)=>setClickItem(e.target.innerHTML)} 
                style={{
                    borderBottom: clickItem === "SCHEDULE" ? "3px solid #5A8DFF" : "",
                    fontWeight : clickItem === "SCHEDULE" ? "bold" : ""
                }}
                >SCHEDULE</Link>
            </div>
        </section>
    );
}

export default Header;