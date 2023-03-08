import { useEffect } from "react"
import { useState } from "react"
import Tags from "../components/Tags"
import Slider from "../components/Slider"
import { useParams } from "react-router-dom"
import Rating from "../components/Rating"
import Host from "../components/Host"
import '../styles/logement.css'
import Collapse from "../components/Collapse"


function Logement(){
    const {id} = useParams()
    const [logement, setLogement] = useState(null)
    useEffect(()=> {
      fetch('/logements.json')
      .then(res => res.json())
      .then (res => {
        const choice = res.find(log => log.id === id)
      setLogement(choice)
      })
    }, [id])
      if(!logement){
        return null
      }

      const listEquipements = logement.equipments.map((e) => <li key={e}>{e}</li>)
    return <div>
      <Slider 
          pictures={logement.pictures} />
          <div className="container-logement">
            <div className="bloc-left">
              <p className="title-logement">{logement.title}</p>
              <p className="location-logement">{logement.location}</p>
              <Tags 
                tags={logement.tags} className='tags-logement' />
            </div>
          </div>
          <div className="bloc-right">
          <Host host={logement.host}/>
          <Rating rating={logement.rating} />
          </div>
        <Collapse texte={logement.description} title='Description'/>
        <Collapse texte={listEquipements} title='Equipements' />
    </div>
}

export default Logement