import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Rainbow from "components/01-atoms/rainbow/rainbow";

const Article = ({ subtitle, title, text }) => {

	return(
		<div className="article section">
			<div className="article__inner section__inner">
				{ subtitle && (<Heading className="article__subtitle" level="h3"><Rainbow>{ subtitle }</Rainbow></Heading> )}         
				{ title && (<Heading className="article__title" level="h2">{ title }</Heading> )}
				{ text && (<Text className="article__text">{ text }</Text> )}
			</div>
		</div>
		);

};

export default Article;

