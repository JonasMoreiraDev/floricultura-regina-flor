import style from "./Banner.module.css";
import Link from "next/link";
import ImgFundo from "/public/Regina-Flor.png"
import Image from "next/image"; 
import { FaWhatsapp } from "react-icons/fa";

export default function Banner() {
    return(
        <section className={style.banner}>
            <Image src={ImgFundo} alt="imgFundo"/>
            <div className={style.texto_banner}>
                <h1>Espalhando beleza e carinho em cada arranjo.</h1>
            </div>

            <button className={style.BtnWppBanner}>
                <Link href="/"><FaWhatsapp size={30} />Faça seu Pedido Via WhatsApp!</Link>
            </button>
        </section>
    )
}