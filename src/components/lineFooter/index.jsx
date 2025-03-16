import styles from "./LineFooter.module.css"
import Link from "next/link";

export default function lineFooter() {
 return (
   <div className={styles.footer}>
        <p>Site Desevolvido por <Link href="https://www.instagram.com/jonasmoreira_dev/" target="_blank">Jonas Moreira</Link></p>
   </div>
 );
}