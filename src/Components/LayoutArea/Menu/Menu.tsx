import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import "./Menu.css";


function Menu(): JSX.Element {
    return (
        <div className="Menu row">
            <CustomLink to={"home"}>Home</CustomLink>
            <CustomLink to={"purchase"}>Purchase Coupon</CustomLink>
            <CustomLink to={"myCoupons"}>My coupons</CustomLink>
            <CustomLink to={"myCompanies"}>My companies</CustomLink>
            <CustomLink to={"myCustomers"}>My customers</CustomLink>
            <CustomLink to={"companyCoupons"}>Company coupons</CustomLink>
            <CustomLink to={"about"}>About</CustomLink>
            <CustomLink to={"developer"}>Developer</CustomLink>
        </div>
    );
}



export default Menu;
