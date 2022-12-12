import { type LinksFunction } from "@remix-run/node";

import globalStyles from "@/styles/global.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

function Home() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
    </div>
  );
}

export default Home;
