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
import { connect } from 'redux/metamask/slice';

const CoinCreation = () => {

	const metamask = useSelector((state) => state.metamask);

	const [ formState, setFormState ] = useState({
		logo: null,
		name: null,
		symbol: null,
		maxSupply: 0,
		liquidityPercentage: 0,
		liquidityEth: 0,
		wallet: null,
		taxes: {
			buyTax1: { name: null, limit: 0, address: null },
			buyTax2: { name: null, limit: 0, address: null },
			buyTax3: { name: null, limit: 0, address: null },
			buyTax4: { name: null, limit: 0, address: null },
			sellTax1: { name: null, limit: 0, address: null },
			sellTax2: { name: null, limit: 0, address: null },
			sellTax3: { name: null, limit: 0, address: null },
			sellTax4: { name: null, limit: 0, address: null },
		},
		limitBuy: 0,
		limitSell: 0,
	});
	
	const handleSubmit = (event) => {
		event.preventDefault();
		validateInputs();
	};

	const validateInputs = () => {
		const inputs = [...document.querySelectorAll('input')];
		const inputsToValidate = inputs.filter((input) =>  input.getAttribute('validation'))
		inputsToValidate.forEach((input) => {
			const element = input.closest('.input-element');
			const pattern = new RegExp(input.getAttribute('validation'));
			const isRequired = input.getAttribute('is-required');
			const value = input.value;
			if (isRequired === '0' && value === '') return element.classList.remove('input-element--error');
			pattern.test(value) ? element.classList.remove('input-element--error') : element.classList.add('input-element--error');
		});
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

	const updateTaxesLimit = ( event ) => {
		const target = event.target;
		const id = target.getAttribute('id');
		const field = target.getAttribute('field');
		const share = (target.value - target.min) / ( target.max - target.min) * 100;  
		const value = target.value;
        target.style.background = `linear-gradient(to right, #E9E9E9 0%, #E9E9E9 ${share}%, #F3F3F3 ${share}%, #F3F3F3 100%)`;
		setFormState({ ...formState, taxes: { ...formState.taxes, [id]: { ...formState.taxes[id], [field]: value } }})

	};


	return (
		<div className="coin-creation section">
			<div className="coin-creation__inner section__inner">
				
				<div className="coin-creation__header header">
					{ metamask.address }
      				<Heading className="header__title" level="h1">How to create your <Rainbow>meme coins</Rainbow>in 6 steps</Heading>
      				<Text className="header__text">Enter details of your token and easily deploy in minutes.</Text>
      			</div>

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
							<InputSlider className="inputs__item inputs__item--max-supply" label="Total Supply" id="maxSupply" onChange={ updateSlider } isRequired={ true } value={ formState.maxSupply } min={ 0 } max={ metamask.balance } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" />
							<InputSlider className="inputs__item inputs__item--liquidity-percentage" label="Liquidity percentage" id="liquidityPercentage" onChange={ updateSlider } isRequired={ true } value={ formState.liquidityPercentage } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" />
							<InputSlider className="inputs__item inputs__item--liquidity-eth" label="Liquidity ETH" id="liquidityEth" onChange={ updateSlider } isRequired={ true } value={ formState.liquidityEth } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" />
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>

					{/* BUY TAX */}
					<fieldset className="form__fieldset fieldset form__fieldset--buy-tax">
						<div className="fieldset__index index">
							<p className="index__number">3</p>
							<span className="index__line"></span>
						</div>
						<div className="supply-and-liquidity__heading heading">
							<Heading className="heading__title" level="h2">Define limits for buy and sell</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<span className="inputs__wrapper">
								<Text className="buy-tax__label">Tax 1</Text>
								<InputText className="buy-tax__input buy-tax__input--name-1" id="buyTax1" field="name" label=""  placeholder="Tax name"  value={ formState.taxes.buyTax1.name} onChange={ updateTaxes } />
								<InputSlider className="buy-tax__input buy-tax__input--limit-1" label="" id="buyTax1" field="limit" isRequired={ false } value={ formState.taxes.buyTax1.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="buy-tax__input buy-tax__input--address-1" id="buyTax1" field="address" label=""  placeholder="Wallet tax 1"  value={ formState.taxes.buyTax1.address} onChange={ updateTaxes } />
							</span>
							<span className="inputs__wrapper">
								<Text className="buy-tax__label">Tax 2</Text>
								<InputText className="buy-tax__input buy-tax__input--name-2" id="buyTax2" label="" field="name"  placeholder="Tax name"  value={ formState.taxes.buyTax2.name } onChange={ updateTaxes } />
								<InputSlider className="buy-tax__input buy-tax__input--limit-2" label="" id="buyTax2" field="limit" isRequired={ false } value={ formState.taxes.buyTax2.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="buy-tax__input buy-tax__input--address-2" id="buyTax2" label="" field="address" placeholder="Wallet tax 2"  value={ formState.taxes.buyTax2.address } onChange={ updateTaxes } />
							</span>
							<span className="inputs__wrapper">
								<Text className="buy-tax__label">Tax 3</Text>
								<InputText className="buy-tax__input buy-tax__input--name-3" id="buyTax3" label="" field="name"  placeholder="Tax name"  value={ formState.taxes.buyTax3.name } onChange={ updateTaxes } />
								<InputSlider className="buy-tax__input buy-tax__input--limit-3" label="" id="buyTax3" field="limit" isRequired={ false } value={ formState.taxes.buyTax3.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="buy-tax__input buy-tax__input--address-3" id="buyTax3" label="" field="address" placeholder="Wallet tax 3"  value={ formState.taxes.buyTax3.address } onChange={ updateTaxes } />
							</span>
							<span className="inputs__wrapper">
								<Text className="buy-tax__label">Tax 4</Text>
								<InputText className="buy-tax__input buy-tax__input--name-4" id="buyTax4" label="" field="name"  placeholder="Tax name"  value={ formState.taxes.buyTax4.name } onChange={ updateTaxes } />
								<InputSlider className="buy-tax__input buy-tax__input--limit-4" label="" id="buyTax4" field="limit" isRequired={ false } value={ formState.taxes.buyTax4.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="buy-tax__input buy-tax__input--address-4" id="buyTax4" label="" field="address" placeholder="Wallet tax 4"  value={ formState.taxes.buyTax4.address } onChange={ updateTaxes } />
							</span>
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>

					{ /* SELL TAX */}
					<fieldset className="form__fieldset fieldset form__fieldset--sell-tax">
						<div className="fieldset__index index">
							<p className="index__number">4</p>
							<span className="index__line"></span>
						</div>
						<div className="supply-and-liquidity__heading heading">
							<Heading className="heading__title" level="h2">Define limits for buy and sell</Heading>
							<Heading className="heading__subtitle" level="h3">Create your <Rainbow>logo</Rainbow> and <Rainbow>name</Rainbow>for your coin</Heading>
						</div>
						<div className="fieldset__inputs inputs">
							<span className="inputs__wrapper">
								<Text className="sell-tax__label">Tax 1</Text>
								<InputText className="sell-tax__input sell-tax__input--name-1" id="sellTax1" label="" field="name" placeholder="Tax name"  value={ formState.taxes.sellTax1.name } onChange={ updateTaxes } />
								<InputSlider className="sell-tax__input sell-tax__input--limit-1" label="" id="sellTax1" field="limit" isRequired={ false } value={ formState.taxes.sellTax1.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="sell-tax__input sell-tax__input--name-1" id="sellTax1" label="" field="address" placeholder="Wallet tax 1" value={ formState.taxes.sellTax1.address } onChange={ updateTaxes } />
							</span>	
							<span className="inputs__wrapper">
								<Text className="sell-tax__label">Tax 2</Text>
								<InputText className="sell-tax__input sell-tax__input--name-2" id="sellTax2" label="" field="name"  placeholder="Tax name" value={ formState.taxes.sellTax2.name } onChange={ updateTaxes } />
								<InputSlider className="sell-tax__input sell-tax__input--limit-2" label="" id="sellTax2" field="limit" isRequired={ false } value={ formState.taxes.sellTax2.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="sell-tax__input sell-tax__input--name-2" id="sellTax2" label="" field="address" placeholder="Wallet tax 2" value={ formState.taxes.sellTax2.address } onChange={ updateTaxes } />
							</span>	
							<span className="inputs__wrapper">
								<Text className="sell-tax__label">Tax 3</Text>
								<InputText className="sell-tax__input sell-tax__input--name-3" id="sellTax3" label="" field="name"  placeholder="Tax name" value={ formState.taxes.sellTax3.name } onChange={ updateTaxes } />
								<InputSlider className="sell-tax__input sell-tax__input--limit-3" label="" id="sellTax3" field="limit" isRequired={ false } value={ formState.taxes.sellTax3.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="sell-tax__input sell-tax__input--name-3" id="sellTax3" label="" field="address" placeholder="Wallet tax 3" value={ formState.taxes.sellTax3.address } onChange={ updateTaxes } />
							</span>	
							<span className="inputs__wrapper">
								<Text className="sell-tax__label">Tax 4</Text>
								<InputText className="sell-tax__input sell-tax__input--name-4" id="sellTax4" label="" field="name"  placeholder="Tax name" value={ formState.taxes.sellTax4.name } onChange={ updateTaxes } />
								<InputSlider className="sell-tax__input sell-tax__input--limit-4" label="" id="sellTax4" field="limit" isRequired={ false } value={ formState.taxes.sellTax4.limit } valueAppendix="%" min={ 0 } max={ 100 } validation={ '^([1-9][0-9]?|100)$' } errorText="Enter a number from 0 to 100" onChange={ updateTaxesLimit } />
								<InputText className="sell-tax__input sell-tax__input--name-4" id="sellTax4" label="" field="address" placeholder="Wallet tax 4" value={ formState.taxes.sellTax4.address } onChange={ updateTaxes } />
							</span>	
						</div>
						<div className="fieldset__manuals manuals">
							<Text className="manuals__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices. Fllamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
						</div>
					</fieldset>

					<fieldset className="form__fieldset fieldset form__fieldset--limits">
						<div className="fieldset__index index">
							<p className="index__number">5</p>
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

					<fieldset className="form__fieldset fieldset form__fieldset--actions">
						<div className="fieldset__index index">
							<p className="index__number">6</p>
							<span className="index__line"></span>
							<p className="index__done">Done!</p>
						</div>
						<div className="fieldset__heading heading">
							<Heading className="heading__title" level="h2">Create your token and pay your gas in ETH</Heading>
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

			</div>

		</div>
	);
};

export default CoinCreation;