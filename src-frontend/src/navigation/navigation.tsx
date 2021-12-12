import React from 'react';
import './navigation.css';

interface NavigationProps {
  setJSON: (json: any) => void;
}

function Navigation(prop: NavigationProps) {
  //Hooks

  //Handler
  const handleReset = (): void => {
    prop.setJSON({});
  }
  //HTML
    return (
      <div className="navigation">
        <button className="signInBtn" type="button">Login</button>
        <button className="signUpBtn" type="button">Sign up</button>
        <button className="resetBtn" type="button" onClick={handleReset}>Reset</button>
      </div>
    );
}

export default Navigation;