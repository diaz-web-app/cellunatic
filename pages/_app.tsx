import { AppProps } from "next/app";
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from "../components/Navigation";
import './effect.css'
import { App_provider } from "../context/app/app_state";

function Myapp({ Component, pageProps }: AppProps) {
  
  return <App_provider>
    <Head>
      <link rel="manifest" href="/site.webmanifest.json" />
      <meta name="author" content="Diaz web app" />
      <meta property="fb:app_id" content="102477285277539" />
      <link rel="apple-touch-icon" href="/logo512x512.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    </Head>
    <Header />
    <Navigation />
    <Component {...pageProps} />
    <Footer />
    
    <div className="origin">
      <div className="control">
        <div className="galaxy">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
    <style jsx global>
      {
        `
            @font-face {
              font-family: 'cellunatic';
              src:url('/fonts/coursive2.ttf');
          }
          *{
              margin:0;
              scroll-behavior: smooth;
              box-sizing: border-box;
              text-decoration: none;
              outline: none;
              border:none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              color:var(--font-color);
          }
          *::before,
          *::after {
            margin: 0;
            border: 0;
            padding: 0;
            box-sizing: border-box;
          }
          *::-webkit-scrollbar{
            width:5px;
            background: var(--primary-color);
          }
          *::-webkit-scrollbar-thumb{
            background:var(--secondary-color);
          }
          :root{
              --height-header:55px;
              --secondary-color:orange;
              --alfa:rgba(0,0,0, .3);
              --darken:rgb(0,0,0);
              --primary-color:rgba(0, 0, 30, .9);
              --font-color:white;
              --shadow:0px 0px 2px var(--secondary-color);
              --radius:8px;
          }
          h1{
            font-size:2em;
          }
          
          header{
              position: fixed;
              height:var(--height-header);
              top:0;left:0;right:0;
              background: var(--primary-color);
              z-index: 10;
          }
          .container,main{
              width:98%;
              max-width: 1280px;
              position: relative;
              margin: 0 auto;
          }
          button{
              border-radius:4px;
              border:1px solid var(--secondary-color);
              background: var(--primary-color);
              margin: 5px;
              padding: 4px 6px;
              text-transform: uppercase;
              cursor: pointer;
          }
          main{
              display: grid;
              grid-template-columns: 1fr;
              margin: var(--height-header) auto;
              padding: 10px 0;
              gap: 10px;
          }
          main > section{
              width:100%;
              position:relative;
          }
          aside{
                display: none;
                width:250px;
            }
          
          /* Barra header*/
          .header_barr{
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              align-items: center;
              margin-top:calc(var(--height-header) / 5);
              background:rgba(0,0,0, .5);
              border-radius:10px;
          }
          .header_barr .logo{
              color:var(--secondary-color);
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          .header_barr .logo b{
              display: none;
          }
          .nav_header{
              width:auto;
          }
          .nav_header .btn_login{
              display: none;
          }
          
          /*/////////////////////////*/
         
          
          .coursive{
              font-family: 'cellunatic' !important;
          }
          /* Intro de la web*/
          .intro{
              width: 100%;
              height: calc(100vmax - var(--height-header));
              max-height: 512px;
              display:flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;
              align-content: center;
          }
          .intro > img{
              width:280px;
              height:280px;
          }
          
          .intro > div p, .intro > div > h1{
              text-align: center;
              margin: 5px auto;
          }
          .intro > div > h1{
              font-size: 2.5em;
          }
          
          .intro > div > p{
              font-size: 1.5em;
          }
          nav.botonera{
              margin: 10px auto;
          }
          nav.botonera > a{
              background-color: var(--primary-color);
              margin:10px;
              border:2px solid var(--secondary-color);
              padding:2px 5px;
          }
          /*//////*/
          @media(min-width:480px){
              /*Intro*/
              .intro > img{
                  width:40vmin;
                  height:40vmin;
              }
              .intro > div:first-child{
                  width:50%;
              }
              /*/////////////*/
          }
          @media(min-width:512px){
              /*intro*/
              .intro > img{
                  width:250px;
                  height: 250px;
              }
              /*////////*/
          }
          @media(min-width:580px){
            /*barra header*/
            .header_barr .logo b{
              display: contents;
            }
          }
          @media(min-width:720px){
              /*Intro*/
              .intro > div > h1{
                  font-size: 3.5em;
              }
              /*///*/
          
              /*barra header*/
              .nav_header .btn_login{
                  display: contents;
              }
              /*//////*/
          }
          @media(min-width:1024px){
            aside{
                display: block;
                height:max-content;
            }
              main{
                  grid-template-columns: 250px 1fr;
              }
              main > section{
                grid-column:2/span 1;
              }
              .full_width{
                  grid-column: 1 / span 2;
              }
          }
          
          @media(min-width:1080px){
              main,.container{
                  width: 80%;
              }
          }`
      }
    </style>
  </App_provider>
}

export default Myapp