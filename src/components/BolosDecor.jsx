import './BolosDecor.css'

const BolosDecor = ({cardTitle, cakeName, cakeDescription, itemsList, cakeImage}) => {
  return (
    <div className="card_container">
        <div className='card__header'>

            <div className={cardTitle && 'card__title'}>
                {cardTitle && <h2>{cardTitle}</h2>}
            </div>

            <div className={cardTitle && "triangle"}></div>
        </div>

        <div className='cake-informations'>
            
            <div className='cake__image'>
                <img src={cakeImage} alt="Bolo" />
            </div>

            <div>
                <h3 className={!cakeName && "cakeNameDontShow"}>{cakeName}:</h3>

                <p className={!cakeName && "cakeDescriptionMarginTop"}>{cakeDescription}</p>

                <ul className="bolos-flavours">
                    {itemsList.map(item => (

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

export default BolosDecor