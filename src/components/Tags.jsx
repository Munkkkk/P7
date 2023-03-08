import '../styles/tags.css'

function Tags({tags}){

    return <ul className='tags'>
        {tags.map((tag, idx) => <li key={idx} className="tags-list">{tag}</li>)}
    </ul>
}

export default Tags