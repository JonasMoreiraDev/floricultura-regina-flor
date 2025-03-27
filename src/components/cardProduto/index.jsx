import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css"
import Rosas from "../../../public/buque-rosas.png"
import { FaWhatsapp } from "react-icons/fa";

export default function CardProduto( { produto }) {
 return (
    <div className={styles.card}>

        <figure className={styles.box_img}>
          <Image src={Rosas} alt="Rosas"/>
        </figure>

      <div className={styles.box_descricao}>
        <h3>{produto.title}</h3>
          <p>R${produto.price},00</p>
          <span>*Os preços podem variar</span>
          <button className={styles.btnwpp}> 
            <Link href={"https://wa.me/5521986391328"} target="_blank"> <FaWhatsapp size={15}/> Peça pelo WhatsApp</Link>
          </button>
      </div>

    </div>
 );
}

