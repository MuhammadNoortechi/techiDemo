import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import techilab from "./assets/techilab.png"
import "./Header.scss";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [color,setColor]=useState(false)

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
// scroll color change
const changeColor =()=>{
  if(window.scrollY >=56){
    setColor(true)
  } else{
    setColor(false)
  }
}

window.addEventListener("scroll",changeColor)
/////
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={color ? "header fixed-top navbar-scrolled " :"header fixed-top "}>
      <div className="container pt-1">
      <div className="header__content" >
        <Link to="/" className="header__content__logo">
        <img src={techilab} alt="" style={{width:"6rem"}} className="logo" />
        </Link>
        <nav 
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu" } `  : ""} 
          }`}
        >
          <ul  >
            <li 
>
              <Link to="/" className={color ? "navbar-a text-uppercase  navbar-a-scrolled  " :"navbar-a text-uppercase "} >Home</Link>
            </li>
            <li >
              <Link to="/about" className={color ? "navbar-a  text-uppercase navbar-a-scrolled " :"navbar-a text-uppercase "} >About</Link>
            </li>
            <li >
              <Link to="/service" className={color ? "navbar-a  text-uppercase navbar-a-scrolled " :"navbar-a text-uppercase "} >Services</Link>
            </li >
            <li >
              <Link to="/career" className={color ? "navbar-a  text-uppercase navbar-a-scrolled " :"navbar-a text-uppercase "} > Career</Link>
            </li>

       
            <Link to="/contact">
              {/* <button className="btn btn__login text-uppercase btn-header-letstalk">Let's Talk</button> */}
              <button className={color ? "btn-header-letstalk scrolled-header-btn" : "btn-header-letstalk"}>Let's Talk</button>
            </Link>
          </ul>
        </nav>
        <div className="header__content__toggle ">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;