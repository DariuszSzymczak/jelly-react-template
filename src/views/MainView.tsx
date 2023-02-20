import Particles from "@/components/animation/Particles";
import Menu from "@/components/layout/Menu";
import React from "react";
import { useCallback } from "react";
import styles from "./MainView.module.scss";
export class MainView extends React.PureComponent {
  componentDidMount() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll(
      "section[id]"
    ) as unknown as HTMLElement[];

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const doc1 = document.querySelector(
            ".navigation a[href*=" + sectionId + "]"
          );
          if (doc1) {
            doc1.classList.add(styles.active);
          }
        } else {
          const doc2 = document.querySelector(
            ".navigation a[href*=" + sectionId + "]"
          );
          if (doc2) {
            doc2.classList.remove(styles.active);
          }
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Particles />
        <Menu />
        <div className={styles.mainContent}>
          <section id="Start">
            <img src="assets/fokopies.png" className={styles.fokopies}></img>
            <h1>FOKO PIES</h1>
          </section>
          <section id="O FokoPsie">
            <h1>Co to jest FokoPies ? </h1>
          </section>
          <section id="FokoCoin">
            <h1>FokoCoin</h1>
          </section>
          <section id="Airdrop">
            <h1>Airdrop</h1>
          </section>
          <section id="Kontakt">
            <h1>Kontakt</h1>
          </section>
        </div>
      </div>
    );
  }
}

export default MainView;
