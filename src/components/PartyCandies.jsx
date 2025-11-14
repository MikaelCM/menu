import './PartyCandies.css'

const PartyCandies = ({Title, partyCandies, partyCand__h3, minimumText, mainFig, textoAlt, partyCand__illuFig1, partyCand__illuFig2}) => {

    // Se a lista tiver mais de um tipo de doce, imprime uma lista desses doces, senão, retorna o array normal de doces
    const isCandyList = (candyOfCandiesType) => {
        if (candyOfCandiesType.cakeType2) {
            return (
                <ul>
                    <li>
                        {candyOfCandiesType.cakeType} 
                    </li>

                    <li>
                        {candyOfCandiesType.cakeType2} 
                    </li>

                    <li>
                        {candyOfCandiesType.cakeType3} 
                    </li>
                </ul>
            );
        };

        return candyOfCandiesType.cakeType;
    };

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

                {minimumText && (
                    <span className='partyCand__minText'>{minimumText}</span>
                )}
            </div>

                <div id='main-figure'>
                    <img src={mainFig} alt={textoAlt} />

                    <div className='partyCand__fig1'>
                        <img src={partyCand__illuFig1} alt="" />
                    </div>
                </div>

            <table className='partyCand__table'>
                <tbody className='partyCand__tbody'>

                    {partyCandies.map(candy => (
                        <tr key={candy.id}>
                            <td className='partyCand__td'>
                                {/* FUNÇÃO isCandyList */}
                                {isCandyList(candy)} 
                            </td>

                            <td className='partyCand__td'>
                                {candy.price}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            

            <div className='partyCand__fig2'>
                <img src={partyCand__illuFig2} alt="" />
            </div>

        </div>
    </div>
  )
}

export default PartyCandies