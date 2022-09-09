import Button from "components/01-atoms/button/button";
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { connect, disconnect } from 'redux/metamask/slice';

const MetamaskStatus = ({ className }) => {

	const dispatch = useDispatch();
	const metamask = useSelector((state) => state.metamask);

		const ethereum = window.ethereum;
 
		const connectWallet = async () => {
			if (!ethereum) return;
			const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
			if (accounts) {
				const address = accounts[0]
				const balanceHex = await ethereum.request({ method: 'eth_getBalance', params: [ address, 'latest' ]});
				const balance = parseInt(balanceHex, 16);
				dispatch(connect({ address, balance }))
			} else {
				dispatch(disconnect())
			};
		};

		const checkConnected = async () => {
			if (!ethereum) return;
			const accounts = await ethereum.request({ method: 'eth_accounts'});
			if (accounts) {
				const address = accounts[0]
				const balanceHex = await ethereum.request({ method: 'eth_getBalance', params: [ address, 'latest' ]});
				const balance = parseInt(balanceHex, 16);
				dispatch(connect({ address, balance }))
			} else {
				dispatch(disconnect());
			};
		};


  
		useEffect(() => {
			if (!ethereum) return;
			checkConnected();
			window.ethereum.on('accountsChanged', checkConnected);
		}, []);
		
    return (
        <Button className={`${ className ? className : ''} ${ metamask.isConnected ? 'metamask-status--connected' : '' } metamask-status button--with-status button--with-rainbow-border`} onClick={ connectWallet }>
            { metamask.isConnected ? 'Connected' : 'Not Connected' }
        </Button>
    );

};

export default MetamaskStatus;