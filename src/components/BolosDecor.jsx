import './BolosDecor.css'

const BolosDecor = ({ cardTitle, cakeName, cakeDescription, itemsList, cakeImage, fig, textoAlt, fade }) => {
  return (
    <div className="card_container" data-aos={fade}>

        {cardTitle && (
            <header className='card__header'>

                <div className='card__title'>
                    <h2>{cardTitle}</h2>
                </div>

                <div className='triangle'></div>
            </header>
        )}

        <div className='cake-informations'>
            
            <div className='cake__container'>

                <div className='cake__image'>
                    <img src={cakeImage} alt={textoAlt} />
                </div>

                <div className='p-table-img__cont'>

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
    </div>
  )
}

export default BolosDecor