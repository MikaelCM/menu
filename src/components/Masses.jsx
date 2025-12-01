import './Masses.css'

const Massas = ({ items, massesFigure, massesFigure2, fade }) => {
  return (
    <div className='massas__card' data-aos={fade}>

      <div className="massas__container">

        <header className='massas__title'>
          <h2>MASSAS</h2>
        </header>

        <div className="massas__triangle"></div>
      </div>

      <div className="flavours__container">

        <div className='masses__image1'>
          <img src={massesFigure} alt="" />
        </div>

        <div className='masses__image2'>
          <img src={massesFigure2} alt="" />
        </div>

        <div className='masses__fixed-image'>
          <img src="./outline-of-a-cake.png" alt="" />
        </div>

        <ul className='flavours'>
          {items.map(flavours => (

            <li key={flavours.id} className='massas-flavours__items'>
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