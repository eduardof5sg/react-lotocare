import React, { PureComponent } from 'react'
import './footer.css';
import 'boxicons/css/boxicons.min.css';

export class Footer extends PureComponent {
  render() {
    return (
      <div className='footer'>
        
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="bx bxl-facebook" aria-label='Facebook'></i></a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="bx bxl-twitter" aria-label='X'></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="bx bxl-instagram" aria-label='Instagram'></i></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer"><i className="bx bxl-tiktok" aria-label='TikTok'></i></a>
        <a href="https://www.pinterest.com" target="_blank" rel="noreferrer"><i className="bx bxl-pinterest" aria-label='Pinterest'></i></a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="bx bxl-youtube" aria-label='Youtube'></i></a>
      </div>
      <p>&copy; 2024 LotoCare&reg;. Todos los derechos reservados.</p>
      </div>
    )
  }
}

export default Footer
