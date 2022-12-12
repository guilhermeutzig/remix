import { Outlet } from "@remix-run/react";

import Layout from "@/components/Layout";
import Document from "@/document";

function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export default App;
