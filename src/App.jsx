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

// Data
import { urlZap } from './data/contato'

import { bolosTradicionais, bolosTradicionaisDescricao } from './data/bolosDecorados'

import { docinhosTra, docinhosTraCento, docinhosEsp, docinhosEspCento, EspImage1DivStyle, EspImage2DivStyle, EspImage3DivStyle, docinhosPersoCento, persoImage1DivStyle, persoImage2DivStyle, persoImage3DivStyle, docinhosListaUni } from './data/doces'

import { massas } from './data/massas'

import { recheiosTradicionais, recheiosEspeciais, blueCupcake, berliner, recheiosTradPreco, recheiosEspPreco } from './data/recheios'

import { miniCupcakes, miniBrownie, mainBrownieStyle, party_illuFig1_style, party_illuFig2_style } from './data/docesDeFesta'

import { kit1, kit1Preco, fig1PartyKitStyle, kit2, kit2Preco, fig2PartyKitStyle, kit3, kit3Preco, fig3PartyKitStyle, kit4, kit4Preco, fig4PartyKitStyle, kit5, kit5Preco, fig5PartyKitStyle } from './data/kitFesta'

import {additionalFirst, additionalSecond, additFig3Style, additFig4Style } from './data/adicionais'

// Estilos
import './App.css';
import './Responsive.css'

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

          recheiosPreco={recheiosTradPreco}
        />


        <Recheios
          title="RECHEIOS ESPECIAIS"

          recheios={recheiosEspeciais} 

          recheiosFigure1={'./blue-cupcake.png'} 

          figure1Style={blueCupcake} 

          recheiosFigure2={'./berliner.png'}
          
          figure2Style={berliner}

          fade="slide-right"

          recheiosPreco={recheiosEspPreco}
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

          partyCand__caption="Acompanha forminha: escolher a cor"

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