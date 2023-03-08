import aboutbanner from '../assets/aboutbanner.png'
import '../styles/aboutbanner.css'

function Aboutbanner(){
    return <div className='aboutbanner'>
        <img src={aboutbanner} alt="aboutbanner" className='aboutbanner-picture' />
    </div>
}

export default Aboutbanner