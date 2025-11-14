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
import PartyCandies from './components/PartyCandies';

// Página
function App() {
  // ANIMAÇÃO DE FADE-IN PARA COMPONENTES
   useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 900,
        once: true,
      });
      AOS.refresh();
    };

    setTimeout(initAOS, 300);
    window.addEventListener("load", initAOS);

    return () => window.removeEventListener("load", initAOS);
  }, []);

  // INFORMAÇÕES PARA CONTATO COM A DONA
  const telefone = 5561985901160;
  const urlZap = `https://wa.me/${telefone}`;

  // BOLOS DECORADOS
  const bolosTradicionais = [
    {id: 0, nome: "Bentô Cake", fatias: "4 fatias"},
    {id: 1, tamanho: "11cm", fatias: "8 fatias"},
    {id: 2, tamanho: "15cm", fatias: "12 fatias"},
    {id: 3, tamanho: "17cm", fatias: "20 fatias",},
    {id: 4, tamanho: "20cm", fatias: "25 fatias"},
    {id: 5, tamanho: "25cm", fatias: "30 fatias"},
    {id: 6, tamanho: "30cm", fatias: "50 fatias"},
  ];

  const bolosTradicionaisDescricao = (
  <span>
    <span className='heart'>{'\u{2764}'}</span> 2 Camadas de recheio e 3 camadas de massa.
  </span>);

  // MASSAS
  const massas = [
    {id: 0, sabor: "BAUNILHA"},
    {id: 1, sabor: "CHOCOLATE"},
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
    fontSize: "clamp(0.6em, 3vw, 0.7em)",
    transform: "translateX(-11px)",
  };

  const berliner = {
    fontSize: "clamp(0.7em, 3.4vw, 0.8em)",
    transform: " translate(15px, -15px)",
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
  const docinhosTraCento = "R$135,00";


  const docinhosGour = [
    {id: 0, tipo: "FERRERO ROCHER"},
    {id: 1, tipo: "NINHO COM NUTELLA"},
    {id: 2, tipo: "MORANGO COM NUTELLA"},
    {id: 3, tipo: "CHURROS"},
    {id: 4, tipo: "OREO"},
  ];

  const docinhosGourCento = "R$150,00";

  const gourmetImage1DivStyle = {
    width: "clamp(9em, 45vw, 10em)",
    margin: "-30px auto",
    padding: 0,
  }

  const gourmetImage2DivStyle = {
    width: "clamp(3.2em, 16.5vw, 3.7em)",
    left: "-15px",
  }

  const gourmetImage3DivStyle = {
    width: "clamp(5em, 25vw, 5.4em)",
    right: "-33px",
    bottom: "-40px"
  }


  const docinhosPersoCento = "R$170,00";

  const persoImage1DivStyle = {
    filter: "drop-shadow(0 2px 4px #0000007e)",
    width: "clamp(9em, 45vw, 9.5em)"
  };

  const persoImage2DivStyle = {
    width: "clamp(4em, 20vw, 4.3em)",
    bottom: "-38px",
    left: "-18px"
  };

  const persoImage3DivStyle = {
    width: "clamp(5.5em, 26vw, 5.8em)",
    right: "-12px"
  };


  const docinhosListaUni = [
    {id: 0, uni: "25 uni.", saboresQuant: "1 Sabor"},
    {id: 1, uni: "50 uni.", saboresQuant: "2 Sabores"},
    {id: 2, uni: "75 uni.", saboresQuant: "3 Sabores"},
    {id: 3, uni: "100 uni.", saboresQuant: "4 Sabores"},
  ];

  // DOCES DE FESTA
  const miniCupcakes = [
    {id: 0, cakeType: "Mini Cupcake", price: "R$4,00"},
    {id: 1, cakeType: "Mini Cupcake personalizado 2D", price: "R$7,00"},
    {id: 2, cakeType: "Cupcake", price: "R$10,00"},
    {id: 3, cakeType: "Cupcake personalizado 2D", price: "R$9,00"},
  ];


  const miniBrownie = [
    {id: 0, cakeType: "Doce de leite", cakeType2: "Brigadeiro", cakeType3: "Ninho com Nutella", price: "R$4,50 - 1 unidade & R$79,99 - 20 unidades"},
  ];

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

          cakeImage='./boloAmanda.jpg'

          fig='./bolosDecor_cupcake.png'

          textoAlt="Bolo decorado"
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
      <section className='candies-section'>
        <Header />

        <Candies 
          title="DOCES" 

          title__span=" MÍNIMO 25 UNIDADES"

          candiesType="Docinhos Tradicionais"

          candiesList={docinhosTra}

          cento={docinhosTraCento}

          candiesImage1='./brigadeiros-doces.png'

          textoAlt="Doces tradicionais"

          candiesImage2='./pink-bisc-doces.png'

          candiesImage3="./choco-strawbe-doces.png"

          dataAOS="fade-left"
        />

        <Candies 
          candiesType="Docinhos Gourmet"

          candiesList={docinhosGour}

          cento={docinhosGourCento}

          image1DivStyle={gourmetImage1DivStyle}

          image2DivStyle={gourmetImage2DivStyle}

          image3DivStyle={gourmetImage3DivStyle}

          candiesImage1='./brig_gourmet-doces.png'

          textoAlt="Doces gourmet"

          candiesImage2='./docinhos-chocolat.png'

          candiesImage3="./bisc-doces.png"

          dataAOS="fade-right"
        />

        <Candies 
          candiesType="Docinhos Personalizados"

          cento={docinhosPersoCento}

          image1DivStyle={persoImage1DivStyle}

          image2DivStyle={persoImage2DivStyle}

          image3DivStyle={persoImage3DivStyle}

          candiesImage1='./doces-perso-doces.png'

          textoAlt="Doces personalizados"

          candiesImage2='./brigadeiro-doces.png'

          candiesImage3="./doce-doces.png"

          dataAOS="fade-left"

          listaUni={docinhosListaUni}
        />

      </section>

      <Division />

      {/* SEÇÃO DE DOCES DE FESTA */}
      <section className='partyCandies-section'>
        <Header />

        <PartyCandies 
          Title="DOCES DE FESTA"

          partyCand__h3="Mini Cupcakes"

          mainFig='./partyCand_main-cupcake.png'

          textoAlt="Mini cupcake"

          partyCandies={miniCupcakes}

          partyCand__illuFig1='./partyCandies_cupcake.png'

          partyCand__illuFig2='./partyCandies_cake.png'
        />

        <PartyCandies 
          partyCand__h3="Mini Brownie"

          partyCandies={miniBrownie}

          partyCand__illuFig1='./partyCandies_cupcake.png'

          partyCand__illuFig2='./partyCandies_cake.png'

          minimumText="MÍNIMO 15 UNIDADES"
        />
      </section>

    </main>
  )
}

export default App