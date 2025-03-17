import styles from "./Footer.module.css";
import Link from "next/link";


export default function Footer() {
  return (
    <section className={styles.information} id="information">
      <div className={`${styles.information_content} ${styles.hours}`} >
        <h3>
          H O R Á R I O &nbsp; D E <br/>
          <span className={styles.text_information}>F U N C I O N A M E N T O</span> <hr className={styles.hr} />
        </h3>
          <p>
            <strong>Segunda á Sábado</strong> <br /> 07:30 ás 19:00
          </p>
          <p>
            <strong>Domingo e Feriados</strong> <br /> 07:30 ás 13:00
          </p>
        
      </div>

      <div className={styles.information_content} id="contacts">
        <h3>
          C O N T A T O S <hr className={styles.hr}/>
        </h3>
        <p>
          <strong>WhatsApp:</strong> <Link href="tel:21986391328" target="_blank">(21) 98639-1328</Link>
        </p>
        <p>
          <strong>Telefone Fixo:</strong> <Link href="tel:2134375548" target="_blank">(21) 3437-5548</Link>
        </p>
        <p>
          <strong>Instagram:</strong> <Link href="https://www.instagram.com/reginaflorjpa/" target="_blank">@ReginaFlorJPA</Link>
        </p>
        <p>
          <strong>Email:</strong>
          <Link href="mailto:reginaflorjpa@gmail.com" target="_blank"> reginaflorjpa@gmail.com</Link>
        </p>
      </div>

      <div className={`${styles.information_content} ${styles.location}`} >
        <h3>
          O N D E <br />
          <span className={styles.text_information}>
            E S T A M O S <hr className={styles.hr}/>
          </span>
        </h3>
        <p>
          <strong>
            Est. dos Bandeirantes, 505 - <br />
            Taquara - Jacarepaguá-RJ
          </strong>
        </p>
        <iframe className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6042052522216!2d-43.37347811135064!3d-22.92796506530435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8fa2f3fa653%3A0xd21c66ca34b35ddc!2sREGINA%20FLOR%20%5C%20FLORICULTURA!5e0!3m2!1spt-PT!2sbr!4v1723474103989!5m2!1spt-PT!2sbr"
          max-width="300"
          max-height="200"
          loading="lazy"
        ></iframe>
      </div>
    </section>

  );
}
