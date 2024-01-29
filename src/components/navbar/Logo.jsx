import React, { PureComponent } from 'react';
import logoImg from '../../image/logo-pestana.svg';
import { Link } from 'react-router-dom';

export class Logo extends PureComponent {
  render() {
    return (
      <div className='logo'>
        <Link to="/"><img alt='LotoCare' id="logo" className='logo' src={logoImg} /></Link>
      </div>
    );
  }
}

export default Logo;