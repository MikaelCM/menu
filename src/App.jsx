import './App.css'

import BolosDecor from './components/BolosDecor'
import Division from './components/Division'
import Header from './components/Header'
import Masses from './components/Masses'
import Recheios from './components/Recheios'

function App() {
  const telefone = 5561985901160
  const urlZap = `https://wa.me/${telefone}`

  // BOLOS DECORADOS
  const bolosTradicionais = [
    {id: 0, nome: "Bentô Cake", fatias: "- 4 fatias", preco: "R$50,00"},
    {id: 1, tamanho: "11cm", fatias: "- 8 fatias", preco: "R$85,00"},
    {id: 2, tamanho: "15cm", fatias: "- 12 fatias", preco: "R$120,00"},
    {id: 3, tamanho: "17cm", fatias: "- 20 fatias", preco: "R$160,00"},
    {id: 4, tamanho: "20cm", fatias: "- 25 fatias", preco: "R$210,00"},
    {id: 5, tamanho: "25cm", fatias: "- 30 fatias", preco: "R$250,00"},
    {id: 6, tamanho: "30cm", fatias: "- 50 fatias", preco: "R$340,00"},
  ]

  const bolosTradicionaisDescricao = (
  <span>
    <span className='heart'>{'\u{2764}'}</span> 2 Camadas de recheio e 3 camadas de massa.
  </span>)

  // MASSAS
  const massas = [
    {id: 0, sabor: "BAUNILHA"},
    {id: 1, sabor: "CHOCOLATE"},
    {id: 2, sabor: "OS DOIS"},
  ]

  // RECHEIOS
  const recheiosEspeciais = [
    {id: 0, recheio: "Doce de leite com ameixa"},
    {id: 1, recheio: "Doce de leite com abacaxi"},
    {id: 2, recheio: "Ninho com nutella"},
    {id: 3, recheio: "Ninho com geléia de morango"},
    {id: 4, recheio: "Nozes"},
    {id: 5, recheio: "Chocolate meio amargo"},
  ]

  return (
    <main>
      <section className='menu-section'>
        <Header />
        
        <div className="links">
          <div className='links_paragraph-container'>
            <p>Clique e seja direcionado ao:</p>
          </div>

          <div className="link_whatsapp">
            <a href={urlZap} rel="external noopener noreferrer" target="_blank">Whatsapp</a>
          </div>

          <div className="link_instagram">
              <a href="https://www.instagram.com/la_dolce_dinha/" rel="external noopener noreferrer" target="_blank">Instagram</a>
          </div>

          <div className="links_image">
            <img src="./materials.png" alt="Ilustração de materiais de confeitaria"/>
          </div>
        </div>

        <div className='mixer_words_container'>
          <div className="mixer_image">
            <img src="./mixer.png" alt="Ilustração de um mixer"/>
          </div>

          <div className='mixer_paragraph'>
            <p>BOLOS &bull; DOCES &bull; KIT FESTAS</p>
          </div>
        </div>
        
        <div className='menu__title'>
          <h1>MENU <span className='title__span'>de</span> <br /> BOLOS & DOCES</h1>
        </div>
      </section>

      <Division />

      <section className='cakes-section'>
        <Header />

        <BolosDecor cardTitle="BOLOS DECORADOS" cakeDescription={bolosTradicionaisDescricao} itemsList={bolosTradicionais} itemsClass="masses-flavours" cakeImage={'./boloAmanda.jpg'}/>
          
      </section>

      <Division />

      <section className='masses-section'>
        <Header />

        <Masses items={massas} massesFigure={"./masses_strawberry.png"} massesFigure2={'./masses_gloves.png'}/>
       
      </section>

      <Division />

      <section className='filling-section'>
        <Header />

        <Recheios title="RECHEIOS TRADICIONAIS" recheios={recheiosEspeciais}/>
      </section>
    </main>
  )
}

export default App