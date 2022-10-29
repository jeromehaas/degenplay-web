import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Rainbow from "components/01-atoms/rainbow/rainbow";
import InputText from "components/07-form-elements/input-text/input-text";
import InputImage from "components/07-form-elements/input-image/input-image";
import InputSlider from "components/07-form-elements/input-slider/input-slider";
import Button from "components/01-atoms/button/button";
import Anchor from "components/01-atoms/anchor/anchor";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { show  } from 'redux/notifier/slice';

const CoinCreation = () => {

	const dispatch = useDispatch();
	const metamask = useSelector((state) => state.metamask);


	const [ formState, setFormState ] = useState({
		logo: null,
		name: null,
		symbol: null,
		maxSupply: 0,
		liquidityPercentage: 0,
		liquidityEth: 0,
		wallet: null,
		taxes: [
			{ address: null, buy: 0, sell: 0 },
			{ address: null, buy: 0, sell: 0 },
			{ address: null, buy: 0, sell: 0 },
		],
		limitBuy: 0,
		limitSell: 0,
	});
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const inputErrors = validateInputs();
		const taxErrors = validateTaxes();
		if (inputErrors.length === 0 && taxErrors.length === 0) {
			dispatch(show({ heading: 'Your coin was successfully created!', text: 'Your coin is on the way!' }));
			resetInputs();
		};
	};

	const resetInputs = () => {
		 const form = document.querySelector('.coin-creation__form');
		 form.reset();
	};

	const validateInputs = () => {
		const inputs = [...document.querySelectorAll('input')];
		const inputsToValidate = inputs.filter((input) =>  input.getAttribute('validation'))
		const errors = [];
		inputsToValidate.forEach((input) => {
			const element = input.closest('.input-element');
			const pattern = new RegExp(input.getAttribute('validation'));
			const id = input.getAttribute('id');
			const isRequired = input.getAttribute('is-required');
			const value = input.value;
			if (isRequired === '0' && value === '') return element.classList.remove('input-element--error');
			pattern.test(value) === false && errors.push(id);
			pattern.test(value) ? element.classList.remove('input-element--error') : element.classList.add('input-element--error');
		});
		return errors;
	};

	const validateTaxes  = () => {
		const inputs = [...document.querySelectorAll('.form__fieldset--taxes .taxes__input')];
		const inputsToValidate = inputs.filter((input) => input.getAttribute('field') === 'buy' || input.getAttribute('field') === 'sell');
		const errors = [];
		inputsToValidate.forEach((input) => {
			const element = input.closest('.input-element');
			const id = input.getAttribute('id');
			const value = input.value ? input.value : 0;
			value < 0 && errors.push(id);
			value < 0 ? element.classList.add('input-element--error') : element.classList.remove('input-element--error') ;
		});
		const totalTax = inputsToValidate.reduce((accumulator, input) =>  {
			const value = input.value ? input.value : 0;
			return accumulator + parseInt(value)
		}, 0);
		if (totalTax > 25) inputsToValidate.forEach((input) => {
			const element = input.closest('.input-element');
			const id = input.getAttribute('id');
			element.classList.add('input-element--error');
			console.log(element)
			errors.push(id);
		});
		const errorInfo = document.querySelector('.form__fieldset--taxes .error-info');
		errors.length > 0 ? errorInfo.classList.add('error-info--visible') : errorInfo.classList.add('error-info--visible');
		return errors;
	};

	const updateText = ( event ) => {
		const target = event.target;
		const id = target.getAttribute('id');
		const value = target.value;
		setFormState({ ...formState, [id]: value  })
	};

	 const updateImage = ( event ) => {
		const target = event.target;
		target.files.length > 0 
			? setFormState({ ...formState, logo: target.files[0]}) 
			: setFormState({ ...formState, logo: undefined });
	};
	
	const updateSlider = ( event ) => {
		const target = event.target;
		const id = target.getAttribute('id');
		const share = (target.value - target.min) / ( target.max - target.min) * 100;  
		const value = target.value;
        target.style.background = `linear-gradient(to right, #E9E9E9 0%, #E9E9E9 ${share}%, #F3F3F3 ${share}%, #F3F3F3 100%)`;
		setFormState({ ...formState, [id]: value });
	};

	const updateTaxes = ( event ) => {
		const target = event.target;
		const id = target.getAttribute('id');
		const field = target.getAttribute('field');
		const value = target.value;
		setFormState({ ...formState, taxes: { ...formState.taxes, [id]: { ...formState.taxes[id], [field]: value } }})
	};

	return (
		<div className="coin-creation section">
			<div className="coin-creation__inner section__inner">
				
				<div className="coin-creation__header header">
      				<Heading className="header__title" level="h1">How to create your <Rainbow>meme coins</Rainbow>in 5 steps</Heading>
      				<Text className="header__text">Enter details of your token and easily deploy in minutes.</Text>
      			</div>

				{ metamask.isConnected === false ? (
					
					<div className="coin-creation__not-connected-info not-connected-info">
						<Heading className="not-connected-info__title" level="h3">Connect your wallet to get started</Heading>
      					<Text className="not-connected-info__text">Our token creator needs the address of your wallet to be able to get how much ETH you have and in the end to sign and create the token you want. Please connect your wallet to start the process.</Text>
					</div>

				) : (

				<form className="coin-creation__form form">

					{/* NAME AND SYMBOL */}
					<fieldset className="form__fieldset fieldset form__fieldset--general">
						<div className="fieldset__index index">
							<p className="index__number">1</p>
							<span className="index__line"></span>
						</div>
						<div className="fieldset__heading heading">
							<Heading className="heading__title" level="h2">Pick a brand</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<InputImage className="inputs__item inputs__item--logo" id="logo" placeholder="Upload Image" onChange={ updateImage } selectedFile={ formState.logo }  />
							<InputText className="inputs__item inputs__item--name" id="name" label="Token Name"  placeholder="Ex: Bitcoin"value={ formState.name }  onChange={ updateText } isRequired={ true } validation={ '^[a-z]{3,256}$' } errorText="Enter a name from 3 to 256 characters" />
							<InputText className="inputs__item inputs__item--symbol" id="symbol" label="Symbol"  placeholder="Ex: BTC" value={ formState.symbol } onChange={ updateText } isRequired={ true } validation={ '^[a-z]{3,128}$' } errorText="Enter a symbol from 3 to 128 characters" />
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>
					
					{/* SUPPLY AND LIQUIDITY */}
					<fieldset className="form__fieldset fieldset form__fieldset--supply-and-liquidity">
						<div className="fieldset__index index">
							<p className="index__number">2</p>
							<span className="index__line"></span>
						</div>
						<div className="fieldset__heading heading">
							<Heading className="heading__title" level="h2">Define supply and liquidity pool</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<InputSlider className="inputs__item inputs__item--max-supply" label="Total Supply" id="maxSupply" onChange={ updateSlider } isRequired={ true } value={ formState.maxSupply } min={ 0 } max={ metamask.balanceInEth  } step="0.000000000001" validation={ '^([1-9][0-9]?|100)$' } valueAppendix="ETH" errorText="Enter a number from 0 to 100" />
							<InputSlider className="inputs__item inputs__item--liquidity-percentage" label="Liquidity percentage" id="liquidityPercentage" onChange={ updateSlider } isRequired={ true } value={ formState.liquidityPercentage } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" />
							<InputSlider className="inputs__item inputs__item--liquidity-eth" label="Liquidity ETH" id="liquidityEth" onChange={ updateSlider } isRequired={ true } value={ formState.liquidityEth } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" />
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>

					{ /* TAXES */}
					<fieldset className="form__fieldset fieldset form__fieldset--taxes">
						<div className="fieldset__index index">
							<p className="index__number">3</p>
							<span className="index__line"></span>
						</div>
						<div className="fieldset__heading heading">
							<Heading className="heading__title" level="h2">Create sell tax for a better tokenomics</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<span className="inputs__wrapper">
								<InputText className="taxes__input taxes__input--address-1" id="taxes1" type="text" label="Wallet Address" field="address" placeholder="Wallet Address 1"  value={ formState.taxes[0].address } validation={ '^0x[a-fA-F0-9]{40}$'} onChange={ updateTaxes } />
								<InputText className="taxes__input taxes__input--buy-1" id="taxes1" type="number" min="0" max="25" label="Buy" field="buy" placeholder="%" value={ formState.taxes[0].buy } onChange={ updateTaxes } />
								<InputText className="taxes__input taxes__input--sell-1" id="taxes1" type="number" min="0" max="25" label="Sell" field="sell" placeholder="%" value={ formState.taxes[0].sell } onChange={ updateTaxes } />
							</span>	
							<span className="inputs__wrapper">
								<InputText className="taxes__input taxes__input--address-2" id="taxes2" type="text" label="" field="address" placeholder="Wallet Address 2"  value={ formState.taxes[0].address } validation={ '^0x[a-fA-F0-9]{40}$'}  onChange={ updateTaxes } />
								<InputText className="taxes__input taxes__input--buy-2" id="taxes2" type="number" label="" field="buy" placeholder="%" value={ formState.taxes[1].buy } onChange={ updateTaxes } />
								<InputText className="taxes__input taxes__input--sell-2" id="taxes2" type="number" label="" field="sell" placeholder="%" value={ formState.taxes[1].sell } onChange={ updateTaxes } />
							</span>	
							<span className="inputs__wrapper">
								<InputText className="taxes__input taxes__input--address-3" id="taxes3" type="text" label="" field="address" placeholder="Wallet Address 2"  value={ formState.taxes[0].address } validation={ '^0x[a-fA-F0-9]{40}$'}  onChange={ updateTaxes } />
								<InputText className="taxes__input taxes__input--buy-3" id="taxes3" type="number" label="" field="buy" placeholder="%" value={ formState.taxes[1].buy } onChange={ updateTaxes } />
								<InputText className="taxes__input taxes__input--sell-3" id="taxes3" type="number" label="" field="sell" placeholder="%" value={ formState.taxes[1].sell } onChange={ updateTaxes } />
							</span>	
						</div>
						<div className="fieldset__error-info error-info">
							<p className="error-info__text error-info__text--max-tax">The sum of all taxes cannot be greater than 25%</p>
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>

					{/* LIMITS */}
					<fieldset className="form__fieldset fieldset form__fieldset--limits">
						<div className="fieldset__index index">
							<p className="index__number">4</p>
							<span className="index__line"></span>
						</div>
						<div className="fieldset__heading heading">
							<Heading className="heading__title" level="h2">Define limits for buy and sell</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<InputSlider className="limits__input limits__input--sell" id="limitSell" label="Limit Sell"  isRequired={ false } value={ formState.limitSell } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateSlider } />
							<InputSlider className="limits__input limits__input--buy" id="limitBuy" label="Limit Buy"  isRequired={ false } value={ formState.limitBuy } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateSlider } />
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>

					{/* SUBMIT */}
					<fieldset className="form__fieldset fieldset form__fieldset--actions">
						<div className="fieldset__index index">
							<p className="index__number">5</p>
							<span className="index__line"></span>
							<p className="index__done">Done!</p>
						</div>
						<div className="fieldset__heading heading">
							<Heading className="heading__title" level="h2">Create your token and pay in gas in ETH</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<div className="actions__placeholder placeholder"></div>
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
						<div className="fieldset__submit submit">
							<Button className="actions__button button--with-rainbow-border" type="submit" href="#" onClick={ handleSubmit }>Create your token</Button>	
							<Anchor className="actions__anchor anchor--with-underline" href="/learn">Learn more</Anchor>
						</div>
					</fieldset>

				</form>

				)}

			</div>

		</div>
	);
};

export default CoinCreation;