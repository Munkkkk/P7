import starsfull from '../assets/starsfull.png'
import starsempty from '../assets/starsempty.png'
import '../styles/rating.css'




function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];
    return(
        <div className='rating' key={rating}>
            {stars.map((level)=> rating >= level ? (
                <img src={starsempty} alt='starsempty'/>
                ) : (
                <img src={starsfull} alt='starsfull'/>
            ))
            } 
        </div>
    )
}       

export default Rating