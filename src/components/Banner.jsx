import banner from '../assets/banner.png'
import '../styles/banner.css'


function Banner(){
    return <div className='banner'>
        <p>Chez vous, partout et ailleurs</p>
        <img src={banner} alt="banner" className='banner-picture' />
    </div>
}

export default Banner