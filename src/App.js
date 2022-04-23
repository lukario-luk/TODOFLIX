import React from "react";
/* icons */
import IconSearch from "./assets/icons/icon-search-filled.svg"
import DefaultUserProfile from "./assets/icons/default-user-profile.svg"
import RightTriangle from "./assets/icons/right-triangle.svg"
import LikeButton from "./assets/icons/like-button.svg"
import FavoriteHeart from "./assets/icons/favorite-heart.svg"
/* Movies */
import Movie1 from "./assets/Movies/A-fuga-das-galinhas.jpeg"
import Movie2 from "./assets/Movies/AmarElo.jpg"
import Movie3 from "./assets/Movies/Capitao-Fantastico.png"
import Movie4 from "./assets/Movies/Hoje-eu-quero-voltar-sozinho.png"
import Movie5 from "./assets/Movies/Que-horas-ela-volta.png"
import Movie6 from "./assets/Movies/Rocketman.jpg"
import Movie7 from "./assets/Movies/Shrek.png"
import Movie8 from "./assets/Movies/Spider-man-into-spider-verse.png"
import Movie9 from "./assets/Movies/Um-sonho-de-liberdade.png"
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
const GlobalStyle =createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  color:white;
  font-family:Arial;
}
`
const ContainerPag =styled.div`
  width:100%;
  height:250vh;
  padding:1.1% 3.9%;
  background-color:black;
`
const Header = styled.header`
  width:100%;
  height:4.8vh;
  margin-bottom:7.5vw;
  display:flex;
  background-color:#000;
`
const HeaderDiv = styled.div`
  width:100%;
  display:flex;
  position:relative;
  p{
    display:flex;
    align-items:center;
  }
`
const TODOFLIX = styled.h1`
  font-size:1.5em;
  color:#E71B27;
  font-family: 'Bebas Neue', cursive;
  
`
const Home = styled.p`
  margin:0 1.8vw;

`
const AddMovies = styled.button`
  width:112px;
  height:32px;
  border:none;
  margin:0 1.02vw;
  border-radius:4px;
  display:flex;
  justify-content:center;
  align-items:center;
  font: normal normal normal 13px/15px Arial;
  background-color:#E71B27;
`
const DropDown = styled.div`
  width:132px;
  &:hover ul{
    display:block;
  }
  `
const SummaryCategory = styled.div`
  min-height:32px;
  display:flex;
  align-items:center;
  `
const SummaryTitle = styled.h3`
  display:flex;
  align-items:center;
  font-size:0.98em;
  font-weight:normal;
  `
const ContentList = styled.ul`
    width:100%;
    display:none;
    position:relative;
    opacity: 1;
    list-style: none;
    background-color:#000;
    li{
      font-size:0.95em;
      padding:6px;
    }
  `
const Search =styled.input`
  width:400px;
  height:100%;
  border:none;
  padding-left:2.5vw;
  border-radius:4px;
  background-image:url(${IconSearch});
  background-repeat:no-repeat;
  background-position:0.6vw center;
  background-color:#2C2C2C;
`
const ConfigUSerProfile = styled.div`
  display:flex;
  align-items:center;
  position: absolute;
  right:0;

`

const Main = styled.main`
  width:100%;
  height:100%;


`
const RecentlySeen = styled.section`
  width:100%;
  height:17.7vw;
  margin-bottom:10vh;
  display:flex;

`
const FeatureMoviePoster = styled.img`
  width:32.1vw;
  border-radius:4px;  
`
const Assessment = styled.div`
  display:flex;
  align-items:flex-end;
  font-size:0.8em;

`
const InfoMovie= styled.div`
  margin-left:3.5vw;
` 
const TitleRecentlySeen  = styled.div`
  font-size:2.55em;
  font-weight:bold;
`
const Description = styled.div`
  width:29.648609077vw;
  font-size:0.9em;
`

const Highlighted= styled.div`
  width:100%;
  height:36.1vh;
  background-color:#0b090a;

` 
// const i = styled.div``
export default class App extends React.Component{
  state={
    RecentlySeen:[{poster:Movie2,Name:"Capitão Fantástico", description:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.", },],
    movies:[
      {poster:Movie1,Name:"A Fuga das Galinhas", description:"O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",},
      {poster:Movie2,Name:"AmarElo", description:"Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.", },
      {poster:Movie3,Name:"Capitão Fantástico", description:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.", },
      {poster:Movie4,Name:"Hoje Eu Quero Voltar Sozinho", description:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.", },
      {poster:Movie5,Name:"Que Horas Ela Volta", description:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.", },
      {poster:Movie6,Name:"Rocketman", description:"Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.", },
      {poster:Movie7,Name:"Sherek", description:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.", },
      {poster:Movie8,Name:"Homem Aranha", description:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.", },
      {poster:Movie9,Name:"Um Sonho de Liberdade", description:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.", },
    ]
  }
  
  render(){
    return(
      <ContainerPag>
        <GlobalStyle/>
        <Header>
          <HeaderDiv>
            <TODOFLIX>TODOFLIX</TODOFLIX>
            <Home>Inicio</Home>
            <DropDown>
              <SummaryCategory>
                <SummaryTitle>Categorias</SummaryTitle>
                <img src={RightTriangle}/>
              </SummaryCategory>
              <ContentList>
                <li>Todos</li>
                <li>Favoritos</li>
                <li>Já vistos</li>
                <li>Adicionados</li>
              </ContentList>
            </DropDown>
          </HeaderDiv>
          <HeaderDiv >
            <AddMovies>Adicionar filme</AddMovies>
            <form>
              <Search type="text" placeholder="Pesquisar"/>
            </form>
            <ConfigUSerProfile>
              <img src={DefaultUserProfile} alt=""/><img src={RightTriangle}/>
            </ConfigUSerProfile>
          </HeaderDiv>
        </Header>
        <Main>
          <RecentlySeen>
            <FeatureMoviePoster src={this.state.RecentlySeen[0].poster} alt=""/>

            <InfoMovie>
            <img src={FavoriteHeart} alt=""/>
            <p>Visto recentemente</p>
            <TitleRecentlySeen>{this.state.RecentlySeen[0].Name}</TitleRecentlySeen>
            <Description>{this.state.RecentlySeen[0].description}</Description>
            <Assessment>
              <p>4/5</p>
              <img src={LikeButton} alt=""/>
            </Assessment>
            </InfoMovie>

          </RecentlySeen>
          <Highlighted>
            <h3></h3>
            

          </Highlighted>
        </Main>
      </ContainerPag>
    )
  }
}