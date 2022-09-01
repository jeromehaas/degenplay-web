import Button from "components/01-atoms/button/button";
import { useEffect, useState } from 'react';

const MetamaskStatus = ({ className }) => {

    const [account, setAccount] = useState(null);
		const ethereum = window.ethereum;
 
		const connectWallet = async () => {
			const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
			const account = accounts[0];
			setAccount(account);
		};

		const checkConnected = async () => {
			const accounts = await ethereum.request({ method: 'eth_accounts'});
			const account = accounts[0]
			account ? setAccount(account) : setAccount(null);
		};
  
		useEffect(() => {
			checkConnected();
			window.ethereum.on('accountsChanged', checkConnected);
		}, []);
		
    return (
        <Button className={`${ className ? className : ''} metamask-status`} onClick={ connectWallet }>
            { account  
            ? 'Connected'
            : 'Not Connected' }
        </Button>
    );

};

export default MetamaskStatus;