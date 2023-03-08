function Host({host}){
    return (
        <div>
            <p>{host.name}</p>
            <img src={host.picture} alt={`${host.name} host`} />
        </div>
    )


}

export default Host