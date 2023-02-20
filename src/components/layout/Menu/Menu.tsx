import styles from "./Menu.module.scss";
export const Menu: React.VoidFunctionComponent = () => {
  return (
    <div className={styles.sideBar}>
      <nav className={`${styles.navigation} navigation`}>
        <ul>
          <li>
            <a href="#Start">Start</a>
            <a href="#O FokoPsie">O FokoPsie</a>
            <a href="#FokoCoin">FokoCoin</a>
            <a href="#Airdrop">Airdrop</a>
            <a href="#Kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
