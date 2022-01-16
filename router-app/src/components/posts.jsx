import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);
  const { year, month } = match.params;
  console.log(match);
  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month:{month}
    </div>
  );
};

export default Posts;
