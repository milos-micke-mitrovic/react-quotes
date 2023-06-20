import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const useCreateQuote = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [contentError, setContentError] = useState(null);
  const [authorError, setAuthorError] = useState(null);
  const [tagsError, setTagsError] = useState(null);

  const navigate = useNavigate();

  const createQuoteMutation = useMutation({
    mutationFn: ({ content, author, tags }) => {
      fetch("http://127.0.0.1:3000/quotes", {
        method: "POST",
        body: JSON.stringify({
          content,
          author,
          tags,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) navigate("/");

          if (data.content === "required") {
            setContentError("Content field is required.");
          }

          if (data.author === "required") {
            setAuthorError("Author field is required.");
          }
        });
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const regex = new RegExp("^[,a-zA-Z0-9 ]+$");

    if (!regex.exec(tags)) {
      setTagsError("Tags can only have numbers, letters, spaces and commas.");
      return;
    }

    const tagsArray = tags
      .split(",")
      .filter((tag) => tag.trim())
      .map((tag) => tag.trim());

    createQuoteMutation.mutate({
      content: content.trim(),
      author: author.trim(),
      tags: tagsArray,
    });
  };

  return {
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
  };
};

export default useCreateQuote;
