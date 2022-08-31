import Button from "components/01-atoms/button/button";
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const MetamaskStatus = ({ className }) => {

    const [errorMessage, setErrorMessage ] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
 
    useEffect(() => {
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", accountsChanged);
          window.ethereum.on("chainChanged", chainChanged);
        }
      }, []);

    const connectHandler = async () => {
        if (window.ethereum) {
          try {
            const res = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            await accountsChanged(res[0]);
          } catch (err) {
            console.error(err);
            setErrorMessage("There was a problem connecting to MetaMask");
          }
        } else {
          setErrorMessage("Install MetaMask");
          console.log('hello')
        }
      };

    const accountsChanged = async (newAccount) => {
        setAccount(newAccount);
        try {
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [newAccount.toString(), "latest"],
          });
          setBalance(ethers.utils.formatEther(balance));
        } catch (err) {
          console.error(err);
          setErrorMessage("There was a problem connecting to MetaMask");
        }
      };

    const chainChanged = () => {
        setErrorMessage(null);
        setAccount(null);
        setBalance(null);
    };

    return (
        <Button className={`${ className ? className : ''} metamask-status`} onClick={ connectHandler }>
            { account  
            ? 'Connected'
            : 'Not Connected' }
        </Button>
    );

};

export default MetamaskStatus;