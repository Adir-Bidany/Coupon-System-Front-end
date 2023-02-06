import { VscTrash } from "react-icons/vsc";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CompanyModel } from "../../../Models/Model";
import "./CompanyItem.css";
import UpdateCompany from "../../UserServiceArea/AdminServiceArea/UpdateCompany/UpdateCompany";

interface CompanyItemProps {
    company: CompanyModel;
}

function CompanyItem(props: CompanyItemProps): JSX.Element {
    const navigate = useNavigate();

    const deleteCompany = (companyId: number) => {
        navigate("/deleteCompany/" + companyId);
    };

    const updateCompany = (companyId: number) => {
        navigate("/updateCompany/" + companyId);
    };

    return (
        <div className="card">
            <h1>id: {props.company.id}</h1>
            <span>name: {props.company.name}</span>
            <span>email: {props.company.email}</span>
            <div className="divButton">
                <button
                    onClick={() => deleteCompany(props.company.id)}
                    className="button1"
                >
                    <VscTrash size={24} />
                </button>
                <button
                    className="button1"
                    onClick={() => updateCompany(props.company.id)}
                >
                    <BiEdit size={24} />
                </button>
            </div>
        </div>
    );
}

export default CompanyItem;
