import styles from "./btnCategoria.module.css";
import Image from "next/image";
import Bugues from "../../../public/buque-rosas.png";
import Arranjos from "../../../public/flores-na-caixa.webp";
import Cestas from "../../../public/cesta 2.png";
import Unidades from "../../../public/unidades.png";
import Chocolates from "../../../public/ferroro-cate.webp";
import Plantados from "../../../public/plantados.webp";
import Ursinhos from "../../../public/ursinhos2.webp";


export default function BtnCategoria({ handleFiltro, botaoClicado }) {
  return (
    <section className={styles.secao_categoria}>
      <div className={styles.container_botoes}>
        
        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Buques" ? styles.acenderBtn : styles.apagarBtn
            }
            onClick={() => handleFiltro("Buques")}
          >
            <Image src={Bugues} alt="Buquês" />
          </button>
          <span>Buquês</span>
        </div>

        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Arranjo" ? styles.acenderBtn : styles.apagarBtn
            }
            onClick={() => handleFiltro("Arranjo")}
          >
            <Image src={Arranjos} alt="Arranjos" />
          </button>
          <span>Arranjos</span>
        </div>

        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Cestas" ? styles.acenderBtn : styles.apagarBtn
            }
            onClick={() => handleFiltro("Cestas")}
          >
            <Image src={Cestas} alt="cestas" />
          </button>
          <span>Cestas</span>
        </div>

        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Unidades" ? styles.acenderBtn : styles.apagarBtn
            }
            onClick={() => handleFiltro("Unidades")}
          >
            <Image src={Unidades} alt="unidades" />
          </button>
          <span>Unidades</span>
        </div>

        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Chocolate"
                ? styles.acenderBtn
                : styles.apagarBtn
            }
            onClick={() => handleFiltro("Chocolate")}
          >
            <Image src={Chocolates} alt="Chocolates" />
          </button>
          <span>Chocolate</span>
        </div>

        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Plantados"
                ? styles.acenderBtn
                : styles.apagarBtn
            }
            onClick={() => handleFiltro("Plantados")}
          >
            <Image src={Plantados} alt="Plantados" />
          </button>
          <span>Plantados</span>
        </div>

        <div className={styles.box_btn}>
          <button
            className={
              botaoClicado === "Ursinhos" ? styles.acenderBtn : styles.apagarBtn
            }
            onClick={() => handleFiltro("Ursinhos")}
          >
            <Image src={Ursinhos} alt="Ursinhos" />
          </button>
          <span>Ursinhos</span>
        </div>
      </div>
    </section>
  );
}
