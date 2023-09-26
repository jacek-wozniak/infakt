import './Accountant.scss';

const Accountant = (props: AccountantType) => {
    const {cell, name, picture, email} = props;

    return (
        <li className="accountant">
            <div className="accountant__top-bar">
                <img className="accountant__avatar" src={picture.medium} alt={`${email} avatar`} width="64" height="64"/>
                <div className="accountant__introduce">
                    <span className="accountant__header">Twoja księgowa</span>
                    <strong className="accountant__name">{name.first} {name.last}</strong>
                </div>
            </div>
            <p className="accountant__label">E-mail</p>
            <p className="accountant__info accountant__info--underline">{email}</p>
            <p className="accountant__label">Telefon</p>
            <p className="accountant__info">{cell}</p>
            <p className="accountant__label">Średnia cena netto usługi / m-c</p>
            <p className="accountant__info">350,00 PLN</p>
            <button className="accountant__more-info button">Dowiedz się więcej</button>
        </li>
    )
}

export default Accountant;