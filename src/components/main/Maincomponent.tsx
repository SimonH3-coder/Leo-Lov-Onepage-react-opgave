import style from "./maincomponent.module.scss";
import Image2 from "../../assets/image2.jpg";
import Image1 from "../../assets/image1.jpg";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";
import Image7 from "../../assets/image7.png";
import Image8 from "../../assets/image8.png";
import Image3 from "../../assets/image3.png";

export const MainComponent = () => {
  return (
    <main>
      <section className={style.section1}>
        <figure>
          <figcaption>
            <img src={Image2} alt="Mand med penge" />

            <article>
              <h2>INTET PROBLEM</h2>
              <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. </p>
              <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
            </article>
          </figcaption>
        </figure>
      </section>

      <section className={style.section2}>
        <figure>
          <figcaption>
            <article>
              <h2>EVIG GARANTI</h2>
              <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. </p>
              <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
            </article>
            <img src={Image1} alt="Bygning" />
          </figcaption>
        </figure>
      </section>
      <section className={style.section3}>
        <h2>MØD HOLDET</h2>
        <div>
          <figure>
            <figcaption>
              <img src={Image5} alt="Holdet1" />
              <article>
                <h4>John Harbinger</h4>
                <p>Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.”</p>
              </article>
            </figcaption>
          </figure>

          <figure>
            <figcaption>
              <img src={Image6} alt="Holdet2" />
              <article>
                <h4>Peter Parker</h4>
                <p>Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John”</p>
              </article>
            </figcaption>
          </figure>
          <figure>
            <figcaption>
              <img src={Image7} alt="Holdet3" />
              <article>
                <h4>Elise Li</h4>
                <p>Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.”</p>
              </article>
            </figcaption>
          </figure>
          <figure>
            <figcaption>
              <img src={Image8} alt="Holdet4" />
              <article>
                <h4>Morten Nate</h4>
                <p>Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”</p>
              </article>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className={style.section4}>
        <figure>
          <figcaption>
            <img src={Image3} alt="Kort" />
            <h2>HER BOR VI</h2>
            <article>
              <p>
                Vi har valgt at bosætte os i solen! Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er.
                <a href="#">Leo Lov ApS Maldive rd. 22 Seychelles</a>
              </p>
            </article>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};
