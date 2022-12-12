import { type LinksFunction, type MetaFunction } from "@remix-run/node";

import globalStyles from "@/styles/global.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export const meta: MetaFunction = () => {
  return {
    description: "Index description",
    keywords: "remix, react, javascript",
  };
};

function Home() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
    </div>
  );
}

export default Home;
