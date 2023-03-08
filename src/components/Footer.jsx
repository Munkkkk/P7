import logo from '../assets/footerlogo.png'
import '../styles/footer.css'


function Footer() {
    return <div className='footer'>
        <img src={logo} alt="logo kasa" className='footer-img' />
        <p className='footer-text'>© 2020 Kasa. All rights reserved </p>
    </div>
}

export default Footer