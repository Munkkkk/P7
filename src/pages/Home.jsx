import { useEffect, useState } from "react";
import LogementCard from "../components/LogementCard";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Home() {
  const [logements, setLogements] = useState([])
  useEffect(()=> {
    fetch('/logements.json')
    .then(res => res.json())
    .then (res => {
    setLogements(res)
    })
  }, [])
  return <div className="page-home">
    <Banner />
    <div className="house-card-list">
    {logements.map((logements, id) => 
          <div className="logement-card" key={id}>     
                <Link key={logements.id} className="card-logement-link" to={`/logement/${logements.id}`}>
                <LogementCard cover={logements.cover} title={logements.title} />
                </Link>
          </div>
          )}
          </div>
       </div>
}

export default Home;
