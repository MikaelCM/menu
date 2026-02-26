import { kitPhotos } from '../data/kitFesta'
import './PartyKit.css'

const PartyKit = ({ margin, title, topInformations1, topInformations2, partyKitPhotos, kitTitle, kitList, kitPreco, fig, figStyle }) => {
  return (
    <div className="partyKit__card">
      {title &&
        <header className='partyKit-head__container'>

          <div className='partyKit__header'>
            <h2>{title}</h2>
          </div>

          <div className="partyKit__triangle"></div>

        </header>
      }

      {topInformations1 && (
        <div className='TopInformations__cont'>

          <div className='TI'>
            <p><em>{topInformations1}</em></p>
          </div>

          <div className='TI__triangle'></div>

        </div>
      )}

      {topInformations2 && (
        <div className='TI2__cont'>

          <div className='TI2__triangle'></div>

          <div className='TI2'>
            <p>{topInformations2}</p>
          </div>

        </div>
      )}

      {partyKitPhotos && (
        <div className='partyKitPhotos__carousel'>

          <ul className='partyKit__photos'>
            {kitPhotos.map(photo => (
              <li key={photo.id}>
                <img src={photo.image} alt={photo.alt} />
              </li>
            ))}
          </ul>

          <ul className='partyKit__photos' aria-hidden='true'>
            {kitPhotos.map(photo => (
              <li key={photo.id}>
                <img src={photo.image} alt={photo.alt} />
              </li>
            ))}
          </ul>

        </div>
      )}

      {kitTitle && (
        <div className='partyKit__price-h3-list__cont'>

          <div className='partyKit__h3'>
            <h3>{kitTitle}</h3>
          </div>

          <div className='partyKit__list-price-image__cont' style={margin}>

            <div className='partyKit__fig' style={figStyle}>
              <img src={fig} alt="" />
            </div>

            {kitList && (
              <ul className='partyKit__list'>
                {kitList.map(item => (
                  <li key={item.id}>

                    <span className='partyKit__heart'>
                      {'\u{2764}'}
                    </span>

                    {item.quant} {item.nome}

                  </li>
                ))}
              </ul>
            )}

            <div className='partyKit__price'>
              R${kitPreco}
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default PartyKit