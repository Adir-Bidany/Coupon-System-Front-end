import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer row">
            <p>&copy; Adir Bidany</p>
            <SocialMedia />
        </div>
    );
}

export default Footer;
