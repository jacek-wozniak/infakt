import './App.scss';
import TopBar from "./TopBar/TopBar";
import AccountantList from "./AccountantList/AccountantList";

export const App = () => {

    return (
        <main className="app">
            <TopBar />
            <AccountantList />
        </main>
    );
}
