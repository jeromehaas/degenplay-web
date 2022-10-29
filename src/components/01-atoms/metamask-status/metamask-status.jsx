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
			checkConnection();
			ethereum.on('connect', () => connectWallet());
			ethereum.on('disconnect', () =>  disconnectWallet());
			ethereum.on('chainChanged', () => reloadClient());
			ethereum.on('accountsChanged', () => connectWallet());
		}, []);
 
		const checkConnection = async () => {
			const accounts = await web3.eth.getAccounts();
			const account = accounts[0]
			if (!account) dispatch(disconnect())
			const address = accounts[0]
			const balanceInWei = await web3.eth.getBalance(address);
			const balanceInEth = await web3.utils.fromWei(balanceInWei, 'ether');
			const chainId = await web3.eth.getChainId();
			dispatch(connect({ address, balanceInEth, chainId }))
		};

		const connectWallet = async () => {
			const accounts = await web3.eth.requestAccounts();
			const account = accounts[0];
			if (!account) dispatch(disconnect())
			const address = accounts[0]
			const balanceInWei = await web3.eth.getBalance(address);
			const balanceInEth = await web3.utils.fromWei(balanceInWei, 'ether');
			const chainId = await web3.eth.getChainId();
			dispatch(connect({ address, balanceInEth, chainId }))
		};

		const disconnectWallet = () => {
			dispatch(disconnect());
		};
		
		const reloadClient = () => {
			window.location.reload();
		};
		
    return (
		<Button className={`${ className ? className : ''} ${ metamask.isConnected ? 'metamask-status--connected' : '' } metamask-status button--with-status button--with-rainbow-border`} onClick={ connectWallet } href="#">
            { metamask.isConnected ? 'Connected' : 'Not Connected' }
        </Button>
	);
	
};

export default MetamaskStatus;