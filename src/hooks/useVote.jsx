import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { calculatePercentAndColor } from "../utils";

const useVote = (downvotesCount, upvotesCount, givenVote, id) => {
  const [upCaretClicked, setUpCaretClicked] = useState(givenVote === "upvote");
  const [downCaretClicked, setDownCaretClicked] = useState(
    givenVote === "downvote"
  );
  const [upvotesCountState, setUpvotesCountState] = useState(upvotesCount);
  const [downvotesCountState, setDownvotesCountState] =
    useState(downvotesCount);

  const deleteVoteMutationFn = (upOrDownVote) =>
    fetch(`http://127.0.0.1:3000/quotes/${id}/${upOrDownVote}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDownvotesCountState(data.downvotesCount);
        setUpvotesCountState(data.upvotesCount);
      });

  const voteMutationFn = (upOrDownVote) => {
    fetch(`http://127.0.0.1:3000/quotes/${id}/${upOrDownVote}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setDownvotesCountState(data.downvotesCount);
        setUpvotesCountState(data.upvotesCount);
      });
  };

  const deleteVoteMutation = useMutation({
    mutationFn: (upOrDownVote) => deleteVoteMutationFn(upOrDownVote),
  });

  const voteMutation = useMutation({
    mutationFn: ({ upOrDownVote, voteThatMustBeDeleted }) => {
      if (voteThatMustBeDeleted) {
        deleteVoteMutationFn(voteThatMustBeDeleted).then(() =>
          voteMutationFn(upOrDownVote)
        );
      } else {
        voteMutationFn(upOrDownVote);
      }
    },
  });

  const { percent, color } = calculatePercentAndColor(
    upvotesCountState,
    downvotesCountState
  );

  const onUpCaretClickHandler = () => {
    if (upCaretClicked) {
      setUpCaretClicked(false);
      deleteVoteMutation.mutate("upvote");
    } else {
      setUpCaretClicked(true);
      setDownCaretClicked(false);
      voteMutation.mutate({
        upOrDownVote: "upvote",
        voteThatMustBeDeleted: downCaretClicked ? "downvote" : null,
      });
    }
  };

  const onDownCaretClickHandler = async () => {
    if (downCaretClicked) {
      setDownCaretClicked(false);
      deleteVoteMutation.mutate("downvote");
    } else {
      setDownCaretClicked(true);
      setUpCaretClicked(false);
      voteMutation.mutate({
        upOrDownVote: "downvote",
        voteThatMustBeDeleted: upCaretClicked ? "upvote" : null,
      });
    }
  };

  return {
    color,
    percent,
    upvotesCountState,
    downvotesCountState,
    upCaretClicked,
    downCaretClicked,
    onUpCaretClickHandler,
    onDownCaretClickHandler,
  };
};

export default useVote;
