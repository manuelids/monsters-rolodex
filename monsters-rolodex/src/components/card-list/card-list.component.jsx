import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css'

//Exportable CardList Component
export const CardList = (props) => (
    <div className="card-list">
        {
            //Iterate through each of the monsters passed in the props and create a new Card Component
            props.monsters.map(monster => (
                //Key shoulld always be set for a iteration
                <Card key={monster.id} monster={monster} />
            ))
        }
    </div>
)