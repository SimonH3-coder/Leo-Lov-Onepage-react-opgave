import style from "./navcomponent.module.scss";

export const Navcomponent = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navlist}>
        <li className={style.navitem}>
          <a href="#">Hjem</a>
        </li>
        <li className={style.navitem}>
          <a href="#">Advokaterne</a>
        </li>
        <li className={style.navitem}>
          <a href="#">Om LeoLov</a>
        </li>
        <li className={style.navitem}>
          <a href="#">Kontakt</a>
        </li>
      </ul>
      <li className={style.nav2}>
        <p>
          <span>Leo-</span>lov
        </p>
      </li>
    </nav>
  );
};
