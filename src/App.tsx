import "./App.css";
import Menu from "./Components/LayoutArea/Menu/Menu";
import Main from "./Components/LayoutArea/Main/Main";
import Footer from "./Components/LayoutArea/Footer/Footer";
import Header from "./Components/LayoutArea/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Menu />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
