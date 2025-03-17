import styles from "./LineFooter.module.css"
import Link from "next/link";
import WhatsAppButton from "../wppButton/WhatsAppButton";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function lineFooter() {
 return (
   <footer className={styles.footer}>
        <p>Site Desevolvido por <Link href="https://www.instagram.com/jonasmoreira_dev/" target="_blank">Jonas Moreira</Link></p>

        <Link href="/" className={styles.linkUp}>
        <FaCircleArrowUp size={35} className={styles.btnUp} />
        </Link>

        <WhatsAppButton phoneNumber={5521986391328} message={"Olá! "}/>
   </footer>
 );
}