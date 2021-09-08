import { ImPencil2 } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink,Link } from "react-router-dom";
import '../css/Nav.css';
import { useEffect, useRef, useState } from "react";
const Nav = () =>{
    const sidebarRef= useRef();
    const [menuOpen,setMenu]= useState(false);
    const [subMenuOpen,setSubMenu]= useState(false);
    const toggleMenu = () =>{
        setMenu(!menuOpen);
    }
    const toggleSubMenu = () =>{
        setSubMenu(!subMenuOpen);
    }
    useEffect(()=>{
        let handler = (event)=>{
            if(!sidebarRef.current.contains(event.target)){
                setMenu(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return ()=>{
            document.removeEventListener('mousedown',handler);
        }
    });
    return(
        <>
        <nav>
            <div className='nav'>
            <div className="nav_i" id="logo">
                <Link style={{textDecoration:"none"}} to="/">
                    <h1 className="heading"><span className="pencil"><ImPencil2 style={{textShadow:"2px 2px 4px red",}}/></span><span className="text">S.S. Academy</span></h1>
                </Link>
            </div>
            <div className="nav_i" id="menu">
                <ul type="none">
                <li><NavLink to="/" exact  className="link" activeClassName="link_active" style={{textDecoration:"none"}}>Home</NavLink></li>
                    <li><NavLink to="/courses" className="link" activeClassName="link_active" id="courses" style={{textDecoration:"none"}}>Courses</NavLink>
                        <ul type="none">
                            <li><Link className="inner_link" to='/courses/9th'>9th Class</Link></li>
                            <li><Link className="inner_link" to='/courses/10th'>10th Class</Link></li>
                            <li><Link className="inner_link" to='/courses/11th'>11th Class</Link></li>
                            <li><Link className="inner_link" to='/courses/12th'>12th Class</Link></li>
                            <li><Link className="inner_link" to='/courses/bcom'>B.com Class</Link></li>
                            <li><Link className="inner_link" to='/courses/ba'>BA Class</Link></li>
                        </ul>
                    </li>
                    <li><NavLink to="/faculty" activeClassName="link_active" className="link" style={{textDecoration:"none"}}>Faculty</NavLink></li>
                    <li><NavLink to="/examination" activeClassName="link_active" className="link" style={{textDecoration:"none"}}>Examination</NavLink></li>
                </ul>

                {/* hamburger menu */}
            <div className='hamburger_menu'>
                <Link to='#'><FaBars className='bar' onClick={toggleMenu}/></Link>
            </div>
            </div>
            </div>
            {/* sidebar */}
            <div ref={sidebarRef}>
            <div className={menuOpen?'cross_container active':'cross_container'}><Link to='#'><AiOutlineClose className='cross' onClick={toggleMenu}/></Link></div>
            <div className={menuOpen?'sidebar active':'sidebar'}>
                <div className='list_container'>
                    <ul type='none'>
                        <li><NavLink to='/' exact activeClassName="sidebar_link_active">Home</NavLink></li>
                        <li><NavLink to='#' onClick={toggleSubMenu} >Courses<RiArrowDownSLine className='down'/></NavLink>
                        {subMenuOpen?<ul id='inner_list' type='none'>
                            <li><NavLink to='/courses' exact activeClassName="sidebar_link_active">All Courses</NavLink></li>
                            <li><NavLink to='/courses/9th' exact activeClassName="sidebar_link_active">9th Class</NavLink></li>
                            <li><NavLink to='/courses/10th' exact activeClassName="sidebar_link_active">10th Class</NavLink></li>
                            <li><NavLink to='/courses/11th' exact activeClassName="sidebar_link_active">11th Class</NavLink></li>
                            <li><NavLink to='/courses/12th' exact activeClassName="sidebar_link_active">12th Class</NavLink></li>
                            <li><NavLink to='/courses/bcom' exact activeClassName="sidebar_link_active">B.com Class</NavLink></li>
                            <li><NavLink to='/courses/ba' exact activeClassName="sidebar_link_active">BA Class</NavLink></li>
                        </ul>:null}
                        </li>
                        <li><NavLink to='/faculty' exact activeClassName="sidebar_link_active">Faculty</NavLink></li>
                        <li><NavLink to='/examination' exact activeClassName="sidebar_link_active">Examination</NavLink></li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
        </>
    );
}
export default Nav;