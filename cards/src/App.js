import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const StackedCards = () => {
  const [cards, setCards] = useState([
    { id: 1, zIndex: 3, translateY: 0 },
    { id: 2, zIndex: 2, translateY: 30 },
    { id: 3, zIndex: 1, translateY: 60 },
  ]);

  const bringToFront = (clickedCard) => {
    const updatedCards = cards.map((card) => ({
      ...card,
      zIndex: card.id === clickedCard.id ? cards.length : card.zIndex - 1,
    }));

    setCards(updatedCards);
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ zIndex: card.zIndex, transform: `translateY(${card.translateY}px)` }}
          onClick={() => bringToFront(card)}
        >
          Card {card.id}
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
