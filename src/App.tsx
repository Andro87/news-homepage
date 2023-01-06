import { useState } from "react";

import "./App.css";
import { Header, Main } from "./components";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleIsMenuOpen() {
        setIsMenuOpen(prevValue => !prevValue);
    }

    return (
        <div className={`app ${isMenuOpen ? "app-menu-open" : ""}	`}>
            <div className="app-container">
                <Header onOpenMenu={handleIsMenuOpen} isMenuOpen={isMenuOpen} />
                <Main />
            </div>
        </div>
    );
}

export default App;
