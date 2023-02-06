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
    return (
            <div className="card">
                <h1>{props.customer.id}</h1>
                <span>first name: {props.customer.firstName}</span>
                <span>last name: {props.customer.lastName}</span>
                <span>email: {props.customer.email}</span>
                <div className="divButton">
                    <button
                        onClick={() => deleteCustomer(props.customer.id)}
                        className="button1"
                    >
                        <VscTrash size={24} />
                    </button>
                    <button className="button1">
                        <BiEdit size={24} />
                    </button>
                </div>
            </div>
    );
}

export default CustomerItem;