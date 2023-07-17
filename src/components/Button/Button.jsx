export const Button = ({ onLoadMore }) => {
  return (
    <div className="Load-more-wrap">
      <button type="button" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};
