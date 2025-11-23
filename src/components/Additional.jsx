import './Additional.css'

const Additional = ({ title, additList, fig1, fig1Style, fig2, fig2Style, fade }) => {
  return (
    <div className="additional__card">
        {title && (
            <header className="additional__header">
                <div className="additional__h2">
                    <h2>{title}</h2>
                </div>

                <div className="additional__triangle"></div>
            </header>
        )}
        
        <div className='additional__block'>
            
            <div className='addit-block-fig1' style={fig1Style}>
                <img src={fig1} alt="" />
            </div>

            <div className='addit-block-fig2' style={fig2Style}>
                <img src={fig2} alt="" />
            </div>

            <ul className='addit__ul' data-aos={fade}>
                {additList.map(info => (

                    <li key={info.id}>

                        <span className='addit__heart'>
                            {'\u{2764}'}
                        </span>

                        {info.info}
                    </li>

                ))}
            </ul>
        </div>
    </div>
  )
}

export default Additional