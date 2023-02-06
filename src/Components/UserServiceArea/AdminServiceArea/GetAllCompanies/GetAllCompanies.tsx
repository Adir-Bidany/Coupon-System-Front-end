import "./GetAllCompanies.css";
import { useEffect, useState } from "react";
import { VscTrash } from "react-icons/vsc";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CompanyModel } from "../../../../Models/Model";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";
import CompanyItem from "../../../Items/CompanyItem/CompanyItem";
import store from "../../../../Redux/Store";
import { gotAllCompaniesAction } from "../../../../Redux/CompanyAppState";

function GetAllCompanies(): JSX.Element {
    const navigate = useNavigate();
    const addCompany = () => {
        navigate("/addCompany");
    };
    const [companies, setCompanies] = useState<CompanyModel[]>([]);
    useEffect(() => {
        adminWebApi
            .getAllCompanies()
            .then((res) => {
            store.dispatch(gotAllCompaniesAction(res.data))
            setCompanies(res.data)})
            .catch((err) => notify.error(err));
    },[]);

    return (
        <div>
            <h1 className="GetAllCompaniesH1">My companies</h1>
            <div className="NavigateCompany">
                <button className="Button" onClick={addCompany}>
                    Add Company
                </button>
                <button className="Button">Find Company</button>
            </div>
            <div className="GetAllCompanies">
                {companies.map((c, idx) => (
                    <CompanyItem key={"c" + idx} company={c} />
                ))}
            </div>
        </div>
    );
}
export default GetAllCompanies;
