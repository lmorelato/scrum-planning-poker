const BoardLine = ({ name, card }) => {
  const cellClass = `col-6 py-2 px-4 border-top-1 border-gray-100 flex align-items-center`;
  const cardClass = `
    surface-900
    w-2rem h-3rem
    font-bold text-gray-500 text-base
    border-round
    flex align-items-center justify-content-center`;

  return (
    <>
      <div className={cellClass}>
        <div>{name}</div>
      </div>
      <div className={cellClass}>
        <div className={cardClass}>{card}</div>
      </div>
    </>
  );
};

export default BoardLine;
