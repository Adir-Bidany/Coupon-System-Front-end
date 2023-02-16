import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <h1>PAGE NOT FOUND</h1>
            <iframe
                src="https://giphy.com/embed/53QGAMuHBOI8BkRUTk"
                width="480"
                height="480"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
            ></iframe>
            <p>
                <a href="https://media1.giphy.com/media/53QGAMuHBOI8BkRUTk/giphy.gif?cid=ecf05e47otyxg0pbbg6c21soxvigazg9apey7pyl07hdf6kv&rid=giphy.gif&ct=g">
                    via GIPHY
                </a>
            </p>
        </div>
    );
}

export default Page404;
