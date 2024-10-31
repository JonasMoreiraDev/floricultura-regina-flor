import style from "./Header.module.css"
import Image from "next/image"
import Logo from "/public/Logo Regina Flor.png"
import Link from "next/link"

export default function Header(){
    return(
        <header className={style.header}>

            <div className={style.limitar}>
                <Image className={style.logoTopo} src={Logo} />

                <nav className={style.menuDesktop}>
                    <Link href="">HOME</Link>
                    <Link href="">CATÁLOGO</Link>
                    <Link href="">EVENTOS</Link>
                    <Link href="">CONTATO</Link>
                </nav>
            </div>


        </header>
    )
}