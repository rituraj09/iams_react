import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import Category from "../components/admin/Master/Category";
import Subcategory from "../components/admin/Master/Subcategory";
import Item from "../components/admin/Master/Item";
import Home from "../components/user/Home";
import AddDomain from "../components/user/AddDomain"; 
import UserProfile from "../components/user/Profile";
import Services from "../components/user/Services";
import CategoryView from "../components/admin/Master/CategoryView";
import Viewsub from "../components/admin/Master/SubcategoryView";
import EditCategory from "../components/admin/Master/EditCategory";
import EditSubCategory from "../components/admin/Master/SubCategoryEdit";
import EntryForm from "../components/admin/Master/EntryForm";

import NazaratDashboard from "../components/admin/nazaratDashboard";
import Vieworder from "../components/admin/Vieworder";
import ModalDialog from "../components/admin/Master/popup";

const routes =[
    {path: '/admin', exact: true, name:'Admin'},
    {path: '/admin/dashboard', exact: true, name:'Dashboard', component : Dashboard     },
    {path: '/admin/profile', exact: true, name:'Profile', component:  Profile   },
    {path: '/admin/category', exact: true, name:'Category', component:  Category   },
    {path: '/admin/view-category', exact: true, name:'CategoryView', component:  CategoryView   },
    {path: '/admin/edit-category/:id', exact: true, name:'EditCategory', component:  EditCategory   },

    {path: '/admin/subcategory', exact: true, name:'Subcategory', component:  Subcategory   },
    {path: '/admin/viewsub', exact: true, name:'Viewsub', component:  Viewsub   },
    {path: '/admin/edit-subcategory/:id', exact: true, name:'EditSubCategory', component:  EditSubCategory   },


    {path: '/admin/item', exact: true, name:'Item', component:  Item   },
    {path: '/admin/view-items', exact: true, name:'Item', component:  Item   },

    {path: '/admin/EntryForm', exact: true, name:'EntryForm', component:  EntryForm   },

    {path: '/admin/nazarat', exact: true, name:'NazaratDashboard', component : NazaratDashboard  },
    {path: '/admin/Vieworder/:id', exact: true, name:'Vieworder', component:  Vieworder   },
    {path: '/admin/pop', exact: true, name:'ModalDialog', component : ModalDialog  },
    
    


    {path: '/user', exact: true, name:'User'},
    {path: '/user/home', exact: true, name:'Home', component : Home },
    {path: '/user/addDomain', exact: true, name:'AddDomain', component : AddDomain     },
    {path: '/user/profile', exact: true, name:'UserProfile', component:  UserProfile   },
    {path: '/user/services', exact: true, name:'Services', component : Services     },
    
]; 

export default routes