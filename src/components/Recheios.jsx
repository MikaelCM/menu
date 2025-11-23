import './Recheios.css'

const Recheios = ({ title, recheios, recheiosFigure1, recheiosFigure2, figure1Style, figure2Style, fade }) => {
  return (
    <div className='recheios__card' data-aos={fade}>
        <header className='recheios__header'>

            <div className={title && "recheios__title"}>
                <h2>{title}</h2>
            </div>

            <div className={title && 'recheios__triangle'}></div>

        </header>

        <div className='recheios__container'>

            <div className={recheiosFigure1 && "recheios__figure1"} style={figure1Style}>

                {recheiosFigure1 && (
                    <img src={recheiosFigure1} alt="" />
                )}

            </div>

            <div className={recheiosFigure2 && "recheios__figure2"} style={figure2Style}>

                {recheiosFigure2 && (
                    <img src={recheiosFigure2} alt="" />
                )}
                
            </div>

            <ul className="recheios">
            {recheios.map(item => (

                <li key={item.id} className='recheios__lista'>
                    <span className='recheios__heart'>
                        {'\u{2764}'}
                    </span>

                    <span className='recheios__recheio'>
                        {item.recheio}
                    </span>
                </li>

            ))}
            </ul>
        </div>
    </div>
  )
}

export default Recheios