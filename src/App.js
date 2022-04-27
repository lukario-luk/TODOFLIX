import React from "react";
import Carousel from "nuka-carousel";
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
body{
  background-color:black;
}
`
const ContainerPag =styled.div`
  width:100%;
  padding:1.1% 0 3.1% 3.9vw ;
  background-color:black;
`
const Header = styled.header`
  width:100%;
  height:4.8vh;
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
  font-size:2.01em;
  color:#E71B27;
  font-family: 'Bebas Neue', cursive;
  
`
const Home = styled.p`
  margin:0 1.8vw;
  font-size:0.8125em;

`
const AddMovies = styled.button`
  width:112px;
  height:32px;
  border:none;
  margin-right:1.02vw;
  border-radius:4px;
  display:flex;
  justify-content:center;
  align-items:center;
  font: normal normal normal 13px/15px Arial;
  background-color:#E71B27;
  &:hover{
    transition:1s;
    border:1px solid white;
  }
`
const DropDown = styled.div`
  width:132px;
    cursor: pointer;
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
  font-size:0.8125em;
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
      &:hover{
        text-decoration:underline;
      }
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
  margin-left:1.75vw;

`
const Main = styled.main`
  width:100%;
  height:100%;
  margin-top:7.5vw;


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
  margin-bottom:0.2em;
  font-size:2.55em;
  font-weight:bold;
`
const Description = styled.div`
  width:29.648609077vw;
  font-size:0.9em;
`
const Highlighted= styled.div`
  width:100%;
` 
const SpotlightTitle = styled.h2`
  font-size:1.1em;
  margin-bottom:1%;
`
const MovieBox = styled.div`
  width:18.9vw;
  min-height:20.7vw;
  padding:0.5vw;
  margin:1.5% 0;
  border-radius:4px;
  &:hover{
    transition:0.2s;
    background-color:#2C2C2C;
  }
`
const PosterInMovieBox= styled.img`
  width:100%;
  border-radius:4px;
`
const NameAndLike= styled.div`
  width:100%;
  display:flex;
  margin-bottom:3%;
  justify-content:space-between;
` 
const TitleInMovieBox= styled.h3`
  width:70%;
  display: inline-block;
  position: relative;
  font-size:1em;
  overflow: hidden;
  white-space: nowrap;  
  text-overflow: ellipsis;

` 
const NoteNumber =styled.p`
  margin-right:0.4vw;
`
const DescriptionMovieBox = styled.p`
  font-size:0.8em;
`
const Arrow = styled.svg`
  //fill:#fff;
  opacity:10;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-radius:100px;
  &#Rotate{
    transform:rotate(180deg);
  }
  &:hover{
    opacity: 1;
    background-color:rgba(255,255,255,0.2);
    box-shadow:0 0 100px -3px rgba(255,255,255,0.2);
  }
`
const Figure= styled.figure`
  position:relative;
`
const FavoriteHeartButton = styled.img`
  width:8%;
  position:absolute;
  right:1.5%;
  top:1.5%;

`
const ResultsMovies = styled.div`
  width:100%;
  padding-right:3.9vw;
  display:flex;
  flex-wrap:wrap;
`
const CategoryTitle = styled.div`
  font-size:1.8125em;
`
const ResultsBox = styled.div`
  margin-top:5vh;
`
const FavoriteHeartButtonRecentlySeen = styled.img`
  width:21px;
  margin-bottom:4px;
`

// const i = styled.div``
export default class App extends React.Component{
  state={
    RecentlySeen:[
      {poster:Movie3,Name:"Capitão Fantástico", description:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.", },
    ],
    moviesList:[
      {Name:"A Fuga das Galinhas", poster:Movie1, evaluationInLikes:"2/5",description:"O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",},
      {poster:Movie2,Name:"AmarElo", evaluationInLikes:"5/5", description:"Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.", },
      {poster:Movie3,Name:"Capitão Fantástico", evaluationInLikes:"4/5", description:"Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.", },
      {poster:Movie4,Name:"Hoje Eu Quero Voltar Sozinho", evaluationInLikes:"-", description:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.", },
      {poster:Movie5,Name:"Que Horas Ela Volta?", evaluationInLikes:"-", description:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.", },
      {poster:Movie6,Name:"Rocketman", evaluationInLikes:"-", description:"Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.", },
      {poster:Movie7,Name:"Sherek", evaluationInLikes:"4/5", description:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.", },
      {poster:Movie8,Name:"Homem Aranha", evaluationInLikes:"3/5", description:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.", },
      {poster:Movie9,Name:"Um Sonho de Liberdade", evaluationInLikes:"4,5/5", description:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.", },
    ],
    resultMovies:[],
    displayResults:true,
    inputValue:"",
  }
  SearchMovies = (event) =>{
    const {moviesList} = this.state
    const MoviesFilter = moviesList.filter(item => {
       if(item.Name.toLowerCase().includes(event.target.value.toLowerCase()) && event.target.value !== ""){
        return true;
       }
    })

    this.setState({
      resultMovies:MoviesFilter,
      displayResults: !this.state.displayResults,
      inputValue:event.target.value

    })
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
            
              <Search onChange={this.SearchMovies} type="text" placeholder="Pesquisar"/>
            <ConfigUSerProfile>
              <img src={DefaultUserProfile} alt=""/><img src={RightTriangle}/>
            </ConfigUSerProfile>
          </HeaderDiv>
        </Header>

        {this.state.inputValue != ""?
       <ResultsBox>
      <CategoryTitle>Results</CategoryTitle>
      <ResultsMovies>
      {this.state.resultMovies.map(item=>(
       <MovieBox>
         <Figure>
           <PosterInMovieBox src={item.poster} alt=""/>
           <FavoriteHeartButton title="Favoritar" src={FavoriteHeart} alt="Botão de coração para favoritar."/>
         </Figure>
         <NameAndLike>
         <TitleInMovieBox>{item.Name}</TitleInMovieBox>
         <Assessment>
           <NoteNumber>{item.evaluationInLikes}</NoteNumber>
           <img src={LikeButton} alt="botão de coração simbolisando favorito"/>
         </Assessment>
         </NameAndLike>
         <DescriptionMovieBox>{item.description}</DescriptionMovieBox>
         
       </MovieBox>
     ))}
    </ResultsMovies>
      </ResultsBox> : false}
  
       

      {this.state.inputValue == ""?
        <Main>
          <RecentlySeen>
            <FeatureMoviePoster src={this.state.RecentlySeen[0].poster} alt=""/>

            <InfoMovie>
            <FavoriteHeartButtonRecentlySeen title="Favoritar" src={FavoriteHeart} alt="Botão de coração para favoritar."/>
            <p>Visto recentemente</p>
            <TitleRecentlySeen>{this.state.RecentlySeen[0].Name}</TitleRecentlySeen>
            <Description>{this.state.RecentlySeen[0].description}</Description>
            <Assessment>
              <NoteNumber>4/5</NoteNumber>
              <img src={LikeButton} alt=""/>
            </Assessment>
            </InfoMovie>

          </RecentlySeen>
          <Highlighted>
            <SpotlightTitle>Destaques</SpotlightTitle>

            <Carousel
            autoplay={true}
            pauseOnHover={true}
            autoplayInterval={3500}
            speed={800}
            renderCenterLeftControls={({ previousSlide }) => (
              <Arrow 
                id="Rotate"
                onClick={previousSlide}
                xmlns="http://www.w3.org/2000/svg" 
                width="68" height="68"
                viewBox="0 0 68 68"
                 >
                <g id="Group_8" data-name="Group 8" transform="translate(-1309 -621)">
                  <rect id="Box" width="68" height="68" transform="translate(1309 621)" fill="none"/>
                  <path id="Icon_Keyboard_Arrow_-_Up_Dark" data-name="Icon / Keyboard Arrow - Up / Dark" d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z" transform="translate(1353.483 637.15) rotate(90)" fill="#fff"/>
                </g>
              </Arrow>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Arrow 
                onClick={nextSlide}
                xmlns="http://www.w3.org/2000/svg" 
                width="68" height="68"
                viewBox="0 0 68 68"
                 >
                <g id="Group_8" data-name="Group 8" transform="translate(-1309 -621)">
                  <rect id="Box" width="68" height="68" transform="translate(1309 621)" fill="none"/>
                  <path id="Icon_Keyboard_Arrow_-_Up_Dark" data-name="Icon / Keyboard Arrow - Up / Dark" d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z" transform="translate(1353.483 637.15) rotate(90)" fill="#fff"/>
                </g>
              </Arrow>
            )}
            defaultControlsConfig={{
  nextButtonText: ' ',
  prevButtonText: ' ',
  pagingDotsStyle: {
    fill: 'none'
  }
            }} adaptiveHeight="false" slidesToShow={5} slidesToScroll={4} scrollMode="page"
            >

              {this.state.moviesList.map(item=>(
                <MovieBox>
                  <Figure>
                    <PosterInMovieBox src={item.poster} alt=""/>
                    <FavoriteHeartButton title="Favoritar" src={FavoriteHeart} alt="Botão de coração para favoritar."/>
                  </Figure>
                  <NameAndLike>
                  <TitleInMovieBox>{item.Name}</TitleInMovieBox>
                  <Assessment>
                    <NoteNumber>{item.evaluationInLikes}</NoteNumber>
                    <img src={LikeButton} alt="botão de coração simbolisando favorito"/>
                  </Assessment>
                  </NameAndLike>
                  <DescriptionMovieBox>{item.description}</DescriptionMovieBox>
                  
                </MovieBox>
              ))}
            </Carousel>
          </Highlighted>
        </Main>: false}
        
      </ContainerPag>
    )
  }
}