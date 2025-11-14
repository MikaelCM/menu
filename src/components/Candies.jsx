import './Candies.css'

const Candies = ({title, title__span, candiesType, candiesList, cento, candiesImage1, textoAlt, image1DivStyle, image2DivStyle, image3DivStyle, candiesImage2, candiesImage3, dataAOS, listaUni}) => {
    return (
        <div className="candies__card">

            <header className='candies__head__container'>
                <div className={title && "candies__header"}>
                    <h2>{title}</h2>
                    <span>{title__span}</span>
                </div>

                <div className={title && "candies__triangle"}></div>
            </header>

            <div className="candies__container" data-aos={dataAOS}>
                <div id="doces__h3">
                    <h3>{candiesType}</h3>
                </div>

                <div className="candyList__container">

                    <div className='candies__image1' style={image1DivStyle}>
                        <img src={candiesImage1} alt={textoAlt}/>
                    </div>

                    {candiesList && (
                        <ul className='candyList'>
                            {candiesList.map(candy => (
                                <li key={candy.tipo}>

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
                <div className='tableAndImage__cont'>

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