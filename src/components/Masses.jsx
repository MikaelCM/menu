import './Masses.css'

const Massas = ({ items, massesFigure, massesFigure2 }) => {
  return (
    <div className='massas__card'>

      <div className="massas__container">
        <div className='massas__title'>
          <h2>MASSAS</h2>
        </div>

        <div className="massas__triangle"></div>
      </div>

      <div className="flavours__container">
        <div className='masses__image'>
          <img src={massesFigure} alt="Ilustração de item de confeitaria" />
        </div>

        <div className='masses__image2'>
          <img src={massesFigure2} alt="Ilustração de item de confeitaria" />
        </div>

        <div className='masses__fixed-image'>
          <img src="./outline-of-a-cake.png" alt="An outline of a cake" />
        </div>

        <ul className='flavours'>
          {items.map(flavours => (
            <li key={flavours.id} className='massas-flavours'>
              <span className='flavours__heart'>
                {'\u{2764}'}
              </span>

              <span className='flavours__sabor'>
                {flavours.sabor}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Massas