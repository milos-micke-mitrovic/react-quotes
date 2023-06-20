import { capitalizeFirstLetter } from "../utils";

const Tags = ({ tags, setChosenTags, setPage }) => {
  const onChangeHandler = (e) => {
    const { value, checked } = e.target;

    setPage(1);

    if (checked) {
      setChosenTags((prev) => [...prev, value]);
    } else {
      setChosenTags((prev) => prev.filter((x) => x !== value));
    }
  };

  return (
    <div className="flex flex-col gap-5 text-light items-center">
      <div className="title">
        <b>Select tags from list:</b>
      </div>

      <div className="flex flex-col h-20 overflow-y-scroll border-2	border-green">
        {tags.map((tag, i) => (
          <label key={i + tag}>
            <input
              type="checkbox"
              name="tag"
              value={tag}
              onChange={onChangeHandler}
            />
            {capitalizeFirstLetter(tag)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Tags;
