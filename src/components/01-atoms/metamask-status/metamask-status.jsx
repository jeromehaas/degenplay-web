import Button from "components/01-atoms/button/button";
import { useEffect, useState } from 'react';
import Web3 from "web3";

import { useSelector, useDispatch } from "react-redux";
import { connect, disconnect } from 'redux/metamask/slice';

const MetamaskStatus = ({ className }) => {

	const dispatch = useDispatch();
	const metamask = useSelector((state) => state.metamask);

		const ethereum = window.ethereum;
		const web3 = new Web3(ethereum);
		


		useEffect(() => {
			connectWallet();
			ethereum.on('connect', () => connectWallet());
			ethereum.on('disconnect', () =>  disconnectWallet());
			ethereum.on('chainChanged', () => reloadClient());
			ethereum.on('accountsChanged', () => connectWallet());
		}, []);
 
		const connectWallet = async () => {
			const accounts = await web3.eth.requestAccounts();
			const account = accounts[0];
			if (!account) dispatch(disconnect())
			const address = accounts[0]
			const balance = await web3.eth.getBalance(address);
			const chainId = await web3.eth.getChainId();
			console.log(chainId);
			console.log(balance);
			console.log(address, balance, balance);
			dispatch(connect({ address, balance, chainId }))
		};

		const disconnectWallet = () => {
			dispatch(disconnect());
		};
		
		const reloadClient = () => {
			window.location.reload();
		};


		
		
    return (
		<Button className={`${ className ? className : ''} ${ metamask.isConnected ? 'metamask-status--connected' : '' } metamask-status button--with-status button--with-rainbow-border`} onClick={ connectWallet }>
            { metamask.isConnected ? 'Connected' : 'Not Connected' }
        </Button>
	);
	
};

export default MetamaskStatus;


			// <Button className={`${ className ? className : ''} ${ metamask.isConnected ? 'metamask-status--connected' : '' } metamask-status button--with-status button--with-rainbow-border`} onClick={ connectWallet }>
			//     { metamask.isConnected ? 'Connected' : 'Not Connected' }
			// </Button>

			// const connectWallet = async () => {
			// 	if (!ethereum) return;
			// 	const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
			// 	if (accounts[0]) {
			// 		const address = accounts[0]
			// 		const balanceHex = await ethereum.request({ method: 'eth_getBalance', params: [ address, 'latest' ]});
			// 		const balance = parseInt(balanceHex, 16);
			// 		dispatch(connect({ address, balance }))
			// 	} else {
			// 		dispatch(disconnect())
			// 	};
			// };
	
			// const checkConnected = async () => {
			// 	if (!ethereum) return;
			// 	const accounts = await ethereum.request({ method: 'eth_accounts'});
			// 	if (accounts[0]) {
			// 		const address = accounts[0]
			// 		const balanceHex = await ethereum.request({ method: 'eth_getBalance', params: [ address, 'latest' ]});
			// 		const balance = parseInt(balanceHex, 16);
			// 		dispatch(connect({ address, balance }))
			// 	} else {
			// 		dispatch(disconnect());
			// 	};
			// };
	
			// useEffect(() => {
			// 	if (!ethereum) return;
			// 	checkConnected();
			// 	window.ethereum.on('accountsChanged', checkConnected);
			// 	window.ethereum.on('disconnect', )
			// }, []);