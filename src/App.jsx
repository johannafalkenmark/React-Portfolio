import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Startsida</title>
          <link rel="stylesheet" href="style.css" />

          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/459b57f74d.js"
            crossorigin="anonymous"
          ></script>
        </head>
        <body id="body-js">
          <div className="container">


            {/* header */}

            <Header></Header>

            <main className="page-content">
              
              {/* Hero */}
              <Hero></Hero>

{/* Section 1 (boxarna första raden) */}
<Section1></Section1>


{/* Section2 ( boxarna andra raden) */}
<Section2></Section2>

            </main>

{/* Footer */}
<Footer></Footer>
           
          </div>
          <script src="script.js"></script>
        </body>
      </html>
    </>
  );


}


export default App;
