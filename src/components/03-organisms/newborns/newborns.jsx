import CoinCard from "components/02-molecules/coin-card/coin-card";
import Button from "components/01-atoms/button/button";
import Anchor from "components/01-atoms/anchor/anchor";

const Newborns = () => {

    return (
        <div className="newborns section">
            <div className="newborns__inner section__inner">
                
                <div className="newborns__filter filter">
                    <Button className="filter__button button--with-rainbow-border">Audited</Button>
                    <Button className="filter__button button--with-rainbow-border disabled">Not audited</Button>
                    <Button className="filter__button button--with-rainbow-border disabled">All</Button>
                </div>

                <div className="newborns__list list">
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                    <CoinCard className="list__item coin-card--bright" />
                </div>

                <div className="newborns__actions actions">
                    <Button className="actions__button button--with-rainbow-border" href="/create">Create your Own Token</Button>
                    <Anchor className="actions__anchor anchor--with-underline" href="/learn">Learn more</Anchor>
                </div>

            </div>
        </div>
    );

};

export default Newborns;
