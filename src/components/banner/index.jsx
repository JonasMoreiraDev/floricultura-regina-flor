import styles from "./Banner.module.css"
import Image from "next/image";
import imgbanner from "../../../public/banner.png"

export default function Banner() {
 return (
   <section className={styles.secao_banner}>

    <picture className={styles.boxBanner}>
      <Image className={styles.banner} src={imgbanner} alt="Banner"/>
    </picture>

   </section>
 );
}