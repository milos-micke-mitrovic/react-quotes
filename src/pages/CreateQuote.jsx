import PageTitle from "../components/PageTitle";
import useCreateQuote from "../hooks/useCreateQuote";

const CreateQuote = () => {
  const {
    navigate,
    onSubmitHandler,
    content,
    setContent,
    contentError,
    setContentError,
    author,
    setAuthor,
    authorError,
    setAuthorError,
    tags,
    setTags,
    tagsError,
    setTagsError,
  } = useCreateQuote();

  return (
    <div className="flex flex-col items-center gap-10 text-light">
      <PageTitle text="Create new quote" />

      <form
        className="flex flex-col gap-5 w-1/3 sm:w-full"
        onSubmit={onSubmitHandler}
      >
        <div className="flex justify-between items-center">
          <span className="basis-1/4">Content:</span>

          <textarea
            className={`basis-3/4 h-7 ${contentError ? "border-red" : ""}`}
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setContentError(null)}
          />
        </div>

        {contentError && (
          <span className="text-red text-sm  self-end">{contentError}</span>
        )}

        <div className="flex justify-between items-center">
          <span className="basis-1/4">Author:</span>

          <input
            className={`basis-3/4 h-7 ${authorError ? "border-red" : ""}`}
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            onFocus={() => setAuthorError(null)}
          />
        </div>

        {authorError && (
          <span className="text-red text-sm  self-end">{authorError}</span>
        )}

        <div className="flex justify-between items-center">
          <span className="basis-1/4">Tags:</span>

          <input
            className={`basis-3/4 h-7 ${tagsError ? "border-red" : ""}`}
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            onFocus={() => setTagsError(null)}
          />
        </div>

        {tagsError && (
          <span className="text-red text-sm self-end">{tagsError}</span>
        )}

        <div className="flex justify-between">
          <button onClick={() => navigate(-1)}>Go back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuote;
