import React, { useContext } from 'react';
import { BoutiqueContext } from '@/contexts/BoutiqueContext';
//import './Boutique.css';

import CardShop from '../CardShop/CardShop';

function Boutique() {
    const boutiqueContext = useContext(BoutiqueContext);
    return (
        <div className='card-container'>
            {boutiqueContext.dataBoutiqueState.map(
                (element, index) => {
                    // element.id = index
                    // spread operator => ...element,id:index
                    return <CardShop key={index}
                        data={{ id: index, ...element }}
                        click={
                            (e) => boutiqueContext.addToPanier(e)

                        }>
                    </CardShop>
                })}
            {/* {boutiqueContext.dataBoutiqueState.map((element,index)=><Card key={index} data={element}></Card>)} */}
        </div>
    )
}

const Mafonction = () => {
    // ici je peux ajouter plusieurs instruction contrairement à la 
    return <div>Ma fonction</div>
}
const Mafonction2 = () => <div>Ma fonction12</div>

export default Boutique


