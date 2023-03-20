import foramt from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss";

export function Header() {
  const currentDate = foramt(new Date(), "EEEEEE, d MMMM",{
    locale: ptBR
  });
  return (
    <header className={styles.hedercontainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}
