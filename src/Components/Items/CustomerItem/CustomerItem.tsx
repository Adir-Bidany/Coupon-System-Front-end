import { VscTrash } from "react-icons/vsc";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../../../Models/Model";
import "./CustomerItem.css";

interface CustomerItemProps {
    customer: CustomerModel;
}

function CustomerItem(props: CustomerItemProps): JSX.Element {
    const navigate = useNavigate();

    const deleteCustomer = (customerId: number) => {
        navigate("/deleteCustomer/" + customerId);
    };
        const updateCustomer = (customerId: number) => {
            navigate("/updateCustomer/" + customerId);
        };
    return (
        <div className="card">
            <h1>{props.customer.id}</h1>
            <span>First name: {props.customer.firstName}</span>
            <span>Last name: {props.customer.lastName}</span>
            <span>Email: {props.customer.email}</span>
            <div className="divButton">
                <button
                    onClick={() => deleteCustomer(props.customer.id)}
                    className="button1"
                >
                    <VscTrash size={24} />
                </button>
                <button
                    className="button1"
                    onClick={() => updateCustomer(props.customer.id)}
                >
                    <BiEdit size={24} />
                </button>
            </div>
        </div>
    );
}

export default CustomerItem;
