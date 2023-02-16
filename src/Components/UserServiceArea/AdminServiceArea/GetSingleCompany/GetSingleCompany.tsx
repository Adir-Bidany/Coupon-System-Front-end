import { useState } from "react";
import { CompanyModel } from "../../../../Models/Model";
import store from "../../../../Redux/Store";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";
import CompanyItem from "../../../Items/CompanyItem/CompanyItem";
import "./GetSingleCompany.css";

function GetSingleCompany(): JSX.Element {
    const [companies, setCompanies] = useState(
        store.getState().adminReducer.companies
    );

    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<number>(0);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        await adminWebApi
            .getSingleCompany(parseInt(event.target.value))
            .then((res) => {
                notify.success("company found");
            })
            .catch((err) => {
                notify.error(err);
            });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOutputValue(parseInt(inputValue));
    };

    const companyToShow: CompanyModel[] = companies.filter(
        (c) => c.id === outputValue
    );
    return (
        <div className="GetSingleCompany col">
            <h1>Find Company</h1>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button type="submit">Find</button>
                </form>
            </div>

            <div>
                {companyToShow.map((c, idx) => (
                    <CompanyItem key={"c" + idx} company={c} />
                ))}
            </div>
        </div>
    );
}

export default GetSingleCompany;
