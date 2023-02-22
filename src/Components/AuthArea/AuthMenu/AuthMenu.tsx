import { useState, useEffect } from "react";
import { User } from "../../../Models/Auth";
import store from "../../../Redux/Store";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    const [user, setUser] = useState<User>(store.getState().userReducer.user);

    useEffect(() => {
        return store.subscribe(() =>
            setUser(store.getState().userReducer.user)
        );
    }, []);
    return (
        <div className="AuthMenu row">
            {user?.token ? (
                <>
                    Hello {user.name} &nbsp;
                    <CustomLink to="logout">Logout</CustomLink>
                </>
            ) : (
                <>
                    Hello guest &nbsp;
                    <CustomLink to="login">Login </CustomLink>
                </>
            )}
        </div>
    );
}

export default AuthMenu;
