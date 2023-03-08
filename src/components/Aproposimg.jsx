import banner from '../assets/banner.png'
import '../styles/banner.css'


function Aproposimg(){
    return <div className='banner'>
        <img src={banner} alt="banner" className='banner-picture' />
    </div>
}

export default Aproposimg