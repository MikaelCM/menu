import './Candies.css'

const Candies = ({title, title__span, candy__h3, candiesType, candiesList, cento, candiesImage1, image1DivStyle,candiesImage2, candiesImage3}) => {
  return (
    <div className="candies__card">

        <div className='candies__head__container'>
            <div className={title && "candies__header"}>
                <h2>{title}</h2>
                <span>{title__span}</span>
            </div>

            <div className={title && "candies__triangle"}></div>
        </div>

        <div className="candies__container">
            <div id={candy__h3}>
                <h3>{candiesType}</h3>
            </div>

            <div className="candyList__container">

                <div className='candies__image1' style={image1DivStyle}>
                    <img src={candiesImage1} alt="Ilustração de item de confeitaria"/>
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

                <div className='candies__image2'>
                    <img src={candiesImage2} alt="Ilustração de item de confeitaria" />
                </div>

                <div className='candies__image3'>
                    <img src={candiesImage3} alt="Ilustração de item de confeitaria" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Candies