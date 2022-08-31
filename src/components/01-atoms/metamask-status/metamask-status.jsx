import Button from "components/01-atoms/button/button";
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const MetamaskStatus = ({ className }) => {

    const [account, setAccount] = useState(null);
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const ethereum = window.ethereum;

		console.log(ethereum);
 
		const connectWallet = async () => {
			const account = await ethereum.request({ method: 'eth_requestAccounts'});
			setAccount(account);
		};

		useEffect(() => {

		}, [account, connectWallet])








    return (
        <Button className={`${ className ? className : ''} metamask-status`} onClick={ connectWallet }>
            { account  
            ? 'Connected'
            : 'Not Connected' }
        </Button>
    );

};

export default MetamaskStatus;