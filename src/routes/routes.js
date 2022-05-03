import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import Category from "../components/admin/Master/Category";
import Subcategory from "../components/admin/Master/Subcategory";
import Item from "../components/admin/Master/Item";



import Home from "../components/user/Home";
import AddDomain from "../components/user/AddDomain"; 
import UserProfile from "../components/user/Profile";
import Services from "../components/user/Services";

import view from "../components/admin/Master/view";

const routes =[
    {path: '/admin', exact: true, name:'Admin'},
    {path: '/admin/dashboard', exact: true, name:'Dashboard', component : Dashboard     },
    {path: '/admin/profile', exact: true, name:'Profile', component:  Profile   },
    {path: '/admin/category', exact: true, name:'Category', component:  Category   },
    {path: '/admin/subcategory', exact: true, name:'Subcategory', component:  Subcategory   },
    {path: '/admin/item', exact: true, name:'Item', component:  Item   },

    {path: '/admin/view', exact: true, name:'Item', component:  view   },
    
    
    {path: '/user', exact: true, name:'User'},
    {path: '/user/home', exact: true, name:'Home', component : Home },
    {path: '/user/addDomain', exact: true, name:'AddDomain', component : AddDomain     },
    {path: '/user/profile', exact: true, name:'UserProfile', component:  UserProfile   },
    {path: '/user/services', exact: true, name:'Services', component : Services     },
]; 

export default routes