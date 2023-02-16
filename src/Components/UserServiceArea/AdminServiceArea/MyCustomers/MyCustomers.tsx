import "./MyCustomers.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Model";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";
import CustomerItem from "../../../Items/CustomerItem/CustomerItem";
import store from "../../../../Redux/Store";
import { gotAllCustomersAction } from "../../../../Redux/AdminAppState";

function MyCustomers(): JSX.Element {
    const navigate = useNavigate();
    const addCustomer = () => {
        navigate("/addCustomer");
    };
        const findCustomer = () => {
            navigate("/getSingleCustomer");
        };
    const [customers, setCustomers] = useState<CustomerModel[]>([]);
    useEffect(() => {
        adminWebApi
            .myCustomers()
            .then((res) => {
            store.dispatch(gotAllCustomersAction(res.data))
            setCustomers(res.data)})
            .catch((err) => notify.error(err));
    },[]);

    return (
        <div>
            <div className="NavigateCompany">
                <button className="Button" onClick={addCustomer}>
                    Add Customer
                </button>
                <button className="Button" onClick={findCustomer}>
                    Find Customer
                </button>
            </div>
            <div className="MyCustomers">
                {customers.map((c, idx) => (
                    <CustomerItem key={"c" + idx} customer={c} />
                ))}
            </div>
        </div>
    );
}
export default MyCustomers;
