import Logo from 'components/01-atoms/logo/logo';
import { useState, useEffect } from 'react'
import cookie from 'react-cookies';
import { sha256 } from 'js-sha256';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();
    const [ input, setInput ] = useState('');
    const updateInput = (value) => setInput(input + value);;
    const resetInput = () => setInput('');

    const storeSessionCookie = (value) => {
        const token = sha256(value); 
        cookie.save('session', token, { path: '/' });
    };
	
    useEffect(() => {
        if (input.length !== 6) return;
        if (input !== process.env.REACT_APP_LOGIN_CODE) return resetInput();
        storeSessionCookie(input);
        navigate('/');
    }, [input, navigate]);

  return (
    <div className="login-form">
      <div className="login-form__wrapper">
        <Logo className="login-form__logo" />
        <div className="login-form__dial-wrapper">
          <button className="login-form__dial-button" onClick={ () => updateInput(1) }>1</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(2) }>2</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(3) }>3</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(4) }>4</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(5) }>5</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(6) }>6</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(7) }>7</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(8) }>8</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(9) }>9</button>
          <button className="login-form__dial-button" onClick={ () => updateInput(0) }>0</button>
        </div>
        <div className="login-form__dots-wrapper">
          <div className={`login-form__dot ${ input.length >= 1 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 2 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 3 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 4 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 5 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 6 ? 'login-form__dot--active' : ''}`}></div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;