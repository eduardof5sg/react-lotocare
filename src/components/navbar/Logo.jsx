import React, { PureComponent } from 'react'
import logoImg from '../../image/logo-pestana.svg'

export class Logo extends PureComponent {
  render() {
    return (
      <div className='logo'>
        <img alt='LotoCare' className='logo' src={logoImg} />
      </div>
    )
  }
}

export default Logo
