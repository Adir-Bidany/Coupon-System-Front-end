import "./MyCustomers.css";
import { useEffect, useState } from "react";
import { VscTrash } from "react-icons/vsc";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Model";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";
import CustomerItem from "../../../Items/CustomerItem/CustomerItem";

function MyCustomers(): JSX.Element {
    const navigate = useNavigate();
    const addCustomer = () => {
        navigate("/addCustomer");
    };
    const [customers, setCustomers] = useState<CustomerModel[]>([]);
    useEffect(() => {
        adminWebApi
            .myCustomers()
            .then((res) => setCustomers(res.data))
            .catch((err) => notify.error(err));
    },[]);

    return (
        <div>
            <h1 className="MyCustomersH1">My customers</h1>
            <div className="NavigateCompany">
                <button className="Button" onClick={addCustomer}>
                    Add Customer
                </button>
                <button className="Button">Find Customer</button>
            </div>
            <div className="MyCustomers">
                {customers.map((c, idx) => (
                    <CustomerItem key={"c" + idx} customer={c} />
                ))}
                {/* {customers.map((customer) => (
                    <div className="box2" key={customer.id}>
                        <p>id: {customer.id}</p>
                        <p>first name: {customer.firstName}</p>
                        <p>last name: {customer.lastName}</p>
                        <p>email: {customer.email}</p>
                        <div className="divButton">
                            <button className="button1">
                                <VscTrash size={24} />
                            </button>
                            <button className="button1">
                                <BiEdit size={24} />
                            </button>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}
export default MyCustomers;
