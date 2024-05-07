import profilePic from './assets/perfil.jpg'
function card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic } alt="perfil"/>
            <h2 className='card-title'>Felippe Nobre</h2>
            <p className='card-text'>Estou aprendendo react</p>
        </div>
    )
}

export default card