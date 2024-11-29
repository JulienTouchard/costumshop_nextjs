"use client"
import { BoutiqueProvider } from "@/contexts/BoutiqueContext";
import Navigation from "@/components/Navigation/Navigation";
import Panier from "@/components/Panier/Panier";
import Boutique from "@/components/Boutique/Boutique";
import styles from "@/styles/Home.module.css";



export default function Home() {
  return (
    <BoutiqueProvider>
      <header>
        <Navigation></Navigation>
      </header>
      <main>

        <Panier></Panier>
        <Boutique></Boutique>

      </main>
      <footer></footer>
    </BoutiqueProvider>
  );
}
