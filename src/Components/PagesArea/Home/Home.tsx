import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="container">
            <h1 className="h1Welcome">CouponSystem</h1>

            <svg
                className="pulse"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle id="Oval" cx="512" cy="512" r="400"></circle>
                <circle id="Oval" cx="512" cy="512" r="400"></circle>
                <circle id="Oval" cx="512" cy="512" r="400"></circle>
            </svg>
        </div>
    );
}

export default Home;
