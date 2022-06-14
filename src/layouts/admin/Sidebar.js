import React from "react"
import { Link } from "react-router-dom" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faTachometerAlt,faCirclePlus,faNotesMedical } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav"> 
                 
                    <Link  to="/admin/dashboard" className="nav-link">
                    <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon> </div>
                    <div></div>Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Masters</div>
                    <Link  to="/admin/category" className="nav-link"> 
                    <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon></div>
                     Categories
                    </Link>
                    <Link  to="/admin/subcategory" className="nav-link"> 
                    <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon>  </div>
                        Sub-Categories
                    </Link>
                    <Link  to="/admin/item" className="nav-link"> 
                    <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon> </div> 
                        Items
                    </Link>
                    
                    
                    <div className="sb-sidenav-menu-heading">Data Entry</div>
                    <Link  to="/admin/EntryForm" className="nav-link"> 
                    <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon> </div> 
                       Requisition
                    </Link>
                  
                    <div className="sb-sidenav-menu-heading">Reports</div>
                    <Link  to="#" className="nav-link"> 
                    <div className="sb-nav-link-icon"> <FontAwesomeIcon icon={faNotesMedical}></FontAwesomeIcon> </div> 
                       Daily Report
                    </Link>
                   
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Admin User
            </div>
        </nav>
    )
}

export default Sidebar