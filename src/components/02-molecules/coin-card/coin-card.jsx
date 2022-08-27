const CoinCard = ({ className }) => {

    return (
        <div className={`${ className ? className : '' } coin-card`}>
            <img className="coin-card__thumbnail" src="/images/placeholders/coin.png" alt="asd" />
            <div className="coin-card__infos infos">
                <div className="infos__labels labels">
                    <div className="labels__item">DGE</div>
                    <div className="labels__item">Risk Score 1</div>
                    <i className="labels__icon icon icon--checkmark"></i>
                </div>
                <p className="infos__name">DegenErc 20</p>
                <p className="infos__price">Price: 0.000012$</p>
            </div>
            <i className="coin-card__icon icon icon--arrow"></i>
        </div>
    );

};

export default CoinCard;