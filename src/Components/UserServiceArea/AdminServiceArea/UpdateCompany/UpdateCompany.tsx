import "./UpdateCompany.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanyUpdateModel } from "../../../../Models/Model";
import { useNavigate, useParams } from "react-router-dom";
import adminWebApi from "./../../../../Services/AdminWebApi";

import store from "../../../../Redux/Store";
import { useState } from "react";
import notify from "../../../../Services/ErrorMSG";

function UpdateCompany(): JSX.Element {
    const params = useParams();
    const id = +(params.id || 0);
    const [company, setCompany] = useState(
        store
            .getState()
            .companyReducer.companies.filter((comp) => comp.id === id)[0]
    );
    console.log(store.getState().companyReducer.companies);
    console.log(company);
    const navigate = useNavigate();
    let defaultValuesObj = {
        ...{ email: company.email, password: company.password },
    };

    const updateCompany = async (company: CompanyUpdateModel) => {
        await adminWebApi
            .updateCompany(id, company)
            .then((res) => {
                notify.success("Company updated");
                navigate("/myCompanies");
            })
            .catch((err) => {
                notify.error(err);
            });
        console.log(company);
    };

    const schema = yup.object().shape({
        // name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isDirty, isValid },
    } = useForm<CompanyUpdateModel>({
        defaultValues: defaultValuesObj,
        mode: "all",
        resolver: yupResolver(schema),
    });

    // const { dirtyFields } = useFormState({
    //     control,
    // });

    return (
        <div className="UpdateCompany col">
            <h1>Update Company</h1>
            <form onSubmit={handleSubmit(updateCompany)}>
                {/* {errors.name ? (
          <span>{errors.name?.message}</span>
        ) : (
          <label htmlFor="name">Name</label>
        )}
        <input
          {...register("name")}
          id="name"
          name="name"
          type="text"
          placeholder="Name..."
        /> */}

                {errors.email ? (
                    <span>{errors.email?.message}</span>
                ) : (
                    <label htmlFor="email">Email </label>
                )}
                <input
                    {...register("email")}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email..."
                />

                {errors.password ? (
                    <span>{errors.password?.message}</span>
                ) : (
                    <label htmlFor="password">Password</label>
                )}
                <input
                    {...register("password")}
                    id="password"
                    name="password"
                    type="text"
                    placeholder="Password..."
                />

                <button disabled={!isValid}>Update</button>
            </form>
        </div>
    );
}

export default UpdateCompany;
