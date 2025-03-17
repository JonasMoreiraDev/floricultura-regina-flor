
import Link from "next/link";
import { Container } from "./styles";
import { IoClose } from "react-icons/io5";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

      <nav>
        <Link href="/" onClick={() => setMenuIsVisible(false)}>Home</Link>
        <Link href="/catalogo" onClick={() => setMenuIsVisible(false)}>Catálogo</Link>
        <Link href="/eventos" onClick={() => setMenuIsVisible(false)}>Eventos</Link>
        <Link href="#information" onClick={() => setMenuIsVisible(false)}>Contato</Link>
      </nav>
    </Container>
  );
}