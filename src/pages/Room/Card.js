const Card = ({ value, onClick }) => {
  const cardClass = `
    surface-900
    w-6rem h-8rem
    font-bold text-0 text-2xl
    border-round
    flex align-items-center justify-content-center
    cursor-pointer`;

  return (
    <div className={cardClass} onClick={() => onClick(value)}>
      <span>{value}</span>
    </div>
  );
};

export default Card;
