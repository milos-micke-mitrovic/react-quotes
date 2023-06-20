import QuoteVote from "./QuoteVote";
import QuoteData from "./QuoteData";

const Quote = ({ quote }) => {
  return (
    <div className="flex gap-10 w-2/3 sm:w-full">
      <QuoteVote
        downvotesCount={quote.downvotesCount}
        upvotesCount={quote.upvotesCount}
        givenVote={quote.givenVote}
        id={quote.id}
      />

      <QuoteData author={quote.author} content={quote.content} />
    </div>
  );
};

export default Quote;
