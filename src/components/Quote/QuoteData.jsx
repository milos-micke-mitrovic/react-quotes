const QuoteData = ({ author, content }) => {
  return (
    <div className="flex flex-col bg-light rounded-lg p-3 grow justify-between basis-10/12">
      <div>{content}</div>
      <div className="self-end author text-grey">{author}</div>
    </div>
  );
};

export default QuoteData;
