import { useState } from "react";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../UI/Dropdown";

const Sort = ({ setSortDirection, setSortBy }) => {
  const [upArrowClicked, setUpArrowClicked] = useState(true);
  const [downArrowClicked, setDownArrowClicked] = useState(false);

  const onUpArrowClickHandler = () => {
    if (upArrowClicked) return;
    setSortDirection("desc");
    setUpArrowClicked(true);
    setDownArrowClicked(false);
  };

  const onDownArrowClickHandler = () => {
    if (downArrowClicked) return;
    setSortDirection("asc");
    setDownArrowClicked(true);
    setUpArrowClicked(false);
  };

  return (
    <div className="flex gap-5 text-light">
      <div className="flex flex-col items-center gap-5">
        <b>Sort by:</b>
        <Dropdown onChange={(e) => setSortBy(e.target.value)}>
          <option value="createdAt">Published</option>
          <option value="author">Author</option>
          <option value="upvotesCount">Upvotes Count</option>
        </Dropdown>
      </div>

      <div className="flex flex-col items-center gap-5">
        <b> Sort direction:</b>
        <span className="flex gap-5 ">
          <FontAwesomeIcon
            className={`cursor-pointer ${
              upArrowClicked ? "text-light" : "text-grey"
            }`}
            icon={faArrowUp}
            onClick={onUpArrowClickHandler}
          />

          <FontAwesomeIcon
            className={`cursor-pointer ${
              downArrowClicked ? "text-light" : "text-grey"
            }`}
            icon={faArrowDown}
            onClick={onDownArrowClickHandler}
          />
        </span>
      </div>
    </div>
  );
};

export default Sort;
