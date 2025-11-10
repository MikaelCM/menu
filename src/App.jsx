// Estilos
import './App.css';

// Bibliotecas
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

// Componentes
import BolosDecor from './components/BolosDecor';
import Candies from './components/Candies';
import Division from './components/Division';
import Header from './components/Header';
import Masses from './components/Masses';
import RecheiosTrad from './components/Recheios';

// Página
function App() {
  useEffect(() => {
    AOS.init({duration: 900, once: true});
  }, []);  

  // INFORMAÇÕES PARA CONTATO COM A DONA
  const telefone = 5561985901160;
  const urlZap = `https://wa.me/${telefone}`;

  // BOLOS DECORADOS
  const bolosTradicionais = [
    {id: 0, nome: "Bentô Cake", fatias: "- 4 fatias", preco: "R$50,00"},
    {id: 1, tamanho: "11cm", fatias: "- 8 fatias", preco: "R$85,00"},
    {id: 2, tamanho: "15cm", fatias: "- 12 fatias", preco: "R$120,00"},
    {id: 3, tamanho: "17cm", fatias: "- 20 fatias", preco: "R$160,00"},
    {id: 4, tamanho: "20cm", fatias: "- 25 fatias", preco: "R$210,00"},
    {id: 5, tamanho: "25cm", fatias: "- 30 fatias", preco: "R$250,00"},
    {id: 6, tamanho: "30cm", fatias: "- 50 fatias", preco: "R$340,00"},
  ];

  const bolosTradicionaisDescricao = (
  <span>
    <span className='heart'>{'\u{2764}'}</span> 2 Camadas de recheio e 3 camadas de massa.
  </span>);

  // MASSAS
  const massas = [
    {id: 0, sabor: "BAUNILHA"},
    {id: 1, sabor: "CHOCOLATE"},
    {id: 2, sabor: "OS DOIS"},
  ];

  // RECHEIOS
  const recheiosTradicionais = [
    {id: 0, recheio: "Beijinho"},
    {id: 1, recheio: "Paçoca"},
    {id: 2, recheio: "4 Leites"},
    {id: 3, recheio: "Doce de leite"},
    {id: 4, recheio: "Brigadeiro Branco"},
    {id: 5, recheio: "Brigadeiro Tradicional"},
    {id: 6, recheio: "Dois amores"},
  ];

  const recheiosEspeciais = [
    {id: 0, recheio: "Doce de leite com ameixa"},
    {id: 1, recheio: "Doce de leite com abacaxi"},
    {id: 2, recheio: "Ninho com Nutella"},
    {id: 3, recheio: "Ninho com geléia de morango"},
    {id: 4, recheio: "Nozes"},
    {id: 5, recheio: "Chocolate meio amargo"},
  ];

  // Alterar as imagens dos recheios em estilo inline passadas como prop
  const blueCupcake = {
    fontSize: "0.65em",
    transform: "translateX(-11px)",
  };

  const berliner = {
    fontSize: "0.7em",
    transform: "rotate(0) translate(20px, -15px)",
  };

  // DOCES
  const docinhosTra = [
    {id: 0, tipo: "CHOCOLATE"},
    {id: 1, tipo: "BEIJINHO"},
    {id: 2, tipo: "NINHO"},
    {id: 3, tipo: "PRESTÍGIO"},
    {id: 4, tipo: "PAÇOCA"},
    {id: 5, tipo: "MORANGO (NESQUIK)"},
    {id: 6, tipo: "CASADINHO"},
    {id: 7, tipo: "BRIGADEIRO BRANCO"},
  ];
  const docinhosTraCento = "R$100,00";


  const docinhosGour = [
    {id: 0, tipo: "FERRERO ROCHER"},
    {id: 1, tipo: "NINHO COM NUTELLA"},
    {id: 2, tipo: "MORANGO COM NUTELLA"},
    {id: 3, tipo: "CHURROS"},
    {id: 4, tipo: "OREO"},
  ];
  const docinhosGourCento = "R$120,00";
  const gourmetImageDivStyle = {
    width: "10em",
    margin: "-30px auto",
    padding: 0,
  }


  const docinhosPersoCento = "R$150,00";

  return (
    <main>
      {/* SEÇÃO DO MENU */}
      <section className='menu-section' data-aos="zoom-out">
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

      {/* SEÇÃO DE BOLOS DECORADOS */}
      <section className='cakes-section' data-aos="fade-left">
        <Header />

        <BolosDecor 
          cardTitle="BOLOS DECORADOS" 

          cakeDescription={bolosTradicionaisDescricao} 

          itemsList={bolosTradicionais} 

          itemsClass="masses-flavours" 

          cakeImage={'./boloAmanda.jpg'}
        />
      </section>

      <Division />

      {/* SEÇÃO DE MASSAS */}
      <section className='masses-section' data-aos="fade-right">
        <Header />

        <Masses 
          items={massas}

          massesFigure={"./masses_strawberry.png"} 

          massesFigure2={'./masses_gloves.png'}
        />

      </section>

      <Division />

      {/* SEÇÃO DE RECHEIOS */}
      <section className='filling-section' data-aos="slide-left">
        <Header />

        <RecheiosTrad
          title="RECHEIOS TRADICIONAIS" 

          recheios={recheiosTradicionais} 

          recheiosFigure1={'./flower.png'} 

          recheiosFigure2={'./piping-bag.png'} 
        />


        <RecheiosTrad 
          title="RECHEIOS ESPECIAIS"

          recheios={recheiosEspeciais} 

          recheiosFigure1={'./blue-cupcake.png'} 

          figure1Style={blueCupcake} 

          recheiosFigure2={'./berliner.png'}
          
          figure2Style={berliner}
        />

      </section>

      <Division />

      {/* SEÇÃO DE DOCINHOS */}
      <section className='candies-section' data-aos="slide-right">
        <Header />

        <Candies 
          title="DOCES" 
          title__span=" MÍNIMO 25 UNIDADES"
          candy__h3="doces-trad"
          candiesType="Docinhos Tradicionais"
          candiesList={docinhosTra}
          cento={docinhosTraCento}
          candiesImage1='./brigadeiros-doces.png'
          candiesImage2='./pink-bisc-doces.png'
          candiesImage3="./choco-strawbe-doces.png"
        />

        <Candies 
          candy__h3="doces-trad"
          candiesType="Docinhos Gourmet"
          candiesList={docinhosGour}
          cento={docinhosGourCento}
          image1DivStyle={gourmetImageDivStyle}
          candiesImage1='./brig_gourmet-doces.png'
          candiesImage2='./docinhos-chocolat.png'
          candiesImage3="./choco-strawbe-doces.png"
        />

        <Candies 
          candy__h3="doces-trad"
          candiesType="Docinhos Personalizados"
          cento={docinhosPersoCento}
          candiesImage1='./brig_gourmet-doces.png'
          candiesImage2='./brigadeiro.png'
          candiesImage3="./choco-strawbe-doces.png"
        />

      </section>

      <Division />

    </main>
  )
}

export default App