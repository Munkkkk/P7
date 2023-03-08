import Aboutbanner from "../components/Aboutbanner"
import Collapse from "../components/Collapse";
import '../styles/about.css'


function About() {
    function AboutItems() {
        const Items = [
          {
            id: 1,
            title: "Fiabilité",
            texte:
              "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.",
          },
          {
            id: 2,
            title: "Respect",
            texte:
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme",
          },
          {
            id: 3,
            title: "Service",
            texte:
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question",
          },
          {
            id: 4,
            title: "Sécurité",
            texte: `La sécurité est la priorité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. 
            En laissant unenote aussi bien à l'hôte qu'aux locataire,cela permet à nos équipes de vérifier que les standarts sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`,
          },
        ];
        return Items;
      }
      const Items = AboutItems();
    return <div className="container-about">
        <Aboutbanner />
      {Items.map((item) => {
        return <Collapse title={item.title} texte={item.texte} key={item.id}/>;
      })}
    </div>
}

export default About