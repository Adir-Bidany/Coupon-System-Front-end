import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Login from "../AuthArea/Login/Login";
import Logout from "../AuthArea/Logout/Logout";
// import Register from "../AuthArea/Register/Register";
import About from "../PagesArea/About/About";
import Developer from "../PagesArea/Developer/Developer";
import Home from "../PagesArea/Home/Home";
import Page404 from "../PagesArea/Page404/Page404";
import AddCompany from "../UserServiceArea/AdminServiceArea/AddCompany/AddCompany";
import AddCustomer from "../UserServiceArea/AdminServiceArea/AddCustomer/AddCustomer";
import DeleteCompany from "../UserServiceArea/AdminServiceArea/DeleteCompany/DeleteCompany";
import DeleteCustomer from "../UserServiceArea/AdminServiceArea/DeleteCustomer/DeleteCustomer";
import GetAllCompanies from "../UserServiceArea/AdminServiceArea/GetAllCompanies/GetAllCompanies";
import MyCustomers from "../UserServiceArea/AdminServiceArea/MyCustomers/MyCustomers";
import UpdateCompany from "../UserServiceArea/AdminServiceArea/UpdateCompany/UpdateCompany";
import AddCouponArea from "../UserServiceArea/CompanyServiceArea/AddCouponArea/AddCouponArea";
import CompanyCoupons from "../UserServiceArea/CompanyServiceArea/CompanyCoupons/CompanyCoupons";
import DeleteCoupon from "../UserServiceArea/CompanyServiceArea/DeleteCoupon/DeleteCoupon";
import UpdateCoupon from "../UserServiceArea/CompanyServiceArea/UpdateCoupon/UpdateCoupon";
import MyCouponsArea from "../UserServiceArea/CustomerServiceArea/MyCouponsArea/MyCouponsArea";
import PurchaseCouponArea from "../UserServiceArea/CustomerServiceArea/PurchaseCouponArea/PurchaseCouponArea";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                {/* <Route path="register" element={<Register />} /> */}
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="purchase" element={<PurchaseCouponArea />} />
                <Route path="myCoupons" element={<MyCouponsArea />} />
                <Route path="addCoupon" element={<AddCouponArea />} />
                <Route path="addCompany" element={<AddCompany />} />
                <Route path="addCustomer" element={<AddCustomer />} />
                <Route path="deleteCompany/:id" element={<DeleteCompany />} />
                <Route path="updateCompany/:id" element={<UpdateCompany />} />
                <Route path="myCompanies" element={<GetAllCompanies />} />
                <Route path="myCustomers" element={<MyCustomers />} />
                <Route path="addCompany" element={<AddCompany />} />
                <Route path="companyCoupons" element={<CompanyCoupons />} />
                <Route path="deleteCoupon/:id" element={<DeleteCoupon />} />
                <Route path="updateCoupon/:id" element={<UpdateCoupon />} />
                <Route path="deleteCustomer/:id" element={<DeleteCustomer />} />
                <Route path="developer" element={<Developer />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
