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
import Recheios from './components/Recheios';
import PartyCandies from './components/PartyCandies';
import PartyKit from './components/PartyKit';
import Additional from './components/Additional';

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
    {id: 2, sabor: "RED VELVET"},
    {id: 3, sabor: "MISTA"},
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


  const docinhosEsp = [
    {id: 0, tipo: "FERRERO ROCHER"},
    {id: 1, tipo: "NINHO COM NUTELLA"},
    {id: 2, tipo: "MORANGO COM NUTELLA"},
    {id: 3, tipo: "CHURROS"},
    {id: 4, tipo: "OREO"},
  ];

  const docinhosEspCento = "R$150,00";

  const EspImage1DivStyle = {
    width: "clamp(9em, 45vw, 10em)",
    margin: "-30px auto",
    padding: 0,
  }

  const EspImage2DivStyle = {
    width: "clamp(3.2em, 16.5vw, 3.7em)",
    left: "-15px",
  }

  const EspImage3DivStyle = {
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
    {id: 0, cakeType: "Mini Cupcake", price: "R$3,50"},
    {id: 1, cakeType: "Mini Cupcake personalizado 2D", price: "R$6,00"},
    {id: 2, cakeType: "Cupcake", price: "R$7,00"},
    {id: 3, cakeType: "Cupcake personalizado 2D", price: "R$10,00"},
  ];


  const miniBrownie = ([{ 
    id: 0, 
    cakeType: "Doce de leite", 
    cakeType2: "Brigadeiro", 
    cakeType3: "Ninho com Nutella", 
    price: "R$4,50 - 1 unidade",
  }]);

  const mainBrownieStyle = {
    transform: "rotate(-4deg)",
  };

  const party_illuFig1_style = {
    /*
    left: "-15px",
    top: "-40px",
    transform: "rotate(-10deg)",
    filter: "drop-shadow(1px 3px 1px #0000003d)",
    */
  };

  const party_illuFig2_style = {
    left: "-5px",
    bottom: "-30px",
    transform: "rotate(110deg)"
  };


  // KIT FESTA
  const kit1 = [
    {id: 0, quant: 1, nome: "Bento Cake"},
    {id: 1, quant: 10, nome: "Docinhos"},
    {id: 2, quant: 20, nome: "Salgadinhos"},
  ];

  const kit1Preco = "100,00";

  const fig1PartyKitStyle = {
    top: "-45px",
    left: "-12px",
    filter: "drop-shadow(1px 2px 2px #00000054)",
  };


  const kit2 = [
    {id: 0, quant: 1, nome: "Bolo 1kg"},
    {id: 1, quant: 30, nome: "Docinhos"},
    {id: 2, quant: 50, nome: "Salgadinhos"},
  ];

  const kit2Preco = "170,00"

  const fig2PartyKitStyle = {
    top: "-25px",
    right: "-25px",
    filter: "drop-shadow(-1px 2px 2px #00000054)"
  };


  const kit3 = [
    {id: 0, quant: 1, nome: "Bolo 1,5kg"},
    {id: 1, quant: 59, nome: "Docinhos"},
    {id: 2, quant: 70, nome: "Salgadinhos"},
  ];

  const kit3Preco = "250,00";

  const fig3PartyKitStyle = {
    top: "-25px",
    left: "-12px",
    filter: "drop-shadow(1px 2px 2px #00000054)",
    width: "clamp(3em, 15vw, 3.5em)"
  };


  const kit4 = [
    {id: 0, quant: 1, nome: "Bolo de 2kg"},
    {id: 1, quant: 70, nome: "Docinhos"},
    {id: 2, quant: 100, nome: "Salgadinhos"},
  ];

  const kit4Preco = "330,00";

  const fig4PartyKitStyle = {
    bottom: "-25px",
    left: "-23px",
    filter: "drop-shadow(3px 0 2px #00000054)",
    width: "clamp(4.5em, 22vw, 5em)"
  };


  const kit5 = [
    {id: 0, quant: 1, nome: "Bolo 3kg"},
    {id: 1, quant: 100, nome: "Docinhos"},
    {id: 2, quant: 150, nome: "Salgadinhos"},
  ];

  const kit5Preco = "460,00";

  const fig5PartyKitStyle = {
    top: "-30px",
    right: "-12px",
    filter: "drop-shadow(-1px 2px 2px #0000002c)",
    width: "clamp(3.5em, 17vw, 3.8em)"
  };

  // ADICIONAIS
  const additionalFirst = [
    {id: 0, info: "Topo de bolo com flores artificiais ou de papel"},
    {id: 1, info: "Topo de bolo com bexiga/balão de aniversário"},
    {id: 2, info: "Topo de bolo elaborado (flores, etc...)"},
    {id: 3, info: "Decoração com glitter: a partir de R$10,00 a uni."},
    {id: 4, info: "Papel de arroz: A partir de R$15,00"},
  ];


  const additionalSecond = [
    {id: 0, info: "Prazo para encomenda: 3 dias úteis."},
    {id: 1, info: "Encomendas só são confirmadas após o envio do comprovante de 50% do sinal."},
    {id: 2, info: "Não trabalhamos aos domingos."},
    {id: 3, info: "Formas de pagamento: à vista, débito, crédito, link de pagamento e pix.(LINK DE PAGAMENTO E CARTÃO DE CRÉDITO: À VISTA OU PARCELADO COM ACRÉSCIMO POR CONTA DO CLIENTE)."},
    {id: 4, info: "Não realizamos entregas, apenas retirada."},
    {id: 5, info: "Entregas podem ser feitas via Uber Flash, por total responsabilidade do cliente."},
    {id: 6, info: "Não vendemos fiado ou à prazo."},
    {id: 7, info: [<strong key={7}>HORÁRIO DE RETIRADA DE <time>08H ÀS 18H.</time></strong>]},
  ];


  const additFig3Style = {
    bottom: "-20px",
    left: "-15px"
  };

  const additFig4Style = {
    top: "-67px",
    width: "clamp(3.2em, 17vw, 4em)"
  };

  return (
    <>
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
      <section className='cakes-section'>
        <Header />

        <BolosDecor 
          cardTitle="BOLOS DECORADOS" 

          cakeDescription={bolosTradicionaisDescricao} 

          itemsList={bolosTradicionais} 

          itemsClass="masses-flavours" 

          cakeImage='./boloAmanda.jpg'

          fig='./bolosDecor_cupcake.png'

          textoAlt="Bolo decorado"

          fade="fade-left"
        />
      </section>

      <Division />

      {/* SEÇÃO DE MASSAS */}
      <section className='masses-section'>
        <Header />

        <Masses 
          items={massas}

          massesFigure={"./masses_strawberry.png"} 

          massesFigure2={'./masses_gloves.png'}

          fade="fade-right"
        />

      </section>

      <Division />

      {/* SEÇÃO DE RECHEIOS */}
      <section className='filling-section'>
        <Header />

        <Recheios
          title="RECHEIOS TRADICIONAIS" 

          recheios={recheiosTradicionais} 

          recheiosFigure1={'./flower.png'} 

          recheiosFigure2={'./piping-bag.png'} 

          fade="slide-left"
        />


        <Recheios
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

          fade="fade-left"
        />

        <Candies 
          candiesType="Docinhos Especiais"

          candiesList={docinhosEsp}

          cento={docinhosEspCento}

          image1DivStyle={EspImage1DivStyle}

          image2DivStyle={EspImage2DivStyle}

          image3DivStyle={EspImage3DivStyle}

          candiesImage1='./brig_gourmet-doces.png'

          textoAlt="Doces Especiais"

          candiesImage2='./docinhos-chocolat.png'

          candiesImage3="./bisc-doces.png"

          fade="fade-right"
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

          fade="fade-left"

          listaUni={docinhosListaUni}
        />

      </section>

      <Division />

      {/* SEÇÃO DE DOCES DE FESTA */}
      <section>
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

          mainFig='./partyCand_brownie1.png'

          textoAlt="Mini Brownie"

          partyCandMainFigStyle={mainBrownieStyle}

          partyCand__caption="acompanha forminha: escolher a cor"

          partyCandies={miniBrownie}

          partyCand__illuFig1_style={party_illuFig1_style}

          partyCand__illuFig1='./partyCand_brownie-fig.png'

          partyCand_illuFig1_style={party_illuFig1_style}

          partyCand__illuFig2='./partyCand_chocolate.png'

          partyCand_illuFig2_style={party_illuFig2_style}

          minimumText="MÍNIMO 15 UNIDADES"
        />
      </section>

      <Division />

      {/* SEÇÃO DO KIT FESTA */}
      <section>
        <Header />

        <PartyKit
          title="KIT FESTA"
        
          topInformations1="BOLO E DOCINHOS ESPECIAIS NÃO SÃO INCLUSOS NO VALOR."
        />

        <div className='partyKit__compononents'> {/* usar essa div para fazer um grid em telas maiores que de um celular */}
          <PartyKit
            kitTitle="Kit 1"

            kitList={kit1}

            kitPreco={kit1Preco}

            fig='./partyKit-fig1.png'

            figStyle={fig1PartyKitStyle}
          />

          <PartyKit
            kitTitle="Kit 2"

            kitList={kit2}

            kitPreco={kit2Preco}

            fig='./partyKit-fig2.png'

            figStyle={fig2PartyKitStyle}
          />

          <PartyKit
            kitTitle="Kit 3"

            kitList={kit3}

            kitPreco={kit3Preco}

            fig='./partyKit-fig3.png'

            figStyle={fig3PartyKitStyle}
          />

          <PartyKit
            kitTitle="Kit 4"

            kitList={kit4}

            kitPreco={kit4Preco}

            fig='./partyKit-fig4.png'

            figStyle={fig4PartyKitStyle}
          />
          
          <PartyKit
            kitTitle="Kit 5"

            kitList={kit5}

            kitPreco={kit5Preco}

            fig='./partyKit-fig5.png'

            figStyle={fig5PartyKitStyle}

            margin={{marginBottom: "60px"}} // Apenas para dar um espaçamento entre o último elemento e a divisão
          />
        </div>
      </section>

      <Division />

      <section>
        <Header />

        <Additional 
          title="ADICIONAIS"

          additList={additionalFirst}

          fig1='./addit-fig1.png'

          fig2='./addit-fig2.png'

          fade="zoom-in"
        />

        <Additional 
          title="INFORMAÇÕES IMPORTANTES"

          additList={additionalSecond}

          fig1='./addit-fig3.png'

          fig1Style={additFig3Style}

          fig2='./addit-fig4.png'

          fig2Style={additFig4Style}

          fade="zoom-in"
        />
      </section>

      <Division />
    </main>

    <footer>
      
    </footer>
    </>
  )
}

export default App