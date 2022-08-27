import CoinCard from "components/02-molecules/coin-card/coin-card";

const Promotion = () => {

    return (
        <div className="promotion section">
            <div className="promotion__inner section__inner">
                <div className="promotion__label">Degens Promoted</div>
                <div className="promotions__content content">
                    <CoinCard className="content__coin-card" />
                    <CoinCard className="content__coin-card" />
                    <CoinCard className="content__coin-card" />
                </div>
            </div>
        </div>
    )
};

export default Promotion;