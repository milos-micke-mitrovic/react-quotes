import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import Quote from "../components/Quote/Quote";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination";
import Tags from "../components/Tags";
import Sort from "../components/Sort";
import useQuotes from "../hooks/useQuotes";
import Button from "../UI/Button";

const Home = () => {
  const {
    page,
    setPage,
    setChosenTags,
    setSortBy,
    setSortDirection,
    quotesQuery,
    tagsQuery,
  } = useQuotes();

  return (
    <div className="flex flex-col items-center gap-10">
      <PageTitle text="Quotes" />

      <div className="flex gap-10">
        {tagsQuery.data && (
          <Tags
            tags={tagsQuery.data}
            setChosenTags={setChosenTags}
            setPage={setPage}
          />
        )}

        <Sort setSortBy={setSortBy} setSortDirection={setSortDirection} />

        <Link to="create-quote">
          <Button>Create new Quote</Button>
        </Link>
      </div>

      {!quotesQuery.data ? (
        <Loader />
      ) : (
        <>
          {quotesQuery.data.quotes.map((quote) => (
            <Quote key={quote.id} quote={quote} />
          ))}

          <Pagination page={page} setPage={setPage} quotesData={quotesQuery} />
        </>
      )}
    </div>
  );
};

export default Home;
