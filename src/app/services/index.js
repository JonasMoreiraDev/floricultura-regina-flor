 import { Produtos } from "../data/Produtos";

 export const buscarProduto = (textoDigitado) => {
    return Produtos.filter((produto) => produto.title.toLowerCase().includes(textoDigitado.toLowerCase()) || produto.category.toLowerCase().includes(textoDigitado.toLowerCase()))
 };

 export const filtrarProdutos = (category) => {
    return Produtos.filter( (produto) => produto.category === category);
};

export const produtosEntradas = filtrarProdutos("Buques");