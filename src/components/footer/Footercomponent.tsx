import style from "./footercomponent.module.scss";
import Image9 from "../../assets/image9.jpg";
import Image10 from "../../assets/image10.webp";

export const FooterComponent = () => {
  return (
    <footer className={style.footer}>
      <ul>
        <h3>Adresse</h3>
        <li>Find os her:</li>
        <li>Maldive rd. 22,</li>
        <li>Seychelle Islands</li>
      </ul>

      <ul>
        <h3>Kontakt</h3>
        <li>Kontakt os her:</li>
        <li>email@mail.dk</li>
        <li>Tlf: 0192 3023</li>
      </ul>

      <ul>
        <h3>Politik</h3>
        <li>Vores politikker:</li>
        <li>Privatlivspolitik</li>
        <li>Cookiepolitik</li>
        <li>Generelle betingelser</li>
      </ul>

      <div>
        <h3>Sociale medier</h3>
        <figure>
          <img src={Image9} alt="Facebook logo" />
          <img src={Image10} alt="Instagram logo" />
        </figure>
      </div>
    </footer>
  );
};
