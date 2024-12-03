import style from "./Banner.module.css";
import Link from "next/link";
import ImgFundo from "/public/Regina-Flor.png"
import Image from "next/image"; 
import { FaWhatsapp } from "react-icons/fa";
import banner1 from "/public/banner.png"

export default function Banner() {
    return(
        <section className={style.banner}>
          <Image src={banner1} alt="banner"/>

          <Link className={style.BtnWppBanner} href="#">
          <FaWhatsapp size={30} /> 
          Peça pelo WhatsApp!
          </Link>
        
        </section>
    )
}