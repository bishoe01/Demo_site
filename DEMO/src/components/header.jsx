import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.scss";
function Header(props) {
    const navigate = useNavigate();
    const [clickItem, setClickItem] = useState(false);
    const OnSelect = (e) => {
        let item__name = e.target.innerHTML;
        if (item__name === "Home") {
            window.location.href = "/";
        }
    }
    return (
        <section className='navbar'>
            <img className='navbar__logo' src="https://drx-media.s3.ap-northeast-2.amazonaws.com/image/icon/icon-no-padding.png" alt="logoImg" />
            <div className='navbar__items'>
                    <Link to="/" className='navbar__item' onClick={(
                        e => {
                            setClickItem(true);
                            console.log(e.target.innerHTML);
                        }
                    )} >ABOUT</Link>
                    <Link to="/teams" className='navbar__item'>TEAMS</Link>
                    <Link to="/partners" className='navbar__item'>PARTNERS</Link>
                    <Link to="/schedule" className='navbar__item'>SCHEDULE</Link>
            </div>
        </section>
    );
}

export default Header;