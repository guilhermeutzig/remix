import { useParams } from "@remix-run/react";

type Params = {
  postId: string;
};

function Post() {
  const { postId } = useParams<Params>();

  return (
    <div>
      <h1>Post {postId}</h1>
    </div>
  );
}

export default Post;
