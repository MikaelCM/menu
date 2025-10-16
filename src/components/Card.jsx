import './Card.css'

const Card = ({cardTitle, cakeName, cakeDescription, list, nomeClasse}) => {
  return (
    <div className="card_container">
        <div className='card__header'>
            <h2>{cardTitle}</h2>
        </div>

        <div className='cake-informations'>
            <div className='card__image'>
                <img src="" alt="" />foto
            </div>

            <div>
                <h3>{cakeName}:</h3>

                <p>{cakeDescription}</p>

                <ul className={nomeClasse}>
                    {list.map(item => (
                        <li key={item.id}>
                            <span>
                                {item.nome} {item.tamanho} {item.fatias}
                            </span>

                            <span>{item.preco}</span>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Card