import React, { createContext, useState } from 'react'
import dataBoutique from '../dataBoutique';
const BoutiqueContext = createContext();

const BoutiqueProvider = (props) => {
    // dataBoutiqueState =>getter | setDataBoutiquestate (fonction) setter
    // useState(valeur) assigne une valeur à mon state
    const [dataBoutiqueState, setDataBoutiqueState] = useState(dataBoutique);

    /**
     * La fonction decrease retire un element au qte de l'objet ajouté
     * au panier (statePanier)
     * @param {Integer} id 
     * @param {String} str 
     */
    const addToPanier = (id, str = "string") => {
        /* let tmp = dataBoutiqueState[id]
        tmp.qte--; */
        // let tmpArray = dataBoutiqueState // ne fonctionne pas car dataBoutiqueState
        // est immutable
        /* 1ere  solution en utilisant un spread operator 
        je crée un nouveau tableau et y insere toutes les valeurs
        de dataBoutiqueState */
        //let tmpArray = [...dataBoutiqueState];
        /* 2e  solution en utilisant un map sur dataBoutiqueState
       je stoque toutes ses valeurs dans un nouveau tableau  */
        if (dataBoutiqueState[id].qte > 0) {
            let tmpArray = dataBoutiqueState.map(e => e)
            tmpArray[id].qte--;
            setDataBoutiqueState(tmpArray);
            setStatePanier([...statePanier, id]);
        }
    }
    const removeFromPanier = (id) => {
        // identique a addToPanier mais en retirant (qte--)
        // un element au stock par click
        let tmpArray = dataBoutiqueState.map(e => e)
        tmpArray[id].qte++;
        setDataBoutiqueState(tmpArray);

        //setStatePanier([...statePanier,id]); marche plus 😿
        // je creer une variable pour stocker l'index du
        // tableau statePanier à supprimer
        let indexASupprimer;
        // je cree une copie du tableau statePanier(immutable)
        let tmpPanier = statePanier.map((e, i) => {
            // je recherche l'index(i) de l'element a sdupprimer
            // et je le stoque dans indexASupprimer
            if (id === e) { indexASupprimer = i }
            // je retourne dans mon nouveau tableau tmpPanier
            // toutes les valeurs(e) de statePanier
            return e
        })
        // je supprime avec splice l'entrée de mon tmpPanier
        // qui correspond à l'id cliqué par mon client(indexASupprimer)
        tmpPanier.splice(indexASupprimer, 1);
        // je peux maintenant modifier statePanier en le remplacant
        // par le tmpPanier que je viens de creer
        setStatePanier(tmpPanier);
    }
    const [statePanier, setStatePanier] = useState([])
    console.dir(statePanier)
    return (
        <BoutiqueContext.Provider value={
            {
                'statePanier': statePanier,
                'dataBoutiqueState': dataBoutiqueState,
                'setStatePanier': setStatePanier,
                'setDataBoutiqueState': setDataBoutiqueState,
                'addToPanier': addToPanier,
                'removeFromPanier': removeFromPanier
            }
        }>
            {props.children}
        </BoutiqueContext.Provider>
    )
}
export { BoutiqueContext, BoutiqueProvider }