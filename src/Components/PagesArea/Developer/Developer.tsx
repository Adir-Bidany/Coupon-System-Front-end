import "./Developer.css";
import MyPic from "../../../Assets/Images/MyPic.jpg"

function Developer(): JSX.Element {
    return (
        <div className="Developer center">
            <img src={MyPic}/>
            <p>
                Hi, my name is Adir Harel Bidany a FullStack developer
                <br /> specializes in multiple technologies as: REACT, SPRING
                etc.
            </p>
            <p>
                This website was developed with: REACT, SPRING technologies
                <br />
                as the final project of my course.
            </p>
        </div>
    );
}

export default Developer;
