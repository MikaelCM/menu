import './PartyCandies.css'

const PartyCandies = ({Title, partyCandies, partyCand__h3, partyCand__illuFig1, partyCand__illuFig2}) => {
  return (
    <div className="partyCand__card">
        {Title && 
            <header className='partyCand-head__container'>

                <div className='partyCand__header'>
                    <h2>DOCES DE FESTA</h2>
                    <span>MÍNIMO DE 10 UNIDADES</span>
                </div>

                <div className="partyCand__triangle"></div>

            </header>
        }

        <div id='partyCand__cont'>
            <div className='partyCand-h3__cont'>
                <h3>{partyCand__h3}</h3>
            </div>

            <div>
                <img src={null} alt="" />foto do produto
            </div>

            <div className='partyCand__fig1'>
                <img src={partyCand__illuFig1} alt="Ilustração de item de confeitaria" />
            </div>

            <table className='partyCand__table'>
                <tbody className='partyCand__tbody'>

                    {partyCandies.map(candies => (
                        <tr key={candies.id}>
                            <td className='partyCand__td'>
                                {candies.cakeType}
                            </td>

                            <td className='partyCand__td'>
                                {candies.price}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className='partyCand__fig2'>
                <img src={partyCand__illuFig2} alt="Ilustração de item de confeitaria" />
            </div>

        </div>
    </div>
  )
}

export default PartyCandies