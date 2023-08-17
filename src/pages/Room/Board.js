const { default: BoardLine } = require('./BoardLine');

const Board = ({ votes }) => {
  const gridClass = `
    grid grid-nogutter
    surface-800
    text-0
    border-round`;
  const titleClass = `col-6 py-3 px-4 text-sm text-gray-400`;

  return (
    <div className={gridClass}>
      <div className={titleClass}>Name</div>
      <div className={titleClass}>Card</div>
      {votes &&
        votes.map((vote) => <BoardLine name={vote.name} card={vote.card} />)}
    </div>
  );
};

export default Board;
