import './AccountantList.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import Accountant from "../Accountant/Accountant";
import Loader from "../Loader/Loader";

const AccountantList = () => {
    const [accountants, setAccountants] = useState<AccountantType[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get<ApiResponseType>(`https://randomuser.me/api/?seed=abc&results=4&page=${page}`);
            setAccountants([...accountants, ...response.data.results]);
            setIsLoading(false);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <section className="accountant-list">
            <ul className="accountant-list__grid">
                {accountants && accountants.map((accountant) => (
                    <Accountant
                        key={accountant.email}
                        cell={accountant.cell}
                        name={accountant.name}
                        email={accountant.email}
                        picture={accountant.picture}
                        login={accountant.login}
                    />
                ))}
            </ul>
            {isLoading && <Loader />}
            <button className="accountant-list__button button" onClick={handleLoadMore}>Załaduj więcej</button>
        </section>
    )
}

export default AccountantList;