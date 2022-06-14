import React from "react"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faTachometerAlt,faCirclePlus,faNotesMedical } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
            <div className="nav"> 
                 
                 <Link  to="/admin" className="nav-link">
                 <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon> </div>
                 <div></div>Dashboard
                 </Link>
                 
                 
                 <div className="sb-sidenav-menu-heading">Data Entry</div>
                 <Link  to="/user/EntryForm" className="nav-link"> 
                 <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon> </div> 
                    Requisition
                 </Link>
               
                 <div className="sb-sidenav-menu-heading">Reports</div>
                 <Link  to="/admin/profile" className="nav-link"> 
                 <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faNotesMedical}></FontAwesomeIcon> </div> 
                    Daily Report
                 </Link>
                
             </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Basic User
            </div>
        </nav>
    )
}

export default Sidebar