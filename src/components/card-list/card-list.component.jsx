import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
            // map returns function we call and iterates over every element in the function
            // map creates new arrays on our existing arrays 
        ))}
    </div>
);