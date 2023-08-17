import Card from './Card';

const CardDeck = ({ cards, onCardClick }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {cards &&
        cards.map((value) => (
          <Card key={value} value={value} onClick={onCardClick} />
        ))}
    </div>
  );
};

export default CardDeck;
