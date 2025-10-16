import './App.css'
import Card from './components/Card'
import Division from './components/Division'

import Header from './components/Header'

function App() {
  const telefone = 5561985901160
  const urlZap = `https://wa.me/${telefone}`

  const bolosTradicionais = [
    {id: 0, nome: "Bentô", preco: "R$50,00"},
    {id: 1, tamanho: "11cm", fatias: "| 18 a 20 fatias", preco: "R$85,00"},
    {id: 2, tamanho: "15cm", preco: "R$125,00"},
    {id: 3, tamanho: "17cm", fatias: "| 18 a 20 fatias", preco: "R$160,00"},
    {id: 4, tamanho: "20cm", fatias: "| 25 fatias", preco: "R$200,00"},
    {id: 5, tamanho: "25cm", fatias: "| 30 fatias", preco: "R$250,00"}
  ]

  const bolosTradicionaisDescricao = (
  <span>
    <span className='heart'>{'\u{2764}'}</span> 2 Camadas de recheio e 3 camadas de massa (mais baixo).
  </span>)

  return (
    <main>
      <section className='first-page'>
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
        
        <div className='first-page__title'>
          <h1>MENU <span className='title__span'>de</span> <br /> BOLOS & DOCES</h1>
        </div>
      </section>


      <Division />


      <section className='second-page'>
        <Header />

        <Card cardTitle="BOLOS DECORADOS" cakeName="Bolos Tradicionais" cakeDescription={bolosTradicionaisDescricao} list={bolosTradicionais} nomeClasse="lista" />
          
        <Card cakeName="Bolos Alternativos" cakeDescription={bolosTradicionaisDescricao} list={bolosTradicionais} nomeClasse="lista"/>
      </section>
    </main>
  )
}

export default App