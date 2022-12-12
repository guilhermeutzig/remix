import { Outlet } from "@remix-run/react";
import { type LinksFunction, type MetaFunction } from "@remix-run/node";

import globalStyles from "@/styles/global.css";

import Layout from "@/components/Layout";
import Document from "@/document";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export const meta: MetaFunction = () => {
  return {
    description: "Index description",
    keywords: "remix, react, javascript",
  };
};

function App() {
  return (
    <Document>
      <Layout>
        {/* Outlet is the route's children components */}
        <Outlet />
      </Layout>
    </Document>
  );
}

export default App;
