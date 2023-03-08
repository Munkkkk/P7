import '../styles/error.css'
import { Link } from 'react-router-dom';

function Error(){
    return (
            <div className='error'>
                <div className='error_text'>
                <strong>404</strong>
                <p>Oups! La page que vous demandez n'existe pas</p>
                <Link to="/" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
            </div>
            </div>
    )
}

export default Error;