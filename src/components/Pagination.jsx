const Pagination = ({ page, setPage, quotesData }) => {
  const numberOfAllPages = Math.ceil(quotesData.data.quotesCount / 5);

  return (
    <div className="flex gap-10 text-light">
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Prev
      </button>

      <span>
        Page: {page}/{numberOfAllPages}
      </span>

      <button
        onClick={() => {
          if (page < numberOfAllPages) {
            setPage((old) => old + 1);
          }
        }}
        disabled={page === numberOfAllPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
