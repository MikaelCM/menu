import './Candies.css'

const Candies = ({ title, title__span, candiesType, candiesList, cento, candiesImage1, image1DivStyleImg, candies_responsive, textoAlt, image1DivStyle, image2DivStyle, image3DivStyle, candiesImage2, candiesImage3, fade, listaUni }) => {
    return (
        <div className="candies__card">

            {title && (
               <header className='candies__head__container'>

                    <div className="candies__header">
                        <h2>{title}</h2>
                        <span>{title__span}</span>
                    </div>

                    <div className="candies__triangle"></div>

                </header> 
            )}

            <div className="candies__container" data-aos={fade}>
                <div id="doces__h3">
                    <h3>{candiesType}</h3>
                </div>

                <div className="candyList__container">

                    <div className={candies_responsive} style={image1DivStyle}>
                        <img src={candiesImage1} alt={textoAlt} style={image1DivStyleImg}/>
                    </div>

                    {candiesList && (
                        <ul className='candyList'>
                            {candiesList.map(candy => (
                                <li key={candy.id}>

                                    <span className='candy__heart'>{'\u{2764}'}</span>

                                    <span>{candy.tipo}</span>

                                </li>
                            ))}
                        </ul>
                    )}

                    <div className='candies__price'>
                        <span>CENTO: {cento}</span>
                    </div>

                    <div className='candies__image2' style={image2DivStyle}>
                        <img src={candiesImage2} alt="" />
                    </div>

                    <div className='candies__image3' style={image3DivStyle}>
                        <img src={candiesImage3} alt="" />
                    </div>
                </div>

            </div>

            {listaUni && (
                <div className='tableAndImage__cont' data-aos={fade}>

                    <div className='docinhos-mixer__cont'>
                        <img src="./docinhos_mixer.png" alt="" />
                    </div>

                    <table className='docinhos__table'>
                        <tbody className='docinhos__tbody'>

                            {listaUni.map(unidade => (
                                <tr key={unidade.id}>
                                    <td className='docinhos__td'>
                                        {unidade.uni}
                                    </td>
                                    
                                    <td className='docinhos__td'>
                                        {unidade.saboresQuant}
                                    </td>
                                </tr>
                            ))}
                    
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Candies