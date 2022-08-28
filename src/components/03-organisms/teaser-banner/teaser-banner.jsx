import Text from "components/01-atoms/text/text";
import Button from 'components/01-atoms/button/button';

const TeaserBanner = () => {

    return  (
        <div className="teaser-banner">
          <div className="teaser-banner__inner">
			<div className="teaser-banner__cover"></div>
			<div className="teaser-banner__banner banner section">
				<div className="banner__inner section__inner">
				<i className="banner__icon icon icon--checkmark "></i>
					<span className="banner__text text">
						<Text className="text__item text--bold">Check it out:</Text>
						<Text className="text__item">New  DegenPlay Token DGN launched!</Text>
					</span>
					<Button className="banner__button">Buy now</Button>
				</div>
			</div>
            <div className="teaser-banner__placeholder"></div>
   	     </div>
    	</div>

    )
};

export default TeaserBanner;