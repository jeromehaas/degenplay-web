import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Rainbow from "components/01-atoms/rainbow/rainbow";
import InputText from "components/07-form-elements/input-text/input-text";
import InputImage from "components/07-form-elements/input-image/input-image";
import Button from "components/01-atoms/button/button";
import Link from "components/01-atoms/link/link";

const CoinCreation = () => {

	return (
		<div className="coin-creation section">
			<div className="coin-creation__inner section__inner">
				
			<div className="coin-creation__header header">
        <Heading className="header__title" level="h2">Let's start that <Rainbow>meme coins</Rainbow>.</Heading>
        <Text className="header__text">Enter details of your token and easily deploy in minutes.</Text>
      </div>

			<form className="coin-creation__form form">

				<fieldset className="form__general general form__fieldset">
					<InputImage className="general__input general__input--image" id="general__input--image" placeholder="Upload Image"  />
					<InputText className="general__input general__input--token-name" id="general__input--token-name" label="Token Name"  placeholder="Ex: Bitcoin" />
					<InputText className="general__input general__input--chain" id="general__input--chain" label="Chain"  placeholder="ERC" />
					<InputText className="general__input general__input--token-" id="general__input--symbol" label="Symbol"  placeholder="Ex: BTC" />
				</fieldset>
				
				<fieldset className="form__supply supply form__fieldset">
					<InputText className="supply__input supply__input--initial-supply" id="supply__input--initial-supply" label="Initial Supply"  placeholder="Your token initial supply" />
					<InputText className="supply__input supply__input--total-supply" id="supply__input--total-supply" label="Total Supply"  placeholder="Your token maximal supply available" />
				</fieldset>

				<fieldset className="form__liquidity liquidity form__fieldset">
					<InputText className="liquidity__input liquidity__input--liquidity-pool-tokens" id="liquidity__input--liquidity-pool-tokens" label="Liquidity pool tokens"  placeholder="0-100%" />
					<InputText className="liquidity__input liquidity__input--owner-deployer-tokens" id="liquidity__input--owner-deployer-tokens" label="Owner/Deployer tokens"  placeholder="0-100%" />
				</fieldset>

				<fieldset className="form__buy-tax buy-tax form__fieldset">
					<Text className="buy-tax__label">Set buy tax amount (%)</Text>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 1</Text>
						<InputText className="buy-tax__input buy-tax__input--name-1" id="buy-tax__input--name-1" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-1" id="buy-tax__input--name-1" label=""  placeholder="Limited to 10%" />
						<InputText className="buy-tax__input buy-tax__input--name-1" id="buy-tax__input--name-1" label=""  placeholder="Wallet tax 1" />
					</span>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 2</Text>
						<InputText className="buy-tax__input buy-tax__input--name-2" id="buy-tax__input--name-2" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-2" id="buy-tax__input--name-2" label=""  placeholder="Limited to 10%" />
						<InputText className="buy-tax__input buy-tax__input--name-2" id="buy-tax__input--name-2" label=""  placeholder="Wallet tax 2" />
					</span>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 3</Text>
						<InputText className="buy-tax__input buy-tax__input--name-3" id="buy-tax__input--name-3" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-3" id="buy-tax__input--name-3" label=""  placeholder="Limited to 10%" />
						<InputText className="buy-tax__input buy-tax__input--name-3" id="buy-tax__input--name-3" label=""  placeholder="Wallet tax 3" />
					</span>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 4</Text>
						<InputText className="buy-tax__input buy-tax__input--name-4" id="buy-tax__input--name-4" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-4" id="buy-tax__input--name-4" label=""  placeholder="Limited to 10%" />
						<InputText className="buy-tax__input buy-tax__input--name-4" id="buy-tax__input--name-4" label=""  placeholder="Wallet tax 4" />
					</span>
				</fieldset>

				<fieldset className="form__sell-tax sell-tax form__fieldset">
					<Text className="buy-tax__label">Set sell tax amount (%)</Text>
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 1</Text>
						<InputText className="sell-tax__input sell-tax__input--name-1" id="sell-tax__input--name-1" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-1" id="sell-tax__input--name-1" label=""  placeholder="Limited to 10%" />
						<InputText className="sell-tax__input sell-tax__input--name-1" id="sell-tax__input--name-1" label=""  placeholder="Wallet tax 1" />
					</span>	
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 2</Text>
						<InputText className="sell-tax__input sell-tax__input--name-2" id="sell-tax__input--name-2" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-2" id="sell-tax__input--name-2" label=""  placeholder="Limited to 10%" />
						<InputText className="sell-tax__input sell-tax__input--name-2" id="sell-tax__input--name-2" label=""  placeholder="Wallet tax 2" />
					</span>	
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 3</Text>
						<InputText className="sell-tax__input sell-tax__input--name-3" id="sell-tax__input--name-3" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-3" id="sell-tax__input--name-3" label=""  placeholder="Limited to 10%" />
						<InputText className="sell-tax__input sell-tax__input--name-3" id="sell-tax__input--name-3" label=""  placeholder="Wallet tax 3" />
					</span>	
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 4</Text>
						<InputText className="sell-tax__input sell-tax__input--name-4" id="sell-tax__input--name-4" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-4" id="sell-tax__input--name-4" label=""  placeholder="Limited to 10%" />
						<InputText className="sell-tax__input sell-tax__input--name-4" id="sell-tax__input--name-4" label=""  placeholder="Wallet tax 4" />
					</span>	
				</fieldset>

				<fieldset className="form__limits limits form__fieldset">
					<InputText className="limits__input limits__input--buy" id="limits__input--buy" label="Limit Buy"  placeholder="Limited to 10%" isRequired={ false } />
					<InputText className="limits__input limits__input--sell" id="limits__input--sell" label="Limit Sell"  placeholder="Limited to 10%" isRequired={ false } />
				</fieldset>

				<fieldset className="form__links links form__fieldset">
					<InputText className="links__input links__input--website" id="links__input--website" label="Website"  placeholder="Link to website" isRequired={ false } />
					<InputText className="links__input links__input--telegram" id="links__input--telegram" label="Telegram"  placeholder="Link to channel" isRequired={ false } />
				</fieldset>

				<fieldset className="form__actions actions form__fieldset">
					<Button className="actions__button button--with-rainbow-border">Create your token</Button>	
					<Link className="actions__link link--with-underline">Learn more</Link>
				</fieldset>

			</form>

			</div>
		</div>
	)
};

export default CoinCreation;