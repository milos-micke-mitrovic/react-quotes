import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import useVote from "../../hooks/useVote";

const QuoteVote = ({ downvotesCount, upvotesCount, givenVote, id }) => {
  const {
    color,
    percent,
    upvotesCountState,
    downvotesCountState,
    upCaretClicked,
    downCaretClicked,
    onUpCaretClickHandler,
    onDownCaretClickHandler,
  } = useVote(downvotesCount, upvotesCount, givenVote, id);

  return (
    <div className="flex flex-col items-center gap-2 basis-2/12">
      <div
        className={`cursor-pointer ${
          upCaretClicked ? "text-light" : "text-grey"
        }`}
        onClick={onUpCaretClickHandler}
      >
        <FontAwesomeIcon icon={faCaretUp} />
      </div>

      <div style={{ color }}>{percent}</div>

      <div className="text-light">
        {upvotesCountState}/{downvotesCountState}
      </div>

      <div
        className={`cursor-pointer ${
          downCaretClicked ? "text-light" : "text-grey"
        }`}
        onClick={onDownCaretClickHandler}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default QuoteVote;
