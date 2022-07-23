import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </div>
    );
}

export default App;
