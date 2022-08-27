import Article from "components/03-organisms/article/article";
import AuditRequest from "components/03-organisms/audit-request/audit-request";

const Audit = () => {

	return (
		<div className="audit">
			<Article subtitle="AUDIT YOUR MEME COINS" title="Request an audit of your token and gain more investor trust" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex."/>
			<AuditRequest />
		</div>
	);

};

export default Audit;