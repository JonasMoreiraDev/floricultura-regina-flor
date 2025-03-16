import style from "./Header.module.css"
import Image from "next/image"
import Logo from "/public/Logo Regina Flor.png"
import Link from "next/link"
import { MdMenu } from "react-icons/md"

export default function Header({ setMenuIsVisible }){
    return(
        <header className={style.header}>

            <div className={style.limitar}>
                <Image className={style.logoTopo} src={Logo} alt="logo" />

                <nav className={style.menuDesktop}>
                    <Link href="/">HOME</Link>
                    <Link href="/catalogo">CATÁLOGO</Link>
                    <Link href="/eventos">EVENTOS</Link>
                    <Link href="#information">CONTATO</Link>
                </nav>

            <MdMenu className={style.menumob} size={35} onClick={() => setMenuIsVisible(true)}/>

            </div>


        </header>
    )
}