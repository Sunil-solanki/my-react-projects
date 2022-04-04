import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useEffect } from "react/cjs/react.development";

const QuoteDetail = () => {
  const params = useParams();

  const { quotesId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path="/quotes/:quotesId" exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quotesId}/comment`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quotesId/comment" exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
