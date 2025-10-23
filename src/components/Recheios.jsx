import './Recheios.css'

const Recheios = ({title, recheios}) => {
  return (
    <div className='recheios__card'>
        <div className='recheios__header'>
            <div className={title && "recheios__title"}>
                <h2>{title}</h2>
            </div>
            <div className={title && 'recheios__triangle'}></div>
        </div>

        <div className='recheios__container'>
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