import { createContext, useState } from "react";

export const CommentContext = createContext(null);

export const CommentProvider = (props) => {
  const [comment, setComment] = useState([]);
  return (
    <CommentContext.Provider value={(comment, setComment)}>
      {props.children}
    </CommentContext.Provider>
  );
};
