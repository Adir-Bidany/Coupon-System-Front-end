import { useNavigate, useParams } from "react-router-dom";
import adminWebApi from "../../../../Services/AdminWebApi";
import notify from "../../../../Services/ErrorMSG";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {
    const navigate = useNavigate();

    const params = useParams();
    const companyId = +(params.id || 0);

    const cancel = () => {
        navigate("/myCompanies");
    };

    const deleteCompany = async () => {
        await adminWebApi
            .deleteCompany(companyId)
            .then((res) => {
                notify.success("Company deleted");
                navigate("/myCompanies");
            })
            .catch((err) => {
                notify.error(err);
            });
    };
    return (
        <div className="DeleteCompany col">
            <h1>Delete Company</h1>
            <h2 className="redColor">
                Are you sure you want to delete company #{companyId}
            </h2>
            <div className="deleteGap row">
                <button className="delete" onClick={cancel}>
                    cancel
                </button>
                <button className="delete redColor" onClick={deleteCompany}>
                    delete
                </button>
            </div>
        </div>
    );
}

export default DeleteCompany;
