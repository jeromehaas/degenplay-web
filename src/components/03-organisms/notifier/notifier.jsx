import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import { useDispatch, useSelector } from "react-redux";
import { show, hide } from "redux/notifier/slice";

const Notifier = () => {

	const notifierState = useSelector((state) => state.notifier);
	const dispatch = useDispatch();

	return (
		<div className={`notifier section ${ notifierState.isVisible ? 'notifier--visible' : '' } `}>
			<div className="notifier__inner section__inner">
				<div className="notifier__card card">
					<Heading className="card__title" onClick={ () => dispatch(show())}>{ notifierState.heading }</Heading>
					<Text className="card__text">{ notifierState.text }</Text>
					<i className="card__icon icon icon--close" onClick={ () => dispatch(hide()) }></i>
				</div>
			</div>
		</div>
	)
};

export default Notifier;