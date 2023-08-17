// import styles from './RoomPage.module.css';
import CardDeck from './CardDeck';
import Board from './Board';
import { useState } from 'react';

const RoomPage = () => {
  const [votes, setVotes] = useState([
    { name: 'Leandro', card: '5' },
    { name: 'Antonio', card: '8' },
  ]);

  const cards = [
    '?',
    '0',
    '0.5',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '21',
    '34',
    '100',
  ];

  const handleCardClick = (value) => {
    setVotes((current) => {
      return [...current, { name: 'TesteX', card: value }];
    });
  };

  return (
    <div className="flex flex-column">
      <CardDeck cards={cards} onCardClick={handleCardClick} />
      <div className="mt-6 mb-4 border-top-1 border-gray-200"></div>
      <Board votes={votes} />
    </div>
  );
};

export default RoomPage;
