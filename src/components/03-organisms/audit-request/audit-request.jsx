import Text from "components/01-atoms/text/text";
import InputText from "components/07-form-elements/input-text/input-text";
import Button from "components/01-atoms/button/button";

const AuditRequest = () => {

	return (
		<div className="audit-request section">
			<div className="audit-request__inner section__inner">
				<form className="audit-request__form form">
					<fieldset className="form__general general form__fieldset">
						<InputText className="general__input general__input--chain" id="general__input--chain" label="Chain"  placeholder="ERC-20" />
						<InputText className="general__input general__input--address" id="general__input--address" label="Token address"  placeholder="Insert token adress to request audit" />
					</fieldset>
					<fieldset className="form__infos infos form__fieldset">
						<Text className="infos__text disabled">Quick Audit price: <span className="strike-trough">199$</span></Text>
						<Text className="infos__text text--bold">Now only 99$</Text>
					</fieldset>
					<fieldset className="form__actions actions form__fieldset">
						<Button className="actions__button button--with-rainbow-border button--with-arrow">Approve BUSD</Button>
						<Button className="actions__button button--with-rainbow-border button--with-arrow">Pay with BUSD</Button>
					</fieldset>
				</form>
			</div>
		</div>
	);

};

export default AuditRequest;