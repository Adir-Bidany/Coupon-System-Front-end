import "./Developer.css";
import MyPic from "../../../Assets/Images/MyPic.jpg"

function Developer(): JSX.Element {
    return (
        <div className="Developer col">
            <img src={MyPic} />
            <h3>
                As a developer, I have a passion for creating innovative and
                dynamic web applications that enhance user experiences. For my
                latest project, I utilized a combination of cutting-edge
                technologies such as React, Spring, and MySQL to build a
                powerful and reliable web platform. React provided a robust
                framework for developing interactive user interfaces, while
                Spring provided an efficient and scalable backend architecture.
                The database management system, MySQL, offered a secure and
                efficient way to store and retrieve data for the application.
            </h3>
            <h3>
                Through careful planning, design, and implementation, I was able
                to deliver a high-performing web application that met all of the
                project's requirements. I am continually learning and adapting
                to the latest technologies and trends in the industry to ensure
                that my skills are up-to-date and that I can deliver the best
                possible solutions to my clients.
            </h3>
        </div>
    );
}

export default Developer;
