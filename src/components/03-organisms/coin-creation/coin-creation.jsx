import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Rainbow from "components/01-atoms/rainbow/rainbow";
import InputText from "components/07-form-elements/input-text/input-text";
import InputImage from "components/07-form-elements/input-image/input-image";
import Button from "components/01-atoms/button/button";
import Anchor from "components/01-atoms/anchor/anchor";
import { useState } from 'react';

const CoinCreation = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('submit');
	};



	const [ formState, setFormState ] = useState({
		logo: null,
		name: null,
		symbol: null,
		maxSupply: null,
		liquidityPercentage: null,
		liquidityEth: null,
		wallet: null,
		taxes: {
			buyTax1: { name: null, limit: null, address: null },
			buyTax2: { name: null, limit: null, address: null },
			buyTax3: { name: null, limit: null, address: null },
			buyTax4: { name: null, limit: null, address: null },
			sellTax1: { name: null, limit: null, address: null },
			sellTax2: { name: null, limit: null, address: null },
			sellTax3: { name: null, limit: null, address: null },
			sellTax4: { name: null, limit: null, address: null },
		},
		limits: {
			buy: null,
			sell: null,
		},
	});

	const updateForm = ( event ) => {
		const target = event.target;
		console.log(target);
	}

	 const updateLogo = ( event ) => {
		const target = event.target;
		target.files.length > 0 
			? setFormState({ ...formState, logo: target.files[0]}) 
			: setFormState({ ...formState, logo: undefined });
	};

	return (
		<div className="coin-creation section">
			<div className="coin-creation__inner section__inner">
				
			<div className="coin-creation__header header">
      		  	<Heading className="header__title" level="h2">Let's start that <Rainbow>meme coins</Rainbow></Heading>
      		  	<Text className="header__text">Enter details of your token and easily deploy in minutes.</Text>
      		</div>

			<form className="coin-creation__form form">

				<fieldset className="form__general general form__fieldset">
					<InputImage className="general__input general__input--logo" id="logo" placeholder="Upload Image" onChange={ updateLogo } selectedFile={ formState.logo }  />
					<InputText className="general__input general__input--name" id="name" label="Token Name"  placeholder="Ex: Bitcoin" validation={ '^.{6,7}$' } />
					<InputText className="general__input general__input--symbol" id="symbol" label="Symbol"  placeholder="Ex: BTC" />
				</fieldset>
				
				<fieldset className="form__supply supply form__fieldset">
				</fieldset>

				<fieldset className="form__supply-and-liquidity supply-and-liquidity form__fieldset">
					<InputText className="supply-and-liquidity__input supply-and-liquidity__input--max-supply" id="max-supply" label="Total Supply"  placeholder="Your token maximal supply available" />
					<InputText className="supply-and-liquidity__input supply-and-liquidity__input--liquidity-percentage" id="liquidity-percentage" label="Liquidity percentage"  placeholder="0-100%" />
					<InputText className="supply-and-liquidity__input supply-and-liquidity__input--liquidity-eth" id="liquidity-eth" label="Liquidity ETH"  placeholder="0-100%" />
				</fieldset>

				<fieldset className="form__buy-tax buy-tax form__fieldset">
					<Text className="buy-tax__header">Set buy tax amount (%)</Text>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 1</Text>
						<InputText className="buy-tax__input buy-tax__input--name-1" id="buy-tax-name-1" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-1" id="buy-tax-limit-1" label=""  placeholder="Amount in %" />
						<InputText className="buy-tax__input buy-tax__input--name-1" id="buy-tax-address-1" label=""  placeholder="Wallet tax 1" />
					</span>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 2</Text>
						<InputText className="buy-tax__input buy-tax__input--name-2" id="buy-tax-name-2" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-2" id="buy-tax-limit-2" label=""  placeholder="Amount in %" />
						<InputText className="buy-tax__input buy-tax__input--name-2" id="buy-tax-address-2" label=""  placeholder="Wallet tax 2" />
					</span>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 3</Text>
						<InputText className="buy-tax__input buy-tax__input--name-3" id="buy-tax-name-3" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-3" id="buy-tax-limit-3" label=""  placeholder="Amount in %" />
						<InputText className="buy-tax__input buy-tax__input--name-3" id="buy-tax-address-3" label=""  placeholder="Wallet tax 3" />
					</span>
					<span className="buy-tax__wrapper">
						<Text className="buy-tax__label">Tax 4</Text>
						<InputText className="buy-tax__input buy-tax__input--name-4" id="buy-tax-name-4" label=""  placeholder="Tax name" />
						<InputText className="buy-tax__input buy-tax__input--name-4" id="buy-tax-limit-4" label=""  placeholder="Amount in %" />
						<InputText className="buy-tax__input buy-tax__input--name-4" id="buy-tax-address-4" label=""  placeholder="Wallet tax 4" />
					</span>
				</fieldset>

				<fieldset className="form__sell-tax sell-tax form__fieldset">
					<Text className="buy-tax__header">Set sell tax amount (%)</Text>
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 1</Text>
						<InputText className="sell-tax__input sell-tax__input--name-1" id="sell-tax-name-1" label=""  placeholder="Tax name"  />
						<InputText className="sell-tax__input sell-tax__input--name-1" id="sell-tax__input--name-1" label=""  placeholder="Amount in %" />
						<InputText className="sell-tax__input sell-tax__input--name-1" id="sell-tax__input--name-1" label=""  placeholder="Wallet tax 1" />
					</span>	
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 2</Text>
						<InputText className="sell-tax__input sell-tax__input--name-2" id="sell-tax-name-2" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-2" id="sell-tax-name-2" label=""  placeholder="Amount in %" />
						<InputText className="sell-tax__input sell-tax__input--name-2" id="sell-tax-name-2" label=""  placeholder="Wallet tax 2" />
					</span>	
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 3</Text>
						<InputText className="sell-tax__input sell-tax__input--name-3" id="sell-tax-name-3" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-3" id="sell-tax-name-3" label=""  placeholder="Amount in %" />
						<InputText className="sell-tax__input sell-tax__input--name-3" id="sell-tax-name-3" label=""  placeholder="Wallet tax 3" />
					</span>	
					<span className="sell-tax__wrapper">
						<Text className="sell-tax__label">Tax 4</Text>
						<InputText className="sell-tax__input sell-tax__input--name-4" id="sell-tax-name-4" label=""  placeholder="Tax name" />
						<InputText className="sell-tax__input sell-tax__input--name-4" id="sell-tax-name-4" label=""  placeholder="Amount in %" />
						<InputText className="sell-tax__input sell-tax__input--name-4" id="sell-tax-name-4" label=""  placeholder="Wallet tax 4" />
					</span>	
				</fieldset>

				<fieldset className="form__limits limits form__fieldset">
					<InputText className="limits__input limits__input--buy" id="limits__input--buy" label="Limit Buy"  placeholder="Amount in %" isRequired={ false } />
					<InputText className="limits__input limits__input--sell" id="limits__input--sell" label="Limit Sell"  placeholder="Amount in %" isRequired={ false } />
				</fieldset>

				<fieldset className="form__actions actions form__fieldset">
					<Button className="actions__button button--with-rainbow-border" type="submit" href="#" onClick={ handleSubmit }>Create your token</Button>	
					<Anchor className="actions__anchor anchor--with-underline" href="/learn">Learn more</Anchor>
				</fieldset>

			</form>

			</div>
		</div>
	)
};

export default CoinCreation;