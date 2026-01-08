import style from "./maincomponent.module.scss";
import Image2 from "../../assets/image2.jpg";
import Image1 from "../../assets/image1.jpg";

export const MainComponent = () => {
  return (
    <main>
      <section className={style.section1}>
        <figure>
          <figcaption>
            <img src={Image2} alt="Mand med penge" />
            <h2>INTET PROBLEM</h2>
            <article>
              <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
            </article>
          </figcaption>
        </figure>
      </section>

      <section className={style.section2}>
        <figure>
          <figcaption>
            <img src={Image1} alt="Bygning" />
            <h2>EVIG GARANTI</h2>
            <article>
              <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
            </article>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};
