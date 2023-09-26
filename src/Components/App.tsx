import './App.scss';
import TopBar from "./TopBar/TopBar";
import {HashRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import AccountantsPage from "../Pages/AccountantsPage/AccountantsPage";
import HomePage from "../Pages/HomePage/HomePage";
import AnotherPage from "../Pages/AnotherPage/AnotherPage";

export const App = () => {

    return (
        <main className="app">
            <HashRouter>
            <TopBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/accountants/*" element={<AccountantsPage />} />
                    <Route path="/another-page/*" element={<AnotherPage />} />
                </Routes>
            </HashRouter>
        </main>
    );
}
