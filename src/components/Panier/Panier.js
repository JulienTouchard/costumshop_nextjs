import React, { useContext } from 'react'
import { BoutiqueContext } from '../../contexts/BoutiqueContext'
import ArticlePanier from '../ArticlePanier/ArticlePanier';


function Panier() {
    const boutiqueContext = useContext(BoutiqueContext);
    // je prepare un tableau vide qui contiendra
    // des doubles valeurs : [ idArticle, qteArticlePanier]
    let emptyStatePanier = [];
    // je copie dans tableau NON IMMUTABLE les données de statePanier
    let tmpStatePanier = boutiqueContext.statePanier.map(e => e);
    // je trie le resultat 
    tmpStatePanier.sort();
    // si mon tmpStatePanier n'est pas vide
    if (tmpStatePanier.length > 0) {
        // crée une Quantite d'article qui correspondra à qteArticlePanier
        // (nombre d'article similaire = meme idArticle dans mon panier) 
        let qteArticlePanier = 1;
        // je boucle sur mon tableau d'article pour trouver
        // des idArticle identique
        tmpStatePanier.forEach((idArticle, index) => {
            // pour cette condition
            if (idArticle === tmpStatePanier[index + 1]) {
                // si le prochaine article es similaire au premier 
                // j'incremente sa quantite
                qteArticlePanier++;
                //ou pas un autre article avec un id different a ete trouvé
            } else {
                emptyStatePanier.push([idArticle, qteArticlePanier])
                // sinon je revient au nombre d'article defaut
                qteArticlePanier = 1;
            }
        })
        console.dir(emptyStatePanier);
    }
    let totalPrice = 0
    boutiqueContext.statePanier.forEach((e) => {
        totalPrice += boutiqueContext.dataBoutiqueState[e].price;
    })

    return (
        <div style={{ backgroundColor: "green" }}>
            <h4>Mon panier</h4>
            {
                boutiqueContext.statePanier.length > 0 ?

                    emptyStatePanier.map(
                        (element, index) => {
                            return (
                                <ArticlePanier key={index} id={element[0]} qteArt={element[1]}></ArticlePanier>
                            )
                        }) :
                    "Votre est actuellement vide"
            }
            <div>Livraison sous pli discret</div>
            {
                boutiqueContext.statePanier.length > 0 &&
                <div className='totalPrice'>{totalPrice} €</div>
            }
        </div>
    )
}

export default Panier


