
import Link from "next/link";
import { Container } from "./styles";
import { IoClose } from "react-icons/io5";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

      <nav>
        <Link href="#home">Home</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/eventos">Eventos</Link>
        <Link href="#contato">Contato</Link>
      </nav>
    </Container>
  );
}