import Heading from "components/01-atoms/heading/heading";
import CoinCard from "components/02-molecules/coin-card/coin-card";
import Button from "components/01-atoms/button/button";
import Text from "components/01-atoms/text/text";
import Link from "components/01-atoms/link/link";
import Rainbow from "components/01-atoms/rainbow/rainbow";

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
                    <Button className="actions__button button--with-rainbow-border">Create your Own Token</Button>
                    <Link className="actions__link link--with-underline">Learn more</Link>
                </div>

            </div>
        </div>
    );

};

export default Newborns;
