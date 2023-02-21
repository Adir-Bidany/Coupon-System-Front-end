import "./DeleteCustomer.css";
import { useNavigate, useParams } from "react-router-dom";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";

function DeleteCustomer(): JSX.Element {
    const navigate = useNavigate();

    const params = useParams();
    const customerId = +(params.id || 0);

    const cancel = () => {
        navigate("/myCustomers");
    };

    const deleteCustomer = async () => {
        await adminWebApi
            .deleteCustomer(customerId)
            .then((res) => {
                notify.success("Customer deleted");
                navigate("/myCustomers");
            })
            .catch((err) => {
                notify.error(err);
            });
    };
    return (
        <div className="DeleteCustomer col">
            <h1>Delete customer</h1>
            <h2 className="redColor">
                Are you sure you want to delete customer #{customerId}
            </h2>
            <div className="deleteGap row">
                <button className="delete" onClick={cancel}>
                    cancel
                </button>
                <button className="delete redColor" onClick={deleteCustomer}>
                    delete
                </button>
            </div>
        </div>
    );  
}

export default DeleteCustomer;
