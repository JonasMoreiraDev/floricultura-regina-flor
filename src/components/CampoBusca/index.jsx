import Lupa from '/public/lupa.png';
import styles from "./Campo.module.css"
import Image from 'next/image';

export default function CampoDeBusca({textoBuscaDigitado, handleBusca}) {
    return (
        <div className={styles.container}>
            <Image className={styles.icone} src={Lupa} alt="icone" />
            <input 
            type="text"
            value={textoBuscaDigitado}
            onChange={(event) => handleBusca(event.target.value)}
            placeholder='Pesquise aqui...'
             />
        </div>
    )
}