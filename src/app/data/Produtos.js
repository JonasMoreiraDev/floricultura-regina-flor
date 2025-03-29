import Buque6rosas from "../../../public/buque-6-rosas-vermelhas.webp"
import Buque6gira from "../../../public/buque-6-girassol.png"
import Buque8gira from "../../../public/buque-6-girassois.jpg"
import Buque12gira from "../../../public/buque-12girassois.webp"
import BuqueFcamp from "../../../public/buque-flores-do-campo.jpg"
import BuqueRosaGira3 from "../../../public/buque-rosas-girassol.webp"
import BuqueRosaGira6 from "../../../public/buque-girassol-e-rosas.webp"
import GirassolVidro from "../../../public/arranjo-girassol.jpg"
import GerberaVidro from "../../../public/arranjo-gerbera.webp"
import RosaVidro  from "../../../public/arranjo-rosas.webp"
import AstroVidro from "../../../public/arranjo-astromelia.jpg"
import RosaCaixa from "../../../public/rosas-na-caixa.webp"
import GiraCaixa from "../../../public/girassol-na-caixa.png"
import AstroCaixa from "../../../public/astromelia-na-caixa.webp"
import Ferrero3 from "../../../public/ferrero-3unid.webp"
import Ferrero8 from "../../../public/ferrero-8unid.webp"
import Ferrero12 from "../../../public/ferrero-12unid.jpg"
import BaldeH from "../../../public/balde-heineken.webp"
import Cestas from "../../../public/cestas.png"
import Rosa from "../../../public/rosa.webp"
import Girassol from "../../../public/girassol.webp"
import Gerbera from "../../../public/gerbera.webp"
import Lirio from "../../../public/lirio.jpg"
import Gipsy from "../../../public/gipsy.jpg"
import Margarida from "../../../public/margarida.png"
import Pimentinha from "../../../public/pimentinha.webp"
import Orquidea from "../../../public/orquideas.jpeg"
import Tango from "../../../public/tango.jpg"
import ChuvaPrata from "../../../public/chuva-de-prata.jpg"
import CachepotRosas from "../../../public/cachepot-rosas.jpg"
import CachepotGiraRosa from "../../../public/cachepot-girassol+rosa.webp"
import CachepotGira from "../../../public/cachepot-girassol.jpg"
import Arruda from "../../../public/arruda.jpeg"
import Astromelia from "../../../public/astrimelia.png"
import Eucalipto from "../../../public/eucalipto.jpg"
import Ursinho from "../../../public/ursinhos2.webp"


export const Produtos = [
    /*Buque de rosas*/
    {id: 1, title: "Buquê 6 rosas", price: 80.00, category:"Buques" , imagem: Buque6rosas},
    {id: 2, title: "Buquê 8 rosas", price: 100.00, category: "Buques" , imagem: Buque6rosas},
    {id: 3, title: "Buquê 12 rosas", price: 120.00, category: "Buques" , imagem: Buque6rosas},
    {id: 4, title: "Buquê 24 rosas", price: 240.00, category: "Buques" , imagem: Buque6rosas},
    {id: 5, title: "Buquê 36 rosas", price: 360.00, category: "Buques" , imagem: Buque6rosas},
    /*Buque de Girassol*/
    {id: 6, title: "Buquê 6 girassóis", price: 100.00, category: "Buques" , imagem: Buque6gira},
    {id: 7, title: "Buquê 8 girassóis", price: 120.00, category: "Buques" , imagem: Buque8gira},
    {id: 8, title: "Buquê 12 girassóis", price: 180.00, category: "Buques" , imagem: Buque12gira},
    /*Buque de Flor do campo*/
    {id: 9, title: "Buquê Flor do Campo Pequeno", price: 80.00, category: "Buques" , imagem: BuqueFcamp},
    {id: 10, title: "Buquê Flor do Campo Médio", price: 100.00, category: "Buques" , imagem: BuqueFcamp},
    {id: 11, title: "Buquê Flor do Campo Grande", price: 120.00, category: "Buques" , imagem: BuqueFcamp},
    /*Buque de Girassol com Rosa*/
    {id: 12, title: "Buquê 3 rosa + 3 girassol", price: 100.00, category: "Buques" , imagem: BuqueRosaGira3},
    {id: 13, title: "Buquê 4 rosa + 4 girassol", price: 120.00, category: "Buques" , imagem: BuqueRosaGira3},
    {id: 14, title: "Buquê 6 rosa + 6 girassol", price: 150.00, category: "Buques" , imagem: BuqueRosaGira6},
    /*Arranjo no vaso de vidro*/
    {id: 15, title: "Arranjo de Girassol no Vidro", price: 150.00, category: "Arranjo" , imagem: GirassolVidro},
    {id: 16, title: "Arranjo de Gerbera no Vidro", price: 160.00, category: "Arranjo" , imagem: GerberaVidro},
    {id: 17, title: "Arranjo de Rosa no Vidro", price: 180.00, category: "Arranjo" , imagem: RosaVidro},
    {id: 18, title: "Arranjo de Astromélia no Vidro", price: 160.00, category: "Arranjo" , imagem: AstroVidro},
    /*Flores na caixa*/
    {id: 19, title: "Buquê de Rosas na caixa", price: 150.00, category: "Arranjo" , imagem: RosaCaixa},
    {id: 20, title: "Buquê de Girassol na caixa", price: 150.00, category: "Arranjo" , imagem: GiraCaixa},
    {id: 21, title: "Buquê de Astromélia na caixa", price: 150.00, category: "Arranjo" , imagem: AstroCaixa},
    /*Chocolate*/
    {id: 22, title: "Ferrero Rocher 3 unidades", price: 15.00, category: "Chocolate" , imagem: Ferrero3},
    {id: 23, title: "Ferrero Rocher 8 unidades", price: 31.00, category: "Chocolate" , imagem: Ferrero8},
    {id: 24, title: "Ferrero Rocher 12 unidades", price: 38.00, category: "Chocolate" , imagem: Ferrero12},
    /*Baldes*/
    {id: 25, title: "Balde Heineken", price: 150.00 , category: "Cestas" , imagem: BaldeH},
    /*Cestas*/
    {id: 26, title: "Cesta de presente 01" , price: 150.00, category: "Cestas" , imagem: Cestas},
    {id: 27, title: "Cesta de presente 02" , price: 190.00, category: "Cestas" , imagem: Cestas},
    {id: 28, title: "Cesta de presente 03" , price: 170.00, category: "Cestas" , imagem: Cestas},
    {id: 29, title: "Cesta de presente 04" , price: 215.00, category: "Cestas" , imagem: Cestas},
    {id: 30, title: "Cesta de presente 05" , price: 275.00, category: "Cestas" , imagem: Cestas},
    {id: 31, title: "Cesta de presente 06" , price: 275.00, category: "Cestas" , imagem: Cestas},
    {id: 32, title: "Cesta de presente 07" , price: 300.00, category: "Cestas" , imagem: Cestas},
    {id: 33, title: "Cesta de presente 08" , price: 350.00, category: "Cestas" , imagem: Cestas},
    {id: 34, title: "Cesta de presente 09" , price: 310.00, category: "Cestas" , imagem: Cestas},
    /*Unidades*/
    {id: 35, title: "Rosa", price: 5.00, category: "Unidades" , imagem: Rosa},
    {id: 36, title: "Girassol", price: 7.00, category: "Unidades" , imagem: Girassol},
    {id: 37, title: "Margarida", price: 4.00, category: "Unidades" , imagem: Margarida},
    {id: 38, title: "Astromélia", price: 5.00, category: "Unidades" , imagem: Astromelia},
    {id: 39, title: "Gerbera", price: 6.00, category: "Unidades" , imagem: Gerbera},
    {id: 40, title: "Lírio", price: 15.00, category: "Unidades" , imagem: Lirio},
    {id: 41, title: "Arruda", price: 5.00, category: "Unidades" , imagem: Arruda},
    {id: 42, title: "Chuva de Prata", price: 7.00, category: "Unidades" , imagem: ChuvaPrata},
    {id: 43, title: "Eucalipto (amarrado)", price: 10.00, category: "Unidades" , imagem: Eucalipto},
    {id: 44, title: "Aste", price: 5.00, category: "Unidades" , imagem: Tango},
    {id: 45, title: "Tango", price: 3.00, category: "Unidades" , imagem: Tango},
    {id: 46, title: "Gipsy (amarrado)", price: 10.00, category: "Unidades" , imagem: Gipsy},
    /*cachepot*/
    {id: 47, title: "cachepot de rosas", price: 80.00, category: "Arranjo" , imagem: CachepotRosas},
    {id: 48, title: "cachepot de girassol", price: 80.00, category: "Arranjo" , imagem: CachepotGira},
    {id: 49, title: "cachepot de rosas e girassol", price: 80.00, category: "Arranjo" , imagem: CachepotGiraRosa},
    /*Plantados*/
    {id: 50, title: "Orquídea (COR)", price: 150.00, category: "Plantados" , imagem: Orquidea},
    {id: 51, title: "Pimentinha", price: 15.00, category: "Plantados" , imagem: Pimentinha},
    /*Ursinho*/
    {id: 52, title: "Ursinho 1", price: 70.00, category: "Ursinhos" , imagem: Ursinho},
    ]
    
    
    
    
    