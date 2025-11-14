import './BolosDecor.css'

const BolosDecor = ({cardTitle, cakeName, cakeDescription, itemsList, cakeImage, fig, textoAlt}) => {
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
                <img src={cakeImage} alt={textoAlt} />
            </div>

            <div className='h3-table-img__cont'>
                <h3 className={!cakeName && "cakeNameDontShow"}>{cakeName}:</h3>

                <p className={!cakeName && "cakeDescriptionMarginTop"}>{cakeDescription}</p>

                <table className="bolos__table">
                    <tbody className='bolos__tbody'>

                        {itemsList.map(item => (
                            <tr key={item.id}>
                                <td className='bolos__td'>
                                    {item.nome}
                                    {item.tamanho} 
                                </td>

                                <td className='bolos__td'>{item.fatias}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <div className='bolosDecor__img'>
                    <img src={fig} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default BolosDecor