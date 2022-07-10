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
import viewItem from "../components/admin/Master/viewItem";
import NazaratDashboard from "../components/admin/nazaratDashboard";
import Vieworder from "../components/admin/Vieworder";
import itemEdit from "../components/admin/Master/itemEdit";
import ApprovedOrder from "../components/user/approved_order";
import ModalDialog from "../components/admin/Master/popup";
import Viewfinalorder from "../components/user/Viewfinalorder";
import ItemTest from "../components/admin/Master/itemtest";
import Orderpdf from "../components/user/orderpdf";
import StockEntry from "../components/admin/stockEntry";
import { Modal } from "../components/admin/printModal";
import ApprovedOrderAdmin from "../components/admin/Master/approved_order"
import ViewfinalorderAdmin from "../components/admin/Master/Viewfinalorder";
import OrderpdfAdmin from "../components/admin/Master/orderpdf";
import StockView from "../components/admin/stockView";
import Vieworderold from "../components/admin/vieworder_old";
import Editstockdata from "../components/admin/Editstockdata";
import AdminDashboard from "../components/administrator/Dashboard";
import Register from "../components/frontend/auth/Register";

const routes =[
    {path: '/admin', exact: true, name:'Admin'},
    {path: '/admin/dashboard', exact: true, name:'Dashboard', component : Dashboard     },
    {path: '/Register', exact: true, name:'Register', component : Register     },
    {path: '/admin/profile', exact: true, name:'Profile', component:  Profile   },
    {path: '/admin/category', exact: true, name:'Category', component:  Category   },
    {path: '/admin/view-category', exact: true, name:'CategoryView', component:  CategoryView   },
    {path: '/admin/edit-category/:id', exact: true, name:'EditCategory', component:  EditCategory   },

    {path: '/admin/subcategory', exact: true, name:'Subcategory', component:  Subcategory   },
    {path: '/admin/viewsub', exact: true, name:'Viewsub', component:  Viewsub   },
    {path: '/admin/edit-subcategory/:id', exact: true, name:'EditSubCategory', component:  EditSubCategory   },
    {path: '/admin/item', exact: true, name:'Item', component:  Item   },
    {path: '/admin/view-items', exact: true, name:'viewItem', component:  viewItem   },
    {path: '/admin/itemtest', exact: true, name:'ItemTest', component:  ItemTest   },
    {path: '/admin/stockentry', exact: true, name:'StockEntry', component:  StockEntry   },
    {path: '/admin/print', exact: true, name:'Modal', component:  Modal   },
    {path: '/admin/approvedorder', exact: true, name:'ApprovedOrderAdmin', component:  ApprovedOrderAdmin   },
    {path: '/admin/Viewfinalorder/:id', exact: true, name:'ViewfinalorderAdmin', component : ViewfinalorderAdmin     },
    {path: '/admin/orderpdf/:id', exact: true, name:'OrderpdfAdmin', component : OrderpdfAdmin     },
    {path: '/admin/StockView/:id', exact: true, name:'StockView', component : StockView     },
    {path: '/admin/StockView/Editstockdata/:id', exact: true, name:'Editstockdata', component : Editstockdata     },
    {path: '/admin/pop', exact: true, name:'ModalDialog', component : ModalDialog     },
    {path: '/admin/Vieworderold', exact: true, name:'Vieworderold', component : Vieworderold     },



    {path: '/admin/viewReq', exact: true, name:'NazaratDashboard', component : NazaratDashboard  },
    {path: '/admin/Vieworder/:id', exact: true, name:'Vieworder', component:  Vieworder   }, 
    {path: '/admin/edit-item/:id', exact: true, name:'itemEdit', component:  itemEdit   }, 
    {path: '/user/EntryForm', exact: true, name:'EntryForm', component:  EntryForm   },


    {path: '/user', exact: true, name:'User'},
    {path: '/user/home', exact: true, name:'Home', component : Home },
    {path: '/user/approved-order', exact: true, name:'ApprovedOrder', component : ApprovedOrder },
    {path: '/user/addDomain', exact: true, name:'AddDomain', component : AddDomain     },
    {path: '/user/profile', exact: true, name:'UserProfile', component:  UserProfile   },
    {path: '/user/services', exact: true, name:'Services', component : Services     },
    {path: '/user/Viewfinalorder/:id', exact: true, name:'Viewfinalorder', component : Viewfinalorder     },
    {path: '/user/orderpdf/:id', exact: true, name:'Orderpdf', component : Orderpdf     },

    {path: '/administrator', exact: true, name:'administrator'},
    {path: '/administrator/Dashboard', exact: true, name:'AdminDashboard', component : AdminDashboard },
    
]; 

export default routes