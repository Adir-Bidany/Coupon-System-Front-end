import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { CustomerModel } from "../../../../Models/Model";
import store from "../../../../Redux/Store";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";
import CustomerItem from "../../../Items/CustomerItem/CustomerItem";
import "./GetSingleCustomer.css";

function GetSingleCustomer(): JSX.Element {
    const [customers, setCustomers] = useState(
        store.getState().adminReducer.customers
    );
    console.log(store.getState().adminReducer.customers);

    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<number>(0);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        await adminWebApi
            .getSingleCustomer(parseInt(event.target.value))
            .then((res) => {
                notify.success("customer found");
            })
            .catch((err) => {
                notify.error(err);
            });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOutputValue(parseInt(inputValue));
    };

    const customerToShow: CustomerModel[] = customers.filter(
        (c) => c.id === outputValue
    );
    return (
        <div className="GetSingleCustomer col">
            <h1>Find Customer</h1>
            <div>
                <form className="col" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button className="button" type="submit">
                        Find
                    </button>
                </form>
            </div>

            <div>
                {customerToShow.map((c, idx) => (
                    <CustomerItem key={"c" + idx} customer={c} />
                ))}
            </div>
        </div>
    );
}

export default GetSingleCustomer;
