import * as React from "react";
import { Link } from "gatsby";

const PostLink = ({ slug, title, date, excerpt }) => {
  return (
    <div>
      <h2>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </h2>
      <p>Posted: {date}</p>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostLink;
