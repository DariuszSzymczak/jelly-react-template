import React from 'react';
import styles from './DayNightSwitch.module.scss';
export const NavBar: React.VoidFunctionComponent = () => {
    const [isDay, setIsDay] = React.useState(true);

    const clickHandler = (): void => {
        setIsDay(!isDay);
    };

    return <div className={isDay ? `${styles.switchBox}` : `${styles.switchBox} ${styles.switchBoxNight}`} onClick={clickHandler}>
        <div className={styles.switchCircle}>
            {isDay ? <img src="assets/images/sun.svg" alt="sun" /> : <img src="assets/images/moon.svg" alt="moon" />}
        </div>
    </div>;
};
export default NavBar;