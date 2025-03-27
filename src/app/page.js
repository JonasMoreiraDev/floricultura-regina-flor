'use client'
import Header from "@/components/header";
import Banner from "@/components/banner";
import CampoDeBusca from "@/components/CampoBusca";
import BtnCategoria from "@/components/btnCategoria";
import MenuMobile from "@/components/menuMobile";
import style from "./page.module.css"
import { useState } from "react";
import { produtosEntradas, filtrarProdutos, buscarProduto } from "./services";
import CardProduto from "@/components/cardProduto";
import Information from "@/components/Information";

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaClicado] = useState("Buques");
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleFiltro = (category) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(category));
    setBotaClicado(category);
  }

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >=3 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaClicado("");
  }
  
 return (
  <>
    <Header 
    setMenuIsVisible={setMenuIsVisible}
    />

    <Banner />
    <main className={style.main}>
      
    <h1>Categorias</h1>
      
      <CampoDeBusca
        handleBusca={handleBusca}
        textoBuscaDigitado={textoBuscaDigitado} 
      />

      <BtnCategoria 
      handleFiltro={handleFiltro}
      botaoClicado={botaoClicado}
      />

      <h3 className={style.txtprod}>Produtos</h3>
      <section className={style.secaoProduto}>
       <div className={style.produtos}>
        {dadosFiltrados.map((produto) => (
          <CardProduto key={produto.id ?? index} produto={produto} />
        ))}
      </div> 

      </section>

    </main>
    <Information />

    <MenuMobile  
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
    />

  </>
 );
}
