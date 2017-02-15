import React, { Component } from 'react';
import Card from './Card';
import data from './data.json';

class CardContainerComponent extends Component {  
  createCard(cards) {
    return <Card 
        key={cards.title} 
        title={cards.title} 
        image={cards.img}
        paragraph={cards.paragraph}
        />;
  }
  createCards(cards) {
    return cards.map(this.createCard);
  }
  render () {
    return (
        <div>
            {this.createCards(data.cards)}
        </div>
    );
  }
};
export default CardContainerComponent;