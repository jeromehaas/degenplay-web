import Promotion from "components/03-organisms/promotion/promotion";
import Newborns from "components/03-organisms/newborns/newborns";
import Article from "components/03-organisms/article/article";

const Explore = () => {

	return (
		<div className="explore">
			<Article subtitle="EXPLORE MEME COINS" title="Say hello to newborn gems" text="Invest in the world's creative meme tokens." />
			<Promotion />
			<Newborns />	
		</div>
	);

};

export default Explore;