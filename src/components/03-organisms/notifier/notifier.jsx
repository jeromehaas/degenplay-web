import { useState } from "react";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Rainbow from "components/01-atoms/rainbow/rainbow";
import Button from "components/01-atoms/button/button";

const Notifier = () => {

	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className={`notifier section ${ isVisible ? 'notifier--visible' : '' } `}>
			<div className="notifier__inner section__inner">
				<div className="notifier__card card">
					<Heading className="card__title" onClick={ () => setIsVisible()}>Your quick audit was successfully requested!</Heading>
					<Text className="card__text">Your payment will be refunded if the request is rejected, if confirmed your payment will be burned!</Text>
					<i className="card__icon icon icon--close" onClick={ () => setIsVisible(false) }></i>
				</div>
			</div>
		</div>
	)
};

export default Notifier;