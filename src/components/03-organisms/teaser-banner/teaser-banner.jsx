import Text from "components/01-atoms/text/text";
import Button from 'components/01-atoms/button/button';

const TeaserBanner = () => {

    return  (
        <div className="teaser-banner">
            <div className="teaser-banner__cover"></div>
            <div className="teaser-banner__banner banner">
                <i className="banner__icon icon icon--checkmark"></i>
                <span className="banner__text text">
                    <Text className="text__item text--bold">Checkit out:</Text>
                    <Text className="text__item">New  DegenPlay Token DGN launched!</Text>
                </span>
                <Button>Buy now</Button>
            </div>
            <div className="teaser-banner__placeholder"></div>
        </div>

    )
};

export default TeaserBanner;