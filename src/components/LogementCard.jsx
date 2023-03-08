import "../styles/logementcard.css"

function LogementCard({cover,title}){
    return(
        <div>
        <div className="house-card">
            <img className="house-picture" src={cover} alt ={`${title} cover`}/>
            <p className="house-text">{title}</p>
        </div>
        </div>
    )
}

export default LogementCard