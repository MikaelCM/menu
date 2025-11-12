import './BolosDecor.css'

const BolosDecor = ({cardTitle, cakeName, cakeDescription, itemsList, cakeImage}) => {
  return (
    <div className="card_container">

        {cardTitle && (
            <header className='card__header'>

                <div className='card__title'>
                    <h2>{cardTitle}</h2>
                </div>

                <div className='triangle'></div>
            </header>
        )}

        <div className='cake-informations'>
            
            <div className='cake__image'>
                <img src={cakeImage} alt="Bolo do La Dolce Dinha" />
            </div>

            <div>
                <h3 className={!cakeName && "cakeNameDontShow"}>{cakeName}:</h3>

                <p className={!cakeName && "cakeDescriptionMarginTop"}>{cakeDescription}</p>

                <table className="bolos__table">
                    <tbody className='bolos__tbody'>

                        {itemsList.map(item => (
                            <tr key={item.id}>
                                <td className='bolos__td'>
                                    {item.nome}
                                    {item.tamanho} 
                                    {item.fatias}
                                </td>

                                <td className='bolos__td'>{item.preco}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default BolosDecor