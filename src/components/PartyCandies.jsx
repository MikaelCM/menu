import './PartyCandies.css'

const PartyCandies = ({Title, partyCand__h3, minimumText ,partyCand__caption, mainFig, partyCandMainFigStyle, textoAlt,  partyCandies, partyCand__illuFig1, partyCand__illuFig1_style, partyCand__illuFig2, partyCand_illuFig2_style}) => {

    // Se a lista tiver mais de um tipo de doce, imprime uma lista desses doces, senão, retorna o array normal de doces
    const isCandyList = (candyOfCandiesType) => {
        if (candyOfCandiesType.cakeType2) {
            return (
                <ul className='partyCand__ul'>
                    <li className='partyCand_listItem'>
                        {candyOfCandiesType.cakeType} 
                    </li>

                    <li className='partyCand_listItem'>
                        {candyOfCandiesType.cakeType2} 
                    </li>

                    <li className='partyCand_listItem'>
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
                    <h2>{Title}</h2>
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

                {mainFig && (
                    <div id='main-figure' style={partyCandMainFigStyle}>
                        <img src={mainFig} alt={textoAlt}/>

                        <div className='partyCand__fig1' style={partyCand__illuFig1_style}>
                            <img src={partyCand__illuFig1} alt="" />
                        </div>
                    </div>
                )}
                

            <table className='partyCand__table'>
                <tbody className='partyCand__tbody'>

                    {partyCand__caption && (
                        <tr >
                            <td colSpan={2}  className='partyCand__caption'>{partyCand__caption}</td>
                        </tr>
                    )}

                    {partyCandies.map(candy => (
                        <tr key={candy.id}>
                            <td className='partyCand__td'>

                                {/* FUNÇÃO isCandyList DA LINHA 6 */}
                                {isCandyList(candy)} 
                                
                            </td>

                            {candy.price && (

                                <td className='partyCand__td partyCandprices'>

                                <span className='partyCand__firstPrice'>{candy.price}</span>
                                
                                {candy.price2 && (
                                    <div className='partyCand__secondPrice'>
                                        {candy.price2}
                                    </div>
                                )}
                                
                            </td>
                            )}
                            
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className='partyCand__fig2' style={partyCand_illuFig2_style}>
                <img src={partyCand__illuFig2} alt="" />
            </div>

        </div>
    </div>
  )
}

export default PartyCandies